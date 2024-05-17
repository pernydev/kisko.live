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

    function touchMove(e: TouchEvent) {
        e.preventDefault();
    }
</script>

<svelte:document on:touchmove={touchMove} />

{#await getComposition()}
	<p>Loading...</p>
{:then}
    <br>
	{#each compositions?.journeySections ?? [] as section}
		<section>
			<h1>
				<FromToStations
					from={section.beginTimeTableRow.stationShortCode}
					to={section.endTimeTableRow.stationShortCode}
				/>
			</h1>
			{#if $nerdmode}
				{#each section.locomotives as loco}
					<p>{loco.locomotiveType}</p>
				{/each}
			{/if}
			<div class="wagons">
				{#each section.wagons as wagon}
					{#if passangerWagons.includes(wagon.wagonType)}
						{#if wagon.wagonType.includes('E')}
							<div>
								<img
									src="https://prod.wagonmap.prodvrfi.vrpublic.fi/images/v1.8.0/{wagon.wagonType.toUpperCase()}_up.svg"
									alt={wagon.wagonType}
								/>
								<img
									src="https://prod.wagonmap.prodvrfi.vrpublic.fi/images/v1.8.0/{wagon.wagonType.toUpperCase()}_down.svg"
									alt={wagon.wagonType}
								/>
							</div>
						{:else}
							<div>
								<img
									src="https://prod.wagonmap.prodvrfi.vrpublic.fi/images/v1.8.0/{wagon.wagonType.toUpperCase()}.svg"
									alt={wagon.wagonType}
                                    class="filler"
								/>
								<img
									src="https://prod.wagonmap.prodvrfi.vrpublic.fi/images/v1.8.0/{wagon.wagonType.toUpperCase()}.svg"
									alt={wagon.wagonType}
								/>
							</div>
						{/if}
					{/if}
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
        margin-bottom: 1rem ;
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
        align-items: flex-end;
        gap: 1rem;
    }

    .wagons img {
        display: block;
        min-width: 50rem;
        border-radius: 0.5rem;
    }

    .wagons img.filler {
        opacity: 0;
    }
</style>
