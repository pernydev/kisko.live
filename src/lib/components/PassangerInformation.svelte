<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';

	let { train = '', station = '' } = $props();

	async function getPassangerInformation(): Promise<PassangerInformation[]> {
		const response = await fetch(
			`https://rata.digitraffic.fi/api/v1/passenger-information/active${train !== '' ? `?train_number=${train}` : ''}${station !== '' ? `?station=${station}` : ''}`
		);
		let data = ((await response.json()) as PassangerInformation[]).filter((info) => info.audio);
        data = data.filter((info, index, self) => self.findIndex((t) => t.audio?.text.fi === info.audio?.text.fi) === index);
        
		console.log(data);
		return data;
	}
</script>

{#await getPassangerInformation() then data}
	{#each data as info}
		<Alert.Root class="mb-4">
			<Alert.Title>{info.audio?.text.fi}</Alert.Title>
		</Alert.Root>
	{/each}
{:catch error}
	<Alert.Root>
		<Alert.Title>Error getting passanger information</Alert.Title>
		<Alert.Description>{error.message}</Alert.Description>
	</Alert.Root>
{/await}
