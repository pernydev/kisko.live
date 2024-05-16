<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Card from '$lib/components/ui/card';
	import FromToStations from '$lib/components/FromToStations.svelte';
	import Search from '$lib/components/Search.svelte';
	import { query, searchopen } from '$lib/search/searchmodal';
	import { nerdmode } from '$lib';
</script>

<header>
	<h1 class="mb-2 text-5xl font-bold">Juliet</h1>
	<p class="mb-6 text-lg">Ilmainen ja avoin junaliikenteen havaintojärjestelmä</p>
	<button
		class="flex h-10 w-full max-w-[28rem] cursor-text rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
		on:click={() => ($searchopen = true)}
	>
		Hae junaa, asemaa, vaunua, junatyyppä yms.
	</button>
</header>

<article>
	{#if $nerdmode}
	{/if}
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
