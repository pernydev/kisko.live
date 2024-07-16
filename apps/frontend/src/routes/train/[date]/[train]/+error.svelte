<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import mqtt from 'mqtt';
	import { onMount, onDestroy } from 'svelte';
	import Timetable from '$lib/components/Timetable.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import Composition from '$lib/components/Composition.svelte';
	import PassangerInformation from '$lib/components/PassangerInformation.svelte';
	import WayMessages from '$lib/components/WayMessages.svelte';
	import Routesets from '$lib/components/Routesets.svelte';
	import { formatStrDate, nerdmode } from '$lib';
	import Speed from '$lib/components/Speed.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronLeft, ChevronRight, Split } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { data } = $props();
	let routesets: TrainRoute[] = $state([]);
	let client: mqtt.MqttClient;

	function day(next: boolean) {
		const date = new Date($page.params.date);
		date.setDate(date.getDate() + (next ? 1 : -1));
		return date.toISOString().split('T')[0];
	}
</script>

<header>
	{#if new Date($page.params.date).toDateString() !== new Date().toDateString()}
		{formatStrDate($page.params.date).split(' ')[0]}
	{/if}
	<h1 class="mb-2 text-5xl font-bold">
        Juna {$page.params.train}
	</h1>
</header>

<article>
	<Card.Root>
		<Card.Content class="pt-6">
			<Tabs.Root value="timetable">
				<Tabs.List class="flex justify-between rounded-none bg-transparent p-0">
					<div class="rounded-md bg-muted p-1">
						<Tabs.Trigger value="timetable">Aikataulu</Tabs.Trigger>
						<Tabs.Trigger value="composition">Kokoonpano</Tabs.Trigger>
						<Tabs.Trigger value="speed">Nopeus</Tabs.Trigger>
						{#if $nerdmode}
							<Tabs.Trigger value="waymessages">Kulkutietoviestit</Tabs.Trigger>
							<Tabs.Trigger value="ways">Kulkutiet</Tabs.Trigger>
						{/if}
					</div>
					<div class="flex items-center gap-2">
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Button
									variant="outline"
									class="border-2 px-2"
									href="/train/{day(false)}/{$page.params.train}"
								>
									<ChevronLeft />
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>Edellisen päivän juna</Tooltip.Content>
						</Tooltip.Root>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Button
									variant="outline"
									class="border-2 px-2"
									href="/train/{day(true)}/{$page.params.train}"
								>
									<ChevronRight />
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>Seuraavan päivän juna</Tooltip.Content>
						</Tooltip.Root>
					</div>
				</Tabs.List>
				<Tabs.Content value="timetable">
                    <p>Juna ei löytynyt</p>
				</Tabs.Content>
				<Tabs.Content value="composition">
                    <p>Niinku, ei oikeesti löytynyt.</p>
				</Tabs.Content>
				<Tabs.Content value="waymessages">
                    <p>Miksi edes yrität?</p>
				</Tabs.Content>
				<Tabs.Content value="ways">
                    <p>Et löydä mitään...</p>
				</Tabs.Content>
				<Tabs.Content value="speed">
                    <p>... miksi olet edes täällä..</p>
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
