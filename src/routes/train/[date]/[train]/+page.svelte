<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import mqtt from 'mqtt';
	import { onMount } from 'svelte';
	import Timetable from '$lib/components/Timetable.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import Composition from '$lib/components/Composition.svelte';

	let { data } = $props();
	let client: mqtt.MqttClient;

	onMount(() => {
		client = mqtt.connect('wss://rata.digitraffic.fi/mqtt');
		client.on('connect', () => {
			client.subscribe(`trains/${data.train.departureDate}/${data.train.trainNumber}/#`);
			client.subscribe(`train-locations/${data.train.departureDate}/${data.train.trainNumber}`);
			client.subscribe(`train-tracking/${data.train.departureDate}/${data.train.trainNumber}#`);
		});
		client.on('message', (topic, message) => {
			const json = JSON.parse(message.toString());
			console.log(json);
			if (topic === `train-locations/${data.train.departureDate}/${data.train.trainNumber}`) {
				data.location = json;
			} else if (topic.startsWith(`trains/${data.train.departureDate}/${data.train.trainNumber}`)) {
				data.train = json;
			} else if (
				topic.startsWith(`train-tracking/${data.train.departureDate}/${data.train.trainNumber}`)
			) {
				console.log('tt' + json);
				data.tracking = json;
			}
		});

		return () => {
			client.end();
		};
	});
</script>

<header>
	<h1 class="mb-2 text-5xl font-bold">
		<code>{data.train.trainType} {data.train.trainNumber}</code>
	</h1>
	{#if data.train.cancelled}
		<span class="text-red-500">Peruttu</span>
	{/if}
	{#if data.train.runningCurrently}
		{data.location.speed} km/h
	{/if}
</header>

<article>
	<Card.Root>
		<Card.Content class="pt-6">
			<Tabs.Root value="timetable">
				<Tabs.List>
					<Tabs.Trigger value="timetable">Aikataulu</Tabs.Trigger>
					<Tabs.Trigger value="composition">Kokoonpano</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="timetable" class="pt-4">
					<Timetable {data} />
				</Tabs.Content>
				<Tabs.Content value="composition">
					<Composition />
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
