import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    const resp = await fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${params.station}?departed_trains=0&arrived_trains=0&arriving_trains=40&departing_trains=40&include_nonstopping=${cookies.get('nerdmode') === 'true' ? 'true' : 'false&train_categories=Long-distance,Commuter'}`);
    const data = await resp.json();
    
    return {
        trains: data as Train[]
    };
}) satisfies PageServerLoad;