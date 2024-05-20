<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import mqtt from 'mqtt';
	import { onMount, onDestroy } from 'svelte';
	import Timetable from '$lib/components/Timetable.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import Composition from '$lib/components/Composition.svelte';
	import PassangerInformation from '$lib/components/PassangerInformation.svelte';
	import WayMessages from '$lib/components/WayMessages.svelte';
	import Routesets from '$lib/components/Routesets.svelte';
	import { nerdmode } from '$lib';
	import Speed from '$lib/components/Speed.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let { data } = $props();
	let routesets: TrainRoute[] = $state([]);
	let client: mqtt.MqttClient;

	onMount(async () => {
		client = mqtt.connect('wss://rata.digitraffic.fi/mqtt');
		client.on('connect', () => {
			client.subscribe(`trains/${data.train.departureDate}/${data.train.trainNumber}/#`);
			client.subscribe(`train-locations/${data.train.departureDate}/${data.train.trainNumber}`);
			client.subscribe(`train-tracking/${data.train.departureDate}/${data.train.trainNumber}#`);
			client.subscribe(`routesets/${data.train.departureDate}/${data.train.trainNumber}`);
		});
		client.on('message', (topic, message) => {
			const json = JSON.parse(message.toString());
			console.log(json);
			if (topic === `train-locations/${data.train.departureDate}/${data.train.trainNumber}`) {
				data.location.push(json);
			} else if (topic.startsWith(`trains/${data.train.departureDate}/${data.train.trainNumber}`)) {
				data.train = json;
			} else if (topic === `routesets/${data.train.departureDate}/${data.train.trainNumber}`) {
				routesets.push(json);
			} else if (
				topic.startsWith(`train-tracking/${data.train.departureDate}/${data.train.trainNumber}`)
			) {
				data.tracking.push(json);
			}
		});

		const routesetsRequest = await fetch(
			`https://rata.digitraffic.fi/api/v1/routesets/${data.train.departureDate}/${data.train.trainNumber}`
		);

		routesets = await routesetsRequest.json();
	});

	onDestroy(() => {
		if (!client) return;
		client.end();
	});
</script>

<header>
	<h1 class="mb-2 text-5xl font-bold">
		<a href="/history/{data.train.trainNumber}" aria-label="Historia">
			<code>{data.train.trainType} {data.train.trainNumber}</code>
		</a>
	</h1>
	{#if data.train.cancelled}
		<span class="text-red-500">Peruttu</span>
	{/if}
	{#if data.train.runningCurrently}
		{#if data.location.length !== 0}
			{data.location[data.location.length - 1].speed} km/h
		{:else}
			<span class="text-green-500">Juna on kulussa tällä hetkellä</span>
		{/if}
	{/if}
</header>

<article>
	<PassangerInformation train={data.train.trainNumber.toString()} />
	<Card.Root>
		<Card.Content class="pt-6">
			<Tabs.Root value="timetable">
				<Tabs.List class="flex justify-between rounded-none bg-transparent p-0">
					<div class="bg-muted p-1 rounded-md">
						<Tabs.Trigger value="timetable">Aikataulu</Tabs.Trigger>
						<Tabs.Trigger value="composition">Kokoonpano</Tabs.Trigger>
						<Tabs.Trigger value="speed">Nopeus</Tabs.Trigger>
						{#if $nerdmode}
							<Tabs.Trigger value="waymessages">Kulkutietoviestit</Tabs.Trigger>
							<Tabs.Trigger value="ways">Kulkutiet</Tabs.Trigger>
						{/if}
					</div>
					<Button variant="secondary" href="/history/{data.train.trainNumber}">Historia</Button>
				</Tabs.List>
				<Tabs.Content value="timetable" class="pt-4">
					<Timetable {data} />
				</Tabs.Content>
				<Tabs.Content value="composition">
					<Composition />
				</Tabs.Content>
				<Tabs.Content value="waymessages">
					<h2 class="mt-4 text-2xl font-bold">Kulkutietoviestit</h2>
					<p class="mb-6 text-muted-foreground">
						Itse en ymmärrä miten hyödyt tästä tiedosta, mutta tässä se on.
					</p>
					<WayMessages bind:tracking={data.tracking} />
				</Tabs.Content>
				<Tabs.Content value="ways">
					<h2 class="mt-4 text-2xl font-bold">Kulkutiet</h2>
					<p class="mb-6 text-muted-foreground">
						Itse en ymmärrä miten hyödyt tästä tiedosta, mutta tässä se on.
					</p>
					<Routesets bind:routesets />
				</Tabs.Content>
				<Tabs.Content value="speed">
					<Speed bind:locations={data.location} />
				</Tabs.Content>
			</Tabs.Root>
		</Card.Content>
	</Card.Root>
</article>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 40vh;
	}

	article {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>
