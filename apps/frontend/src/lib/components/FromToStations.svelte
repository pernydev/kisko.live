<script lang="ts">
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import StationChip from './StationChip.svelte';

	let { from, to }: { from: string; to: string } = $props();
</script>

<div class="flex justify-between z-10 gap-2">
	<StationChip id={from} />
	<ChevronRight class="text-muted-foreground" />
	<StationChip id={to} />
</div>

