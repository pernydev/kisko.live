<script>
	import SearchModal from '$lib/components/Search.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Glasses, Home, Search } from 'lucide-svelte';
	import '../app.css';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { nerdmode } from '$lib';
	import { searchopen } from '$lib/search/searchmodal';
	import { goto } from '$app/navigation';
	import { setCookie } from '$lib/cookie';
	import { page } from '$app/stores';

	let { data, children } = $props();

	$nerdmode = data.nerdmode;
	$effect(() => {
		setCookie('nerdmode', $nerdmode ? 'true' : 'false');
	});

	function changeNerdmode() {
		$nerdmode = !$nerdmode;
		if (new URL($page.url).pathname.includes('/station/')) {
			window.location.reload();
		}
	}
</script>

<nav>
	<HoverCard.Root>
		<HoverCard.Trigger>
			<Button variant={$nerdmode ? 'secondary' : 'ghost'} class="px-2" on:click={() => changeNerdmode()} aria-pressed={$nerdmode}>
				<Glasses />
			</Button>
		</HoverCard.Trigger>
		<HoverCard.Content>
			<h2 class="text-lg font-bold">Nörttimoodi</h2>
			<p>Nörttimoodi on suunniteltu rautatieharrastajille ja näyttää enemmän teknisiä tietoja.</p>
		</HoverCard.Content>
	</HoverCard.Root>
	<HoverCard.Root>
		<HoverCard.Trigger>
			<Button variant="ghost" class="px-2" on:click={() => goto("/")}>
				<Home />
			</Button>
		</HoverCard.Trigger>
		<HoverCard.Content>
			<h2 class="text-lg font-bold">Koti</h2>
			<p>Palaa etusivulle.</p>
		</HoverCard.Content>
	</HoverCard.Root>
	<HoverCard.Root>
		<HoverCard.Trigger>
			<Button variant="ghost" class="px-2" on:click={() => $searchopen = true}>
				<Search />
			</Button>
		</HoverCard.Trigger>
		<HoverCard.Content>
			<h2 class="text-lg font-bold">Haku</h2>
			<p>Hae junaa, asemaa, vaunua, junatyyppää yms.</p>
		</HoverCard.Content>
	</HoverCard.Root>
</nav>

{@render children()}

<SearchModal />

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		z-index: 1000;
	}
</style>
