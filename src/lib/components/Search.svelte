<script lang="ts" async>
	import * as Command from '$lib/components/ui/command';
	import { search, type SearchResult } from '$lib/search/search';
	let input = $state('');
    let resp: SearchResult[] = $state([]);
    $effect(() => {
        search(input).then((r) => {
            resp = r;
        });
    });
</script>

<Command.Root>
	<Command.Input placeholder="Hae junaa, asemaa, vaunua, junatyyppä yms." bind:value={input} />
	<Command.List>
		{#if input !== ''}
			<Command.Empty>No results found.</Command.Empty>
		{/if}
        {#each resp as hit}
            <Command.Item>
                {#if hit.type === 'train'}
                    {hit.train?.t
            </Command.Item>
        {/each}
	</Command.List>
</Command.Root>
