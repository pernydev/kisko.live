import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const resp = await fetch(`https://rata.digitraffic.fi/api/v1/live-trains`);
	let data = await resp.json();

	if (cookies.get('nerdmode') !== 'true') {
		// only allow Commuter and Long-distance trains
		data = data.filter(
			(train: Train) =>
				train.trainCategory === 'Commuter' || train.trainCategory === 'Long-distance'
		);
	}

	return {
		trains: data as Train[]
	};
}) satisfies PageServerLoad;
