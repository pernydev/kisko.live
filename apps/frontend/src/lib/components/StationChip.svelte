<script lang="ts">
	import stations from '$lib/stations';
	let { id }: { id: string } = $props();
	import { Badge } from '$lib/components/ui/badge';
	import * as Tooltip from './ui/tooltip';
	import { nerdmode } from '$lib';
</script>

<a href={`/station/${id}`}>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Badge variant="outline" class="border-2">
				{stations[id].stationName}
			</Badge>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>
				<code>
					{id}
				</code>
			</p>
		</Tooltip.Content>
	</Tooltip.Root>
</a>
