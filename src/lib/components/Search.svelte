<script lang="ts" async>
	import { query, searchopen } from '$lib/search/searchmodal';
	import * as Command from '$lib/components/ui/command';
	import { Input } from '$lib/components/ui/input';
	import { search, type SearchResult } from '$lib/search/search';
	import { TrainFront, TrainTrack } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let resp: SearchResult[] = $state([]);
	$effect(() => {
		search($query).then((r) => {
			resp = r;
		});
	});

	function runCommand(cmd: () => void) {
		$searchopen = false;
		cmd();
	}
	
	function keyDown(event: KeyboardEvent) {
		if (event.key === '.') {
			event.preventDefault();
			event.stopPropagation();

			$searchopen = true;
		}
	}
</script>

<svelte:document on:keydown={keyDown} />

<Command.Dialog bind:open={$searchopen}>
	<Input
		placeholder="Hae junaa, asemaa, vaunua, junatyyppä yms."
		bind:value={$query}
		class="mb-4"
	/>
	<Command.List>
		<Command.Empty>Ei tuloksia</Command.Empty>
		{#each resp as hit}
			<Command.Item class="flex items-center justify-between" 
			onSelect={() =>
				runCommand(() => {
					goto(hit.url);
				})}>
				{#if hit.type === 'train'}
					<div class="flex items-center gap-4">
						<span class="text-muted-foreground">
							<TrainFront />
						</span>
						<code>
							{hit.train?.trainType}{hit.train?.trainNumber}
						</code>
					</div>
				{:else if hit.type === 'station'}
					<div class="flex items-center gap-4">
						<TrainTrack class="text-muted-foreground" />
						<code>
							{hit.station?.stationName} ({hit.station?.stationShortCode})
						</code>
					</div>
				{/if}
			</Command.Item>
		{/each}
	</Command.List>
</Command.Dialog>
