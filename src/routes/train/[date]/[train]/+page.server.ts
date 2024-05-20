import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    if (params.date === 'latest') {
        const today = new Date();
        redirect(302, `/train/${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}/${params.train}`);
    }
    const resp = await fetch(`https://rata.digitraffic.fi/api/v1/trains/${params.date}/${params.train}`);
    const data = await resp.json();


    if (!data[0]) {
        error(404, 'Train not found');
    }

    return {
        train: data[0] as Train,
        location: [] as TrainLocation[],
        tracking: [] as TrainWayEvent[]
    };
}) satisfies PageServerLoad;