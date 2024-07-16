import fs from 'fs';

const resp = await fetch('https://rata.digitraffic.fi/api/v1/metadata/stations');
const jsonArray = await resp.json();

const transformedObject = {};

jsonArray.forEach(station => {
    if (station.stationName.endsWith(" asema")) {
        station.stationName = station.stationName.split(" asema")[0];
    }
    transformedObject[station.stationShortCode] = station;

});

fs.writeFileSync('stations.json', JSON.stringify(transformedObject, null, 2));