<script lang="ts">
	import { page } from '$app/stores';
	import { nerdmode } from '$lib';
	import FromToStations from './FromToStations.svelte';
	import StationChip from './StationChip.svelte';

	let compositions: TrainComposition | undefined = $state();

	async function getComposition() {
		const response = await fetch(
			`https://rata.digitraffic.fi/api/v1/compositions/${$page.params.date}/${$page.params.train}`
		);
		compositions = await response.json();
	}

	const passangerWagons = ['Ed', 'Eds', 'Edfs', 'Edm', 'CEd', 'ERd', 'Edo', 'Rx', 'Edg'];
	const knownWagons = ['Ed', 'Eds', 'Edfs', 'Edm', 'CEd', 'ERd', 'Edo', 'Rx', 'Edg'];

	function touchMove(e: TouchEvent) {
		e.preventDefault();
	}

	function sortWagons(wagons: Wagon[]) {
		// sort wagons by sales number in decending, if wagon is not a known wagon type, put it last ( their sales number is probably in the 100s)
		return wagons.sort((a, b) => {
			if (a.salesNumber === b.salesNumber) {
				return 0;
			}

			if (!knownWagons.includes(a.wagonType)) {
				return 1;
			}

			return a.salesNumber > b.salesNumber ? -1 : 1;
		});
	}

	function makeCompositionString(composition: CompositionJourneySection) {
		// make string like this: Sr3 + 5 Edm + Ed + Rx + Edg + 3 Edm
		const wagonCount: Record<string, number> = {};

		for (const logo of composition.locomotives) {
			if (wagonCount[logo.locomotiveType]) {
				wagonCount[logo.locomotiveType]++;
			} else {
				wagonCount[logo.locomotiveType] = 1;
			}
		}

		for (const wagon of composition.wagons) {
			if (wagonCount[wagon.wagonType]) {
				wagonCount[wagon.wagonType]++;
			} else {
				wagonCount[wagon.wagonType] = 1;
			}
		}

		return Object.entries(wagonCount)
			.map(([wagon, count]) => `${count > 1 ? count : ''} ${wagon}`)
			.join(' + ');
	}
</script>

<svelte:document on:touchmove={touchMove} />

{#await getComposition()}
	<p>Loading...</p>
{:then}
	<br />
	{#each compositions?.journeySections ?? [] as section}
		<section>
			<h1 class="flex justify-between">
				{#if (compositions?.journeySections?.length || 0) > 1}
					<FromToStations
						from={section.beginTimeTableRow.stationShortCode}
						to={section.endTimeTableRow.stationShortCode}
					/>
				{/if}
				{#if $nerdmode}
					<span>
						{makeCompositionString(section)}
					</span>
				{/if}
				<span>
					Pituus: {section.totalLength}m
				</span>
			</h1>
			<div class="wagons">
				{#if $nerdmode}
					{#each section.locomotives as loco}
						<div>
							<img src="/empty.svg" alt={loco.locomotiveType} class="filler" />
							<div class="relative">
								<img src="/empty.svg" alt={loco.locomotiveType} />
								<p
									class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-muted-foreground"
								>
									{loco.locomotiveType}
								</p>
							</div>
						</div>
					{/each}
				{/if}
				{#each sortWagons(section.wagons) as wagon}
					<div>
						{#if knownWagons.includes(wagon.wagonType)}
							{#if passangerWagons.includes(wagon.wagonType)}
								{#if wagon.wagonType.includes('E')}
									<img src="/map/{wagon.wagonType.toUpperCase()}_up.svg" alt={wagon.wagonType} />
									<img src="/map/{wagon.wagonType.toUpperCase()}_down.svg" alt={wagon.wagonType} />
								{:else}
									<img
										src="/map/{wagon.wagonType.toUpperCase()}.svg"
										alt={wagon.wagonType}
										class="filler"
									/>
									<img src="/map/{wagon.wagonType.toUpperCase()}.svg" alt={wagon.wagonType} />
								{/if}
							{/if}
						{:else if section.locomotives[0].locomotiveType !== 'Sm3'}
							<img src="/empty.svg" alt={wagon.wagonType} class="filler" />
							<div class="relative">
								<img src="/empty.svg" alt={wagon.wagonType} />
								<p
									class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-muted-foreground"
								>
									{wagon.wagonType}
								</p>
							</div>
						{/if}

						<p class="text-muted-foreground">
							{wagon.salesNumber}
							{#if $nerdmode}
								({wagon.wagonType})
							{/if}
						</p>
					</div>
				{/each}
			</div>
		</section>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}

<style>
	section {
		margin-bottom: 2rem;
	}

	section h1 {
		margin-bottom: 1rem;
	}

	.wagons {
		display: flex;
		gap: 1rem;
		overflow: auto;

		scrollbar-width: none;
	}

	.wagons > div {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex: 1;
		align-items: center;
		gap: 1rem;

		position: relative;
	}

	.wagons img {
		display: block;
		min-width: 50rem;
		width: 100%;
		border-radius: 0.5rem;
	}

	.wagons img.filler {
		opacity: 0;
	}

	.wagons > div .float {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
