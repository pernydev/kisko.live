/* eslint-disable no-case-declarations */
import { searchForRoute } from './route';
import { searchForStation } from './station';
import { searchForTrain } from './train';
import { getType, SearchType } from './type';

export type SearchResult = {
    url: string;
	type: SearchType;
	train?: Train;
	station?: Station;
	route?: VRJourneyOption;
};

export async function search(input: string): Promise<SearchResult[]> {
	if (typeof window === 'undefined') return [];

	const type = getType(input);
	console.log(type);
	switch (type) {
		case SearchType.TRAIN:
			const train = await searchForTrain(input);
			if (train == null) {
				console.error('Train not found');
				return [];
			}
			return [{ type: SearchType.TRAIN, train, url: `/train/latest/${train.trainNumber}` }];

		case SearchType.STATION:
			const stations = await searchForStation(input);
			if (stations.length === 0) {
				console.error('Stations not found');
				return [];
			}
			return stations.map((station) => ({ type: SearchType.STATION, station, url: `/station/${station.stationShortCode}` }));
			
		case SearchType.ROUTE:
			const routes = await searchForRoute(input);
			if (routes.length === 0) {
				console.error('Routes not found');
				return [];
			}
			return routes.map((route) => ({ type: SearchType.ROUTE, route, url: `/` }));

		default:
			return [];
	}
}
