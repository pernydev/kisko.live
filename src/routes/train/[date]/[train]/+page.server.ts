import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const resp = await fetch(`https://rata.digitraffic.fi/api/v1/trains/${params.date}/${params.train}`);
    const data = await resp.json();
    console.log(JSON.stringify(data));
    return {
        train: data[0] as Train
    };
}) satisfies PageServerLoad;