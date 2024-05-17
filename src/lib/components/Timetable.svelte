<script lang="ts">
	import { formatStrDate, nerdmode } from '$lib';
	import { Label } from './ui/label';
	import { Switch } from './ui/switch';
	import * as Table from './ui/table';
	import { ChevronRight } from 'lucide-svelte';
	import StationChip from './StationChip.svelte';

	type Props = {
		data: {
			train: Train;
			location: TrainLocation;
			tracking: TrainWayEvent[];
		};
	};

	let { data = $bindable() }: Props = $props();

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

	/**
	 * Takes the scheduled and actual time and checks if the train is more than 5 minutes late or not.
	 * @param {Date} schedule - Scheduled time
	 * @param {Date} actual - Actual time
	 * @returns {boolean} - If the train is late or not
	 */
	function lateStatus(schedule: Date, actual: Date): boolean {
		return new Date(actual).getTime() - new Date(schedule).getTime() > 300000;
	}

	/**
	 * Get all the stations the train stops at.
	 * @returns {string[]} - The stations
	 */
	function getStoppingStations(): string[] {
		return data.train.timeTableRows
			.filter((row: TimeTableRow) => row.type === 'ARRIVAL' && row.trainStopping)
			.map((row: TimeTableRow) => row.stationShortCode);
	}

	let stoppingStations = $derived(getStoppingStations());

	/**
	 * Get what track section the train is currently at.
	 * @returns {string} - The track section
	 */
	function whereAreWeAt(): string {
		for (const event of data.tracking) {
			if (event.type === 'OCCUPY' && (stoppingStations.includes(event.station) || showall)) {
				return event.station;
			}
		}
		return 'idk';
	}

	let currentSection = $derived(whereAreWeAt());
</script>

{#if $nerdmode}
	<div class="mb-4 flex items-center gap-4">
		<Switch id="showpassing" bind:checked={showall} />
		<Label for="showpassing">Näytä kaikki asemat</Label>
	</div>
{/if}
<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[2rem]"></Table.Head>
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
					<Table.Cell>
						{#if currentSection === row.stationShortCode}
							<ChevronRight size="1.5em" aria-label="Nykyinen raideosuus" />
						{/if}
					</Table.Cell>
					<Table.Cell><StationChip id={row.stationShortCode} /></Table.Cell>
					<Table.Cell>
						{#if index !== 0}
							{formatStrDate(row.scheduledTime)}
							{#if row.actualTime}
								<span
									class="text-sm {lateStatus(new Date(row.scheduledTime), new Date(row.actualTime))
										? 'text-red-500'
										: 'text-green-500'}"
								>
									{formatStrDate(row.actualTime)}
								</span>
							{:else if row.liveEstimateTime}
								<span class="text-sm text-gray-500">
									{formatStrDate(row.liveEstimateTime)}
								</span>
							{/if}
						{/if}
					</Table.Cell>
					<Table.Cell>
						{formatStrDate(findDepature(data.train, row.stationShortCode, index)?.scheduledTime)}
						{#if findDepature(data.train, row.stationShortCode, index)?.actualTime}
							<span
								class="text-sm {lateStatus(
									new Date(
										findDepature(data.train, row.stationShortCode, index)?.scheduledTime ?? ''
									),
									new Date(findDepature(data.train, row.stationShortCode, index)?.actualTime ?? '')
								)
									? 'text-red-500'
									: 'text-green-500'}"
							>
								{formatStrDate(findDepature(data.train, row.stationShortCode, index)?.actualTime)}
							</span>
						{:else if findDepature(data.train, row.stationShortCode, index)?.liveEstimateTime}
							<span class="text-sm text-gray-500">
								{formatStrDate(
									findDepature(data.train, row.stationShortCode, index)?.liveEstimateTime
								)}
							</span>
						{/if}
					</Table.Cell>
					<Table.Cell>{row.commercialTrack}</Table.Cell>
					{#if showall}
						<Table.Cell>{row.trainStopping ? 'Kyllä' : 'Ei'}</Table.Cell>
					{/if}
				</Table.Row>
			{/if}
		{/each}
	</Table.Body>
</Table.Root>
