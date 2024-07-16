<script lang="ts">
	import { page } from '$app/stores';
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import stations from '$lib/stations';
	import FromToStations from '$lib/components/FromToStations.svelte';
	import { formatStrDate, nerdmode } from '$lib';
	import LineBadge from '$lib/components/LineBadge.svelte';

	const station = $derived(stations[$page.params.station]);
	let { data } = $props();

	function findUs(train: Train): {
		arrival?: TimeTableRow;
		departure?: TimeTableRow;
	} {
		if (findusCache.has(train.trainNumber)) {
			return findusCache.get(train.trainNumber) || {};
		}

		let arrival: TimeTableRow | undefined;
		let departure: TimeTableRow | undefined;

		for (const row of train.timeTableRows) {
			if (row.stationShortCode === station.stationShortCode) {
				if (row.type === 'ARRIVAL') {
					arrival = row;
				} else if (row.type === 'DEPARTURE') {
					departure = row;
				}
			}
		}

		findusCache.set(train.trainNumber, { arrival, departure });

		return { arrival, departure };
	}

	let findusCache = new Map<number, { arrival?: TimeTableRow; departure?: TimeTableRow }>();
</script>

<header>
	<p id="shortcode">{station.stationShortCode}</p>
	<h1 class="mb-2 text-5xl font-bold">{station.stationName}</h1>
</header>

<article>
	<Card.Root>
		<Card.Content class="pt-6">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Juna</Table.Head>
						<Table.Head>Saapuu</Table.Head>
						<Table.Head>Lähtee</Table.Head>
						<Table.Head>Raide</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.trains as train}
						<Table.Row class={train.cancelled ? 'line-through opacity-50 relative' : 'relative'}>
							<Table.Cell class="flex items-center gap-4">
								{#if train.commuterLineID}
									<LineBadge line={train.commuterLineID} />
									{#if $nerdmode}
										<code>
											{train.trainType}
											{train.trainNumber}
										</code>
									{/if}
								{:else}
									<code>
										{train.trainType}
										{train.trainNumber}
									</code>
								{/if}
								
								<FromToStations
									from={train.timeTableRows[0].stationShortCode}
									to={train.timeTableRows[train.timeTableRows.length - 1].stationShortCode}
								/>
							</Table.Cell>
							<Table.Cell>
								{#if findUs(train).arrival}
									{formatStrDate(findUs(train).arrival?.scheduledTime)}
								{/if}
							</Table.Cell>
							<Table.Cell>
								{#if findUs(train).departure}
									{formatStrDate(findUs(train).departure?.scheduledTime)}
								{/if}
							</Table.Cell>
							<Table.Cell>
								{findUs(train).departure?.commercialTrack}
							</Table.Cell>
							<Table.Cell>
								<a class="full" aria-label="Open" href={`/train/${train.departureDate}/${train.trainNumber}`}></a>
							</Table.Cell>
						</Table.Row>
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

	#shortcode {
		user-select: none;
		position: absolute;
		top: -10rem;
		right: 0;
		left: 0;
		height: 32rem;

		font-size: 28rem;
		font-weight: 200;
		text-align: center;

		background: linear-gradient(180deg, #ffffff31, #ffffff00);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.full {
		position: absolute;
		inset: 0;
	}

	@media (max-width: 640px) {
		#shortcode {
			font-size: 15rem;
			height: 18rem;
			top: 0;
		}
	}
</style>
