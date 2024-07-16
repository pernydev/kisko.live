<script lang="ts">
	import { formatStrDate } from '$lib';
import StationChip from './StationChip.svelte';
	import * as Table from './ui/table';

	let { routesets = $bindable() }: { routesets: TrainRoute[] } = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Reitti</Table.Head>
			<Table.Head>Kello</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each routesets as route}
			<Table.Row>
				<Table.Cell class="flex flex-col gap-1">
					{#each route.routesections as section}
						<div class="flex items-center">
							<StationChip id={section.stationCode} />
							<code>{section.sectionId}</code>
						</div>
					{/each}
				</Table.Cell>
                <Table.Cell>{formatStrDate(route.messageTime, true)}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
