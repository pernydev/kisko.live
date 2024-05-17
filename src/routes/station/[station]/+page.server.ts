import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    const resp = await fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${params.station}?departed_trains=0&arrived_trains=0&arriving_trains=40&departing_trains=40&include_nonstopping=${cookies.get('nerdmode') === 'true' ? 'true' : 'false&train_categories=Long-distance,Commuter'}`);
    const data = (await resp.json()) as Train[];

    // sort data by departure date
    data.sort((a, b) => {
        const aDate = new Date(findDepatureTime(a, params.station));
        const bDate = new Date(findDepatureTime(b, params.station));
        return aDate.getTime() - bDate.getTime();
    })

    return {
        trains: data as Train[]
    };
}) satisfies PageServerLoad;

function findDepatureTime(train: Train, station: string): string {
    const actualDepature = train.timeTableRows.find(row => row.type === 'DEPARTURE' && row.stationShortCode === station)?.scheduledTime;
    if (actualDepature) {
        return actualDepature;
    }
    // train will not depart from this station, find the arrival time and return that instead
    return train.timeTableRows.find(row => row.stationShortCode === station)?.scheduledTime || 'N/A';
}