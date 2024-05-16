<script lang="ts">
	import stations from '$lib/stations';
	let { id }: { id: string } = $props();
	import { Badge } from '$lib/components/ui/badge';
	import * as Tooltip from './ui/tooltip';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Badge>{stations[id].stationName}</Badge>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p><code>{id}</code></p>
	</Tooltip.Content>
</Tooltip.Root>
