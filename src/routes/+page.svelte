<script>
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Card from '$lib/components/ui/card';
	import FromToStations from '$lib/components/FromToStations.svelte';
	import Search from '$lib/components/Search.svelte';
</script>

<header>
	<h1 class="mb-2 text-5xl font-bold">Juliet</h1>
	<p class="text-lg mb-6">Ilmainen ja avoin junaliikenteen havaintojärjestelmä</p>
	<Search />
</header>

<article>
	<section id="interesting">
		<h2 class="mb-6 text-2xl font-bold text-center">Mielenkiintoiset</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<Card.Root>
				<Card.Header>
					<Card.Title class="text-center mb-2">IC 59</Card.Title>
					<Card.Description><FromToStations from="HKI" to="TKU" /></Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="text-center">Epätavallinen kapasiteetti, Sr1 veturi</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Card.Title class="text-center mb-2">IC 59</Card.Title>
					<Card.Description><FromToStations from="HKI" to="TKU" /></Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="text-center">Epätavallinen kapasiteetti, Sr1 veturi</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Card.Title class="text-center mb-2">IC 59</Card.Title>
					<Card.Description><FromToStations from="HKI" to="TKU" /></Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="text-center">Epätavallinen kapasiteetti, Sr1 veturi</p>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
</article>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
	}

	article {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>
