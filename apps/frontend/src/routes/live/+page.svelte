<script lang="ts">
	import { nerdmode } from '$lib';
	import LineBadge from '$lib/components/LineBadge.svelte';
	import StationChip from '$lib/components/StationChip.svelte';
	import * as Table from '$lib/components/ui/table';
	import { LucideRocket } from 'lucide-svelte';

	let { data } = $props();

	function currentTimeTableRow(train: Train): TimeTableRow {
		let lastrow: TimeTableRow | null = null;
		for (let i = train.timeTableRows.length - 1; i >= 0; i--) {
			if (train.timeTableRows[i].actualTime) {
				lastrow = train.timeTableRows[i];
			} else {
				break;
			}
		}

		if (!lastrow) return train.timeTableRows[0];
		return lastrow;
	}
</script>

<main>
	<h1 class="text-2xl font-bold">Kulussa olevat junat</h1>
	<p class="mb-6 text-muted-foreground">Kaikki Suomessa tällä hetkellä kulkevat junat</p>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Juna</Table.Head>
				<Table.Head>Sijainti</Table.Head>
				<Table.Head>Aikataulullisuus</Table.Head>
				<Table.Head class="w-0 text-transparent">Avaa juna</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data.trains.filter((t) => t.runningCurrently) as train}
				{@const lrow = currentTimeTableRow(train)}
				<Table.Row class="relative">
					<Table.Cell>
						<code>
							{#if !$nerdmode && train.commuterLineID}
								<LineBadge line={train.commuterLineID} />
								<span class="text-muted-foreground"> {train.trainType} {train.trainNumber}</span>
							{:else}
								{train.trainType} {train.trainNumber}
							{/if}
						</code>
					</Table.Cell>

					<Table.Cell>
						<StationChip id={lrow.stationShortCode} />
					</Table.Cell>

					<Table.Cell
						>{#if lrow.differenceInMinutes < 0}
							<span class="text-green-500">{lrow.differenceInMinutes * -1} minuuttia etuajassa</span
							>
						{:else if lrow.differenceInMinutes > 1}
							<span class="text-red-500">{lrow.differenceInMinutes} minuuttia myöhässä</span>
						{/if}
					</Table.Cell>
					<Table.Cell>
						<a
							href={`/train/${train.departureDate}/${train.trainNumber}`}
							class="absolute inset-0 text-transparent">Katso juna</a
						>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</main>

<style>
	main {
		margin-top: 6rem;
		max-width: 1200px;
		margin-inline: auto;
		padding: 1rem;
	}
</style>
