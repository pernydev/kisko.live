<script lang="ts">
	import { formatStrDate } from "$lib";
	import StationChip from "./StationChip.svelte";
	import Badge from "./ui/badge/badge.svelte";
import * as Table from "./ui/table";

	let {
		tracking = $bindable()
	}: {
		tracking: TrainWayEvent[];
	} = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Asema</Table.Head>
			<Table.Head>Raideosuus</Table.Head>
            <Table.Head>Viesti</Table.Head>
            <Table.Head>Kello</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
        {#each tracking as event}
            <Table.Row>
                <Table.Cell>
                    <StationChip id={event.station} />
                </Table.Cell>
                <Table.Cell><code>{event.trackSection}</code></Table.Cell>
                <Table.Cell>
                    {#if event.type === "RELEASE"}
                        <Badge class="bg-green-300">Vapautettu</Badge>
                    {:else if event.type === "OCCUPY"}
                        <Badge class="bg-red-300">Varattu</Badge>
                    {/if}
                </Table.Cell>
                <Table.Cell>{formatStrDate(event.timestamp, true)}</Table.Cell>
            </Table.Row>
        {/each}
	</Table.Body>
</Table.Root>
