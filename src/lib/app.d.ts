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

/*
			{
				"id": "cc028cf3-f627-4278-8ee5-74c735fd57f4",
				"departureTime": "2024-06-17T05:03:00.000+03:00",
				"departureStation": "HKI",
				"arrivalStation": "JY",
				"arrivalTime": "2024-06-17T08:43:00.000+03:00",
				"legs": [
					{
						"legKey": "35-HKI-TPE-2024-06-17",
						"trainNumber": "35",
						"trainType": "S",
						"trainAttributes": [
							"SEAT-2ND_CLASS",
							"ILE",
							"LEM",
							"LVA",
							"VAS",
							"WHEELCHAIR_ACCESSIBLE",
							"RESTAURANT",
							"VAE",
							"PTP",
							"SEAT-1ST_CLASS",
							"SBN"
						],
						"type": "LONG_DISTANCE",
						"commercialLineIdentifier": "",
						"departureStation": "HKI",
						"departureTime": "2024-06-17T05:03:00.000+03:00",
						"arrivalStation": "TPE",
						"arrivalTime": "2024-06-17T06:53:00.000+03:00",
						"trainFillPercentage": 11,
						"productAttributes": [
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "VAE",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SEAT_IN_NEGOTIATION_CABIN",
								"attribute": "SBN",
								"availability": 6,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "LEM",
								"availability": 18,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "LVA",
								"availability": 22,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_EXTRA",
								"attribute": "VAS",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SINGLE_EXTRA_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 8,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "VAE",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "LVA",
								"availability": 22,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_EXTRA",
								"attribute": null,
								"availability": 32,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "LEM",
								"availability": 18,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": null,
								"availability": 261,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 102,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SINGLE_EXTRA_CLASS_SEAT",
								"attribute": "EKY",
								"availability": 28,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "ILE",
								"availability": 1,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "PTP",
								"availability": 4,
								"__typename": "ProductAttribute"
							},
							{
								"name": "EXTRA_CLASS_SEAT",
								"attribute": null,
								"availability": 32,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "ILE",
								"availability": 1,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "VAS",
								"availability": 102,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": null,
								"availability": 261,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "PTP",
								"availability": 4,
								"__typename": "ProductAttribute"
							},
							{
								"name": "EXTRA_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 16,
								"__typename": "ProductAttribute"
							}
						],
						"__typename": "JourneyOptionLeg"
					},
					{
						"legKey": "81-TPE-JY-2024-06-17",
						"trainNumber": "81",
						"trainType": "IC",
						"trainAttributes": [
							"SEAT-2ND_CLASS",
							"ILE",
							"VAS",
							"WHEELCHAIR_ACCESSIBLE",
							"TYO",
							"PTP",
							"PPP",
							"LEI",
							"LEM",
							"LVA",
							"VAE",
							"PER",
							"SEAT-1ST_CLASS"
						],
						"type": "LONG_DISTANCE",
						"commercialLineIdentifier": "",
						"departureStation": "TPE",
						"departureTime": "2024-06-17T07:07:00.000+03:00",
						"arrivalStation": "JY",
						"arrivalTime": "2024-06-17T08:43:00.000+03:00",
						"trainFillPercentage": 3,
						"productAttributes": [
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "VAE",
								"availability": 8,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "LEI",
								"availability": 20,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "LEM",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "LVA",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_EXTRA",
								"attribute": "VAS",
								"availability": 4,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SINGLE_EXTRA_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 2,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "LEI",
								"availability": 20,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "VAE",
								"availability": 8,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "LVA",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_EXTRA",
								"attribute": null,
								"availability": 20,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "LEM",
								"availability": 16,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": null,
								"availability": 110,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "ILE",
								"availability": 2,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SINGLE_EXTRA_CLASS_SEAT",
								"attribute": "EKY",
								"availability": 12,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SEAT_IN_WORKING_CABIN",
								"attribute": "TYO",
								"availability": 10,
								"__typename": "ProductAttribute"
							},
							{
								"name": "SEAT_IN_FAMILY_CABIN",
								"attribute": "PER",
								"availability": 4,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 24,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "PTP",
								"availability": 2,
								"__typename": "ProductAttribute"
							},
							{
								"name": "EXTRA_CLASS_SEAT",
								"attribute": null,
								"availability": 20,
								"__typename": "ProductAttribute"
							},
							{
								"name": "BICYCLE_ALLOTMENT",
								"attribute": null,
								"availability": 4,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": "ILE",
								"availability": 2,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "VAS",
								"availability": 24,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ECO_CLASS_SEAT",
								"attribute": null,
								"availability": 110,
								"__typename": "ProductAttribute"
							},
							{
								"name": "ADJACENT_SEAT_ECO",
								"attribute": "PTP",
								"availability": 2,
								"__typename": "ProductAttribute"
							},
							{
								"name": "EXTRA_CLASS_SEAT",
								"attribute": "VAS",
								"availability": 4,
								"__typename": "ProductAttribute"
							}
						],
						"__typename": "JourneyOptionLeg"
					}
				],
				"totalPrice": 1360,
				"discount": null,
				"error": null,
				"passengers": [
					{
						"type": "ADULT",
						"offers": [
							{
								"legId": "35-S-HKI-TPE-2024-06-17",
								"product": "ECO_CLASS_SEAT",
								"price": 820,
								"discountCategory": "P50",
								"__typename": "PassengerOffer"
							},
							{
								"legId": "81-IC-TPE-JY-2024-06-17",
								"product": "ECO_CLASS_SEAT",
								"price": 540,
								"discountCategory": "P40",
								"__typename": "PassengerOffer"
							}
						],
						"__typename": "JourneyOptionPassenger"
					}
				],
				"availability": {
					"seatAvailability_v2": "ECO_CLASS_SEAT",
					"accessibleSeatAvailability": "AVAILABLE",
					"petSeatAvailability": "AVAILABLE",
					"cabinAvailability": "None",
					"petCabinAvailability": "None",
					"accessibleCabinAvailability": "None",
					"__typename": "OptionAvailability"
				},
				"highestLegTrainFill": 11,
				"__typename": "JourneyOption"
			}
*/

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