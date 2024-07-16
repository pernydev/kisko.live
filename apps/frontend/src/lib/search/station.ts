import stations from "$lib/stations";
import MiniSearch from "minisearch";

const stationSearch = new MiniSearch({
    fields: ["name", "id"],
    storeFields: ["stationShortCode"],
});

stationSearch.addAll(Object.values(stations).map((station) => ({
    id : station.stationShortCode,
    name: station.stationName,
})));

export async function searchForStation(input: string): Promise<Station[]> {
    if (stations[input.toUpperCase()]) {
        return [stations[input.toUpperCase()]];
    }

    const results = stationSearch?.search(input, { prefix: true, fuzzy: 0.2 });
    console.log(results);
    return results.map((result) => stations[result.id]);
}