<script lang="ts" async>
	import { query, searchopen } from '$lib/search/searchmodal';
	import * as Command from '$lib/components/ui/command';
	import { Input } from '$lib/components/ui/input';
	import { search, type SearchResult } from '$lib/search/search';
	import { Ticket, TrainFront, TrainTrack } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { formatStrDate, nerdmode } from '$lib';

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
			<Command.Item
				class="flex items-center justify-between"
				onSelect={() =>
					runCommand(() => {
						goto(hit.url);
					})}
			>
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
				{:else if hit.type === 'route'}
					<div class="flex items-center gap-4">
						<Ticket class="text-muted-foreground" />
						{formatStrDate(hit.route?.departureTime)} - {formatStrDate(hit.route?.arrivalTime)}

						{#if (hit.route?.legs.length ?? 0) !== 1}
							<span class="text-muted-foreground">({hit.route?.legs.length} vaihtoa)</span>
						{/if}

						<span class="text-muted-foreground"
							>({hit.route?.legs.map((l) => l.trainType + " "+ l.trainNumber).join(', ')})</span
						>
					</div>
				{/if}
			</Command.Item>
		{/each}
	</Command.List>
</Command.Dialog>
