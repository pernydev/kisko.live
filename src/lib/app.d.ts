interface Station {
    passengerTraffic: boolean;
    type: string;
    stationName: string;
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    longitude: number;
    latitude: number;
}

interface Train {
    trainNumber: number;
    departureDate: string;
    operatorUICCode: number;
    operatorShortCode: string;
    trainType: string;
    trainCategory: string;
    commuterLineID: string;
    runningCurrently: boolean;
    cancelled: boolean;
    version: number;
    timetableType: string;
    timetableAcceptanceDate: string;
    deleted: boolean;
    timeTableRows: TimeTableRow[];
}

/*
Required trainStopping true,false Info Pysähtyykö juna liikennepaikalla
Required stationShortCode: string Info Aseman lyhennekoodi
Required stationcUICCode: 1-9999 Info Aseman UIC-koodi
Required countryCode: “FI”, “RU”
Required type: “ARRIVAL” tai “DEPARTURE” Info Pysähdyksen tyyppi
Optional commercialStop: boolean Info Onko pysähdys kaupallinen. Annettu vain pysähdyksille, ei läpiajoille. Mikäli junalla on osaväliperumisia, saattaa viimeinen perumista edeltävä pysähdys jäädä virheellisesti ei-kaupalliseksi.
Optional commercialTrack: string Info Suunniteltu raidenumero, jolla juna pysähtyy tai jolta se lähtee. Raidenumeroa ei saada junille, joiden lähtöön on vielä yli 10 päivää. Operatiivisissa häiriötilanteissa raide voi olla muu.
Required cancelled: true/false Info Totta, jos lähtö tai saapuminen on peruttu
Required scheduledTime: datetime Info Aikataulun mukainen pysähtymis- tai lähtöaika
Optional liveEstimateTime: datetime Info Ennuste. Tyhjä jos juna ei ole matkalla
Optional estimateSource: datetime Info Ennusteen lähde
Optional unknownDelay: boolean Info Jos ennustetta ei voida antaa luotettavasti, liikenteenohjaaja voi kytkeä unknownDelay-bitin päälle. Bitti tarkoittaa, että juna on myöhässä, mutta ei osata kertoa kuinka paljon. Lisätietoa: https://www.liikennevirasto.fi/-/juna-myohassa-eika-arviota-lahtoajasta-asemien-nayttotaulut-kertovat-taman-pian-uudella-tavalla
Optional actualTime: datetime Info Aika jolloin juna saapui tai lähti asemalta
Optional differenceInMinutes: integer Info Vertaa aikataulun mukaista aikaa ennusteeseen tai toteutuneeseen aikaan ja kertoo erotuksen minuutteina
Required causes Info Syytiedot. Kuvaavat syitä miksi juna oli myöhässä tai etuajassa pysähdyksellä. Kaikkia syyluokkia ja -tietoja ei julkaista.
Required categoryCodeId Info Yleisen syyluokan yksilöivä tunnus. Lista syyluokista löytyy osoitteesta täältä
Required categoryCode Info Yleisen syyluokan koodi. Huom. ei yksilöivä.
Optional detailedCategoryCodeId Info Tarkemman syykoodin yksilöivä tunnus. Lista syykoodeista löytyy täältä
Optional detailedCategoryCode Info Tarkempi syykoodin koodi. Huom. ei yksilöivä
Optional thirdCategoryCodeId Info Kolmannen tason syykoodin tunnus. Lista kolmannen tason syykoodeista löytyy täältä
Optional thirdCategoryCode Info Kolmannen tason syykoodin koodi. Huom. ei yksilöivä
Optional trainReady Info Junan lähtövalmius. Operaattorin tulee tehdä lähtövalmiusilmoitus liikenteenohjaajalle aina kun junan kokoonpanovaihtuu tai se lähtee ensimmäiseltä pysäkiltään.
Required source Info Tapa, jolla lähtövalmiusilmoitus on tehty.
Required accepted Info Onko lähtövalmiusilmoitus hyväksytty.
Required timestamp Info Aika jolloin lähtövalmiusilmoitus on päätetty. 
*/

interface TimeTableRow {
    trainStopping: boolean;
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    type: string;
    commercialStop: boolean;
    commercialTrack: string;
    cancelled: boolean;
    scheduledTime: string;
    liveEstimateTime: string;
    estimateSource: string;
    unknownDelay: boolean;
    actualTime: string;
    differenceInMinutes: number;
    causes: Cause[];
    categoryCodeId: number;
    categoryCode: number;
    detailedCategoryCodeId: number;
    detailedCategoryCode: number;
    thirdCategoryCodeId: number;
    thirdCategoryCode: number;
    trainReady: string;
    source: string;
    accepted: boolean;
    timestamp: string;
}

interface Cause {
    categoryCodeId: number;
    categoryCode: number;
    detailedCategoryCodeId: number;
    detailedCategoryCode: number;
    thirdCategoryCodeId: number;
    thirdCategoryCode: number;
}

interface TrainLocation {
    trainNumber: number;
    departureDate: string;
    timestamp: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    speed: number;
    accuracy: number;
}

interface TrainWayEvent {
    id: number;
    version: number;
    trainNumber: number;
    departureDate: string;
    timestamp: string;
    trackSection: string;
    nextTrackSection: string;
    previousTrackSection: string;
    station: string;
    nextStation: string;
    previousStation: string;
    type: string;
}

// next up, a hard one
/*
{"trainNumber":265,"departureDate":"2023-06-17","operatorUICCode":10,"operatorShortCode":"vr","trainCategory":"Long-distance","trainType":"IC","version":285835131617,"journeySections":[{"beginTimeTableRow":{"stationShortCode":"HKI","stationUICCode":1,"countryCode":"FI","type":"DEPARTURE","scheduledTime":"2023-06-17T16:29:00.000Z"},"endTimeTableRow":{"stationShortCode":"PSLT","stationUICCode":1034,"countryCode":"FI","type":"ARRIVAL","scheduledTime":"2023-06-17T16:41:00.000Z"},"locomotives":[{"location":1,"locomotiveType":"Sr2","powerType":"Electric"}],"wagons":[{"wagonType":"Ed","location":2,"salesNumber":999,"length":2640},{"wagonType":"Edm","location":3,"salesNumber":31,"length":2640},{"wagonType":"Edm","location":4,"salesNumber":30,"length":2640},{"wagonType":"Edm","location":5,"salesNumber":29,"length":2640},{"wagonType":"Edm","location":6,"salesNumber":28,"length":2640},{"wagonType":"Edm","location":7,"salesNumber":27,"length":2640},{"wagonType":"Edm","location":8,"salesNumber":26,"length":2640},{"wagonType":"Ed","location":9,"salesNumber":25,"length":2640},{"wagonType":"Rx","location":10,"salesNumber":24,"length":2640,"catering":true},{"wagonType":"Edg","location":11,"salesNumber":23,"length":2650,"pet":true,"luggage":true},{"wagonType":"Edm","location":12,"salesNumber":22,"length":2640},{"wagonType":"Edm","location":13,"salesNumber":21,"length":2640},{"wagonType":"Edm","location":14,"salesNumber":20,"length":2640}],"totalLength":362,"maximumSpeed":140,"attapId":312309715,"saapAttapId":312309965},{"beginTimeTableRow":{"stationShortCode":"PSLT","stationUICCode":1034,"countryCode":"FI","type":"DEPARTURE","scheduledTime":"2023-06-17T17:13:00.000Z"},"endTimeTableRow":{"stationShortCode":"TPE","stationUICCode":160,"countryCode":"FI","type":"ARRIVAL","scheduledTime":"2023-06-17T19:31:00.000Z"},"locomotives":[{"location":1,"locomotiveType":"Sr2","powerType":"Electric"}],"wagons":[{"wagonType":"Ed","location":2,"salesNumber":999,"length":2640},{"wagonType":"Edm","location":3,"salesNumber":31,"length":2640},{"wagonType":"Edm","location":4,"salesNumber":30,"length":2640},{"wagonType":"Edm","location":5,"salesNumber":29,"length":2640},{"wagonType":"Edm","location":6,"salesNumber":28,"length":2640},{"wagonType":"Edm","location":7,"salesNumber":27,"length":2640},{"wagonType":"Edm","location":8,"salesNumber":26,"length":2640},{"wagonType":"Ed","location":9,"salesNumber":25,"length":2640},{"wagonType":"Rx","location":10,"salesNumber":24,"length":2640,"catering":true},{"wagonType":"Edg","location":11,"salesNumber":23,"length":2650,"pet":true,"luggage":true},{"wagonType":"Edm","location":12,"salesNumber":22,"length":2640},{"wagonType":"Edm","location":13,"salesNumber":21,"length":2640},{"wagonType":"Edm","location":14,"salesNumber":20,"length":2640},{"wagonType":"Gd","location":15,"salesNumber":701,"length":3160},{"wagonType":"Gd","location":16,"salesNumber":702,"length":3160}],"totalLength":425,"maximumSpeed":140,"attapId":312310015,"saapAttapId":312314565},{"beginTimeTableRow":{"stationShortCode":"TPE","stationUICCode":160,"countryCode":"FI","type":"DEPARTURE","scheduledTime":"2023-06-17T20:05:00.000Z"},"endTimeTableRow":{"stationShortCode":"ROI","stationUICCode":364,"countryCode":"FI","type":"ARRIVAL","scheduledTime":"2023-06-18T04:20:00.000Z"},"locomotives":[{"location":1,"locomotiveType":"Sr2","powerType":"Electric"}],"wagons":[{"wagonType":"Ed","location":2,"salesNumber":999,"length":2640},{"wagonType":"Edm","location":3,"salesNumber":31,"length":2640},{"wagonType":"Edm","location":4,"salesNumber":30,"length":2640},{"wagonType":"Edm","location":5,"salesNumber":29,"length":2640},{"wagonType":"Edm","location":6,"salesNumber":28,"length":2640},{"wagonType":"Edm","location":7,"salesNumber":27,"length":2640},{"wagonType":"Edm","location":8,"salesNumber":26,"length":2640},{"wagonType":"Ed","location":9,"salesNumber":25,"length":2640},{"wagonType":"Rx","location":10,"salesNumber":24,"length":2640,"catering":true},{"wagonType":"Edg","location":11,"salesNumber":23,"length":2650,"pet":true,"luggage":true},{"wagonType":"Edm","location":12,"salesNumber":22,"length":2640},{"wagonType":"Edm","location":13,"salesNumber":21,"length":2640},{"wagonType":"Edm","location":14,"salesNumber":20,"length":2640},{"wagonType":"Gd","location":15,"salesNumber":701,"length":3160},{"wagonType":"Gd","location":16,"salesNumber":702,"length":3160},{"wagonType":"Gd","location":17,"salesNumber":732,"length":3160}],"totalLength":457,"maximumSpeed":140,"attapId":312314615,"saapAttapId":312322265},{"beginTimeTableRow":{"stationShortCode":"ROI","stationUICCode":364,"countryCode":"FI","type":"DEPARTURE","scheduledTime":"2023-06-18T04:35:00.000Z"},"endTimeTableRow":{"stationShortCode":"KJÄ","stationUICCode":367,"countryCode":"FI","type":"ARRIVAL","scheduledTime":"2023-06-18T05:50:00.000Z"},"locomotives":[{"location":1,"locomotiveType":"Sr2","powerType":"Electric"}],"wagons":[{"wagonType":"Ed","location":2,"salesNumber":999,"length":2640},{"wagonType":"Edm","location":3,"salesNumber":31,"length":2640},{"wagonType":"Edm","location":4,"salesNumber":30,"length":2640},{"wagonType":"Edm","location":5,"salesNumber":29,"length":2640},{"wagonType":"Edm","location":6,"salesNumber":28,"length":2640},{"wagonType":"Edm","location":7,"salesNumber":27,"length":2640},{"wagonType":"Edm","location":8,"salesNumber":26,"length":2640},{"wagonType":"Ed","location":9,"salesNumber":25,"length":2640},{"wagonType":"Rx","location":10,"salesNumber":24,"length":2640,"catering":true},{"wagonType":"Edg","location":11,"salesNumber":23,"length":2650,"pet":true,"luggage":true},{"wagonType":"Edm","location":12,"salesNumber":22,"length":2640},{"wagonType":"Edm","location":13,"salesNumber":21,"length":2640},{"wagonType":"Edm","location":14,"salesNumber":20,"length":2640}],"totalLength":362,"maximumSpeed":140,"attapId":312322315,"saapAttapId":312322765}]}
*/

interface TrainComposition {
    trainNumber: number;
    departureDate: string;
    operatorUICCode: number;
    operatorShortCode: string;
    trainCategory: string;
    trainType: string;
    version: number;
    journeySections: CompositionJourneySection[];
}

interface CompositionJourneySection {
    beginTimeTableRow: TimeTableRow;
    endTimeTableRow: TimeTableRow;
    locomotives: Locomotive[];
    wagons: Wagon[];
    totalLength: number;
    maximumSpeed: number;
    attapId: number;
    saapAttapId: number;
}

interface Locomotive {
    location: number;
    locomotiveType: string;
    powerType: string;
}

interface Wagon {
    wagonType: string;
    location: number;
    salesNumber: number;
    length: number;
    catering?: boolean;
    pet?: boolean;
    luggage?: boolean;
}

interface VRJourneyOption {
    id: string;
    departureTime: string;
    departureStation: string;
    arrivalStation: string;
    arrivalTime: string;
    legs: VRJourneyOptionLeg[];
    totalPrice: number;
    discount: Discount | null;
    error: string | null;
    passengers: VRJourneyOptionPassenger[];
    availability: OptionAvailability;
    highestLegTrainFill: number;
}

interface VRJourneyOptionLeg {
    legKey: string;
    trainNumber: string;
    trainType: string;
    trainAttributes: string[];
    type: string;
    commercialLineIdentifier: string;
    departureStation: string;
    departureTime: string;
    arrivalStation: string;
    arrivalTime: string;
    trainFillPercentage: number;
    productAttributes: ProductAttribute[];
}

interface ProductAttribute {
    name: string;
    attribute: string | null;
    availability: number;
}

interface VRJourneyOptionPassenger {
    type: string;
    offers: PassengerOffer[];
}

interface PassengerOffer {
    legId: string;
    product: string;
    price: number;
    discountCategory: string;
}

interface Discount {
    discountPercentage: number;
    ids: string[];
}

interface OptionAvailability {
    seatAvailability_v2: string;
    accessibleSeatAvailability: string;
    petSeatAvailability: string;
    cabinAvailability: string;
    petCabinAvailability: string;
    accessibleCabinAvailability: string;
}

/*
Required id: string Info Tiedotteen yksilöivä merkkijonotunniste
Required version: positive integer Info Tiedotteen uusin versionumero
Required creationDateTime: date Info Tiedotteen uusimman version luontipäivämäärä
Required startValidity: date Info Tiedotteen voimassaolon alkupäivämäärä
Required endValidity: date Info Tiedotteen voimassaolon loppupäivämäärä
Required stations: string[] Info Lista tiedotteeseen liittyvien asemien lyhenteistä
Optional trainNumber: positive integer Info Tiedotteeseen liittyvän junan numero
Optional trainDepartureDate: date Info Tiedotteeseen liittyvän junan lähtöpäivämäärä
Optional audio: object Info Tiedotteen audioversion tekstisisällöt ja esityssäännöt
    Optional text: object Info Tiedotteen tekstisisällöt
        Optional fi: string Info Tiedotteen tekstisisältö suomeksi
        Optional sv: string Info Tiedotteen tekstisisältö ruotsiksi
        Optional en: string Info Tiedotteen tekstisisältö englanniksi
*/

interface PassangerInformation {
    id: string;
    version: number;
    creationDateTime: string;
    startValidity: string;
    endValidity: string;
    stations: string[];
    trainNumber?: number;
    trainDepartureDate?: string;
    audio?: {
        text: {
            fi?: string;
            sv?: string;
            en?: string;
        };
    };
}

interface CauseDetails {
    code: string;
    name: string;
    validFrom: string;
}