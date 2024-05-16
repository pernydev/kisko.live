export async function searchForTrain(input: string): Promise<Train | null> {
	const res = await fetch(`https://rata.digitraffic.fi/api/v1/trains/latest/${input}`);
	if (!res.ok) {
		return null;
	}
	const trains = await res.json();
	return trains[0];
}
