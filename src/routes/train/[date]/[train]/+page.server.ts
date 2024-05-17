import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    if (params.date === 'latest') {
        const today = new Date();
        redirect(302, `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);
    }
    const resp = await fetch(`https://rata.digitraffic.fi/api/v1/trains/${params.date}/${params.train}`);
    const data = await resp.json();

    const resp2 = await fetch(`https://rata.digitraffic.fi/api/v1/train-locations/latest/${params.train}`);
    const data2 = await resp2.json();

    const resp3 = await fetch(`https://rata.digitraffic.fi/api/v1/train-tracking/${params.date}/${params.train}`);
    const data3 = await resp3.json();

    return {
        train: data[0] as Train,
        location: data2[0] as TrainLocation,
        tracking: data3 as TrainWayEvent[]
    };
}) satisfies PageServerLoad;