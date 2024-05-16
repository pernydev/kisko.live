<script lang="ts">
	import { page } from '$app/stores';
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import stations from '$lib/stations';
	import FromToStations from '$lib/components/FromToStations.svelte';
	import StationChip from '$lib/components/StationChip.svelte';
	import { formatStrDate, nerdmode } from '$lib';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	let { data } = $props();

	function findDepature(
		train: Train,
		stationShortCode: string,
		arrivalKey: number
	): TimeTableRow | undefined {
		if (arrivalKey === 0) {
			return data.train.timeTableRows[arrivalKey];
		}
		if (
			data.train.timeTableRows[arrivalKey + 1]?.stationShortCode === stationShortCode &&
			data.train.timeTableRows[arrivalKey + 1]?.type === 'DEPARTURE'
		) {
			return data.train.timeTableRows[arrivalKey + 1];
		}
	}

	let showall = $state(false);
</script>

<header>
	<h1 class="mb-2 text-5xl font-bold">
		<code>{data.train.trainType} {data.train.trainNumber}</code>
	</h1>
	{#if data.train.cancelled}
		<span class="text-red-500">Peruttu</span>
	{/if}
	{#if data.train.runningCurrently}{/if}
</header>

<article>
	<Card.Root>
		<Card.Content class="pt-6">
			{#if $nerdmode}
				<div class="mb-4 flex items-center gap-4">
					<Switch id="showpassing" bind:checked={showall} />
					<Label for="showpassing">Näytä kaikki asemat</Label>
				</div>
			{/if}
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Asema</Table.Head>
						<Table.Head>Saapuu</Table.Head>
						<Table.Head>Lähtee</Table.Head>
						<Table.Head>Raide</Table.Head>
						{#if showall}
							<Table.Head>Pysähtyy</Table.Head>
						{/if}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.train.timeTableRows as row, index}
						{#if ((!row.trainStopping && showall) || row.trainStopping) && (row.type === 'ARRIVAL' || index === 0)}
							<Table.Row class={!row.trainStopping ? 'opacity-50' : ''}>
								<Table.Cell><StationChip id={row.stationShortCode} /></Table.Cell>
								<Table.Cell>
									{#if index !== 0}
										{formatStrDate(row.scheduledTime)}
									{/if}
								</Table.Cell>
								<Table.Cell
									>{formatStrDate(
										findDepature(data.train, row.stationShortCode, index)?.scheduledTime
									)}</Table.Cell
								>
								<Table.Cell>{row.commercialTrack}</Table.Cell>
								{#if showall}
									<Table.Cell>{row.trainStopping ? 'Kyllä' : 'Ei'}</Table.Cell>
								{/if}
							</Table.Row>
						{/if}
					{/each}
				</Table.Body>
			</Table.Root>
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
