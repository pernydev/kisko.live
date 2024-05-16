const stations: Record<string, Station> = {
	AHO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ahonpää',
		stationShortCode: 'AHO',
		stationUICCode: 1343,
		countryCode: 'FI',
		longitude: 25.006783,
		latitude: 64.537118
	},
	AHV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ahvenus',
		stationShortCode: 'AHV',
		stationUICCode: 1000,
		countryCode: 'FI',
		longitude: 22.498185,
		latitude: 61.291923
	},
	AIN: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Ainola',
		stationShortCode: 'AIN',
		stationUICCode: 628,
		countryCode: 'FI',
		longitude: 25.101494,
		latitude: 60.456863
	},
	ARL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Airaksela',
		stationShortCode: 'ARL',
		stationUICCode: 869,
		countryCode: 'FI',
		longitude: 27.4295,
		latitude: 62.724396
	},
	ATL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Aittaluoto',
		stationShortCode: 'ATL',
		stationUICCode: 676,
		countryCode: 'FI',
		longitude: 21.84537,
		latitude: 61.476933
	},
	AJO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ajos',
		stationShortCode: 'AJO',
		stationUICCode: 767,
		countryCode: 'FI',
		longitude: 24.541716,
		latitude: 65.673679
	},
	APT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Alapitkä',
		stationShortCode: 'APT',
		stationUICCode: 415,
		countryCode: 'FI',
		longitude: 27.535426,
		latitude: 63.200823
	},
	ALV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Alavus',
		stationShortCode: 'ALV',
		stationUICCode: 284,
		countryCode: 'FI',
		longitude: 23.600437,
		latitude: 62.617769
	},
	ALH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Alholma',
		stationShortCode: 'ALH',
		stationUICCode: 308,
		countryCode: 'FI',
		longitude: 22.695265,
		latitude: 63.706765
	},
	ARO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Arola',
		stationShortCode: 'ARO',
		stationUICCode: 939,
		countryCode: 'FI',
		longitude: 29.022513,
		latitude: 64.450787
	},
	ASO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Asola',
		stationShortCode: 'ASO',
		stationUICCode: 1340,
		countryCode: 'FI',
		longitude: 25.047287,
		latitude: 60.320974
	},
	AVP: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Aviapolis',
		stationShortCode: 'AVP',
		stationUICCode: 1331,
		countryCode: 'FI',
		longitude: 24.956191,
		latitude: 60.30435
	},
	BSL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Buslovskaja',
		stationShortCode: 'BSL',
		stationUICCode: 2140,
		countryCode: 'RU',
		longitude: 28.3777,
		latitude: 60.840338
	},
	DRA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Dragsvik',
		stationShortCode: 'DRA',
		stationUICCode: 167,
		countryCode: 'FI',
		longitude: 23.488607,
		latitude: 59.990199
	},
	DMV: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Dynamiittivaihde',
		stationShortCode: 'DMV',
		stationUICCode: 581,
		countryCode: 'FI',
		longitude: 23.084138,
		latitude: 59.866408
	},
	EPZ: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Eläinpuisto-Zoo',
		stationShortCode: 'EPZ',
		stationUICCode: 623,
		countryCode: 'FI',
		longitude: 24.191479,
		latitude: 62.540677
	},
	ENO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Eno',
		stationShortCode: 'ENO',
		stationUICCode: 464,
		countryCode: 'FI',
		longitude: 30.141691,
		latitude: 62.806375
	},
	ERV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ervelä',
		stationShortCode: 'ERV',
		stationUICCode: 1004,
		countryCode: 'FI',
		longitude: 23.22228,
		latitude: 60.203374
	},
	ELA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Eskola',
		stationShortCode: 'ELA',
		stationUICCode: 318,
		countryCode: 'FI',
		longitude: 24.151369,
		latitude: 63.914902
	},
	EPO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Espoo',
		stationShortCode: 'EPO',
		stationUICCode: 66,
		countryCode: 'FI',
		longitude: 24.655992,
		latitude: 60.205067
	},
	HPJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Haapajärvi',
		stationShortCode: 'HPJ',
		stationUICCode: 330,
		countryCode: 'FI',
		longitude: 25.33434,
		latitude: 63.754515
	},
	HPS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Haapakoski',
		stationShortCode: 'HPS',
		stationUICCode: 402,
		countryCode: 'FI',
		longitude: 27.175449,
		latitude: 62.452365
	},
	HPK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Haapamäki',
		stationShortCode: 'HPK',
		stationUICCode: 200,
		countryCode: 'FI',
		longitude: 24.455067,
		latitude: 62.246476
	},
	HPA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Haaparanta',
		stationShortCode: 'HPA',
		stationUICCode: 1408,
		countryCode: 'SE',
		longitude: 24.131104,
		latitude: 65.828099
	},
	HAA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Haarajoki',
		stationShortCode: 'HAA',
		stationUICCode: 13,
		countryCode: 'FI',
		longitude: 25.13382,
		latitude: 60.496261
	},
	HLT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hakosilta',
		stationShortCode: 'HLT',
		stationUICCode: 1014,
		countryCode: 'FI',
		longitude: 25.513357,
		latitude: 60.925032
	},
	HSI: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Haksi',
		stationShortCode: 'HSI',
		stationUICCode: 1015,
		countryCode: 'FI',
		longitude: 25.554663,
		latitude: 60.408207
	},
	HMA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hamina',
		stationShortCode: 'HMA',
		stationUICCode: 527,
		countryCode: 'FI',
		longitude: 27.166505,
		latitude: 60.55232
	},
	HSL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hammaslahti',
		stationShortCode: 'HSL',
		stationUICCode: 451,
		countryCode: 'FI',
		longitude: 29.968366,
		latitude: 62.430216
	},
	HNA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hanala',
		stationShortCode: 'HNA',
		stationUICCode: 1018,
		countryCode: 'FI',
		longitude: 25.072363,
		latitude: 60.339607
	},
	HGS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hangonsaari',
		stationShortCode: 'HGS',
		stationUICCode: 1020,
		countryCode: 'FI',
		longitude: 21.360988,
		latitude: 60.7992
	},
	HNH: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Hanhikoski',
		stationShortCode: 'HNH',
		stationUICCode: 812,
		countryCode: 'FI',
		longitude: 27.219836,
		latitude: 66.695831
	},
	HKS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hankasalmi',
		stationShortCode: 'HKS',
		stationUICCode: 427,
		countryCode: 'FI',
		longitude: 26.478116,
		latitude: 62.302807
	},
	HNK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hanko',
		stationShortCode: 'HNK',
		stationUICCode: 73,
		countryCode: 'FI',
		longitude: 22.968291,
		latitude: 59.826865
	},
	HNKT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hanko tavara',
		stationShortCode: 'HNKT',
		stationUICCode: 1317,
		countryCode: 'FI',
		longitude: 22.981473,
		latitude: 59.828617
	},
	HKP: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hanko-Pohjoinen',
		stationShortCode: 'HKP',
		stationUICCode: 879,
		countryCode: 'FI',
		longitude: 22.988361,
		latitude: 59.830141
	},
	HVA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Harjavalta',
		stationShortCode: 'HVA',
		stationUICCode: 218,
		countryCode: 'FI',
		longitude: 22.133261,
		latitude: 61.309689
	},
	HJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Harju',
		stationShortCode: 'HJ',
		stationUICCode: 985,
		countryCode: 'FI',
		longitude: 26.677153,
		latitude: 60.940616
	},
	HRV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Harviala',
		stationShortCode: 'HRV',
		stationUICCode: 622,
		countryCode: 'FI',
		longitude: 24.57693,
		latitude: 60.95365
	},
	HD: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Haukipudas',
		stationShortCode: 'HD',
		stationUICCode: 342,
		countryCode: 'FI',
		longitude: 25.407075,
		latitude: 65.195636
	},
	HAU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Haukivuori',
		stationShortCode: 'HAU',
		stationUICCode: 549,
		countryCode: 'FI',
		longitude: 27.202606,
		latitude: 62.025658
	},
	HAS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hausjärvi tavara',
		stationShortCode: 'HAS',
		stationUICCode: 340,
		countryCode: 'FI',
		longitude: 25.014992,
		latitude: 60.785411
	},
	HVS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Haviseva',
		stationShortCode: 'HVS',
		stationUICCode: 1021,
		countryCode: 'FI',
		longitude: 24.087374,
		latitude: 61.550664
	},
	HVK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Havukoski',
		stationShortCode: 'HVK',
		stationUICCode: 1334,
		countryCode: 'FI',
		longitude: 25.051833,
		latitude: 60.308402
	},
	HEK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Heikkilä',
		stationShortCode: 'HEK',
		stationUICCode: 1023,
		countryCode: 'FI',
		longitude: 24.480906,
		latitude: 60.121966
	},
	HA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Heinola',
		stationShortCode: 'HA',
		stationUICCode: 113,
		countryCode: 'FI',
		longitude: 26.046963,
		latitude: 61.20317
	},
	HNO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Heinoo',
		stationShortCode: 'HNO',
		stationUICCode: 1025,
		countryCode: 'FI',
		longitude: 22.971145,
		latitude: 61.394254
	},
	HÄV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Heinävaara',
		stationShortCode: 'HÄV',
		stationUICCode: 924,
		countryCode: 'FI',
		longitude: 30.190207,
		latitude: 62.55575
	},
	HNV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Heinävesi',
		stationShortCode: 'HNV',
		stationUICCode: 437,
		countryCode: 'FI',
		longitude: 28.643419,
		latitude: 62.382542
	},
	HKI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Helsinki',
		stationShortCode: 'HKI',
		stationUICCode: 1,
		countryCode: 'FI',
		longitude: 24.941249,
		latitude: 60.172097
	},
	KHK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Helsinki Kivihaka',
		stationShortCode: 'KHK',
		stationUICCode: 1028,
		countryCode: 'FI',
		longitude: 24.917191,
		latitude: 60.209813
	},
	HNN: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Henna',
		stationShortCode: 'HNN',
		stationUICCode: 1164,
		countryCode: 'FI',
		longitude: 25.494389,
		latitude: 60.799132
	},
	HR: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Herrala',
		stationShortCode: 'HR',
		stationUICCode: 96,
		countryCode: 'FI',
		longitude: 25.475624,
		latitude: 60.896944
	},
	HKH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hiekkaharju',
		stationShortCode: 'HKH',
		stationUICCode: 556,
		countryCode: 'FI',
		longitude: 25.049104,
		latitude: 60.303081
	},
	HIR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hiirola',
		stationShortCode: 'HIR',
		stationUICCode: 997,
		countryCode: 'FI',
		longitude: 27.315826,
		latitude: 61.808118
	},
	HK: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Hikiä',
		stationShortCode: 'HK',
		stationUICCode: 91,
		countryCode: 'FI',
		longitude: 24.919201,
		latitude: 60.752588
	},
	HLS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hillosensalmi',
		stationShortCode: 'HLS',
		stationUICCode: 988,
		countryCode: 'FI',
		longitude: 26.789163,
		latitude: 61.193088
	},
	HH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Hinthaara',
		stationShortCode: 'HH',
		stationUICCode: 561,
		countryCode: 'FI',
		longitude: 25.477951,
		latitude: 60.399764
	},
	HVN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hirvineva',
		stationShortCode: 'HVN',
		stationUICCode: 1041,
		countryCode: 'FI',
		longitude: 25.227499,
		latitude: 64.733984
	},
	HP: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Humppila',
		stationShortCode: 'HP',
		stationUICCode: 144,
		countryCode: 'FI',
		longitude: 23.362536,
		latitude: 60.919507
	},
	HPL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Huopalahti',
		stationShortCode: 'HPL',
		stationUICCode: 72,
		countryCode: 'FI',
		longitude: 24.893523,
		latitude: 60.21835
	},
	HKO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Huutokoski',
		stationShortCode: 'HKO',
		stationUICCode: 430,
		countryCode: 'FI',
		longitude: 27.68887,
		latitude: 62.210069
	},
	HYR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hyrkäs',
		stationShortCode: 'HYR',
		stationUICCode: 1348,
		countryCode: 'FI',
		longitude: 26.22007,
		latitude: 64.788806
	},
	HYS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hyrynsalmi',
		stationShortCode: 'HYS',
		stationUICCode: 392,
		countryCode: 'FI',
		longitude: 28.462708,
		latitude: 64.683757
	},
	HY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hyvinkää',
		stationShortCode: 'HY',
		stationUICCode: 30,
		countryCode: 'FI',
		longitude: 24.857481,
		latitude: 60.63126
	},
	PVL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hyvinkää Paavola',
		stationShortCode: 'PVL',
		stationUICCode: 1368,
		countryCode: 'FI',
		longitude: 24.840155,
		latitude: 60.650153
	},
	HYT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Hyvinkää tavara',
		stationShortCode: 'HYT',
		stationUICCode: 1367,
		countryCode: 'FI',
		longitude: 24.846961,
		latitude: 60.625655
	},
	HL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Hämeenlinna',
		stationShortCode: 'HL',
		stationUICCode: 47,
		countryCode: 'FI',
		longitude: 24.478851,
		latitude: 61.002368
	},
	HM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Härmä',
		stationShortCode: 'HM',
		stationUICCode: 300,
		countryCode: 'FI',
		longitude: 22.876631,
		latitude: 63.234321
	},
	HÖL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Höljäkkä',
		stationShortCode: 'HÖL',
		stationUICCode: 938,
		countryCode: 'FI',
		longitude: 29.44413,
		latitude: 63.454874
	},
	II: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ii',
		stationShortCode: 'II',
		stationUICCode: 343,
		countryCode: 'FI',
		longitude: 25.441902,
		latitude: 65.318819
	},
	ITR: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Iisalmen teollisuusraiteet',
		stationShortCode: 'ITR',
		stationUICCode: 1049,
		countryCode: 'FI',
		longitude: 27.213924,
		latitude: 63.545757
	},
	ILM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Iisalmi',
		stationShortCode: 'ILM',
		stationUICCode: 420,
		countryCode: 'FI',
		longitude: 27.201109,
		latitude: 63.560099
	},
	R983: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Iisalmi (R983)',
		stationShortCode: 'R983',
		stationUICCode: 98987,
		countryCode: 'FI',
		longitude: 27.187277,
		latitude: 63.584458
	},
	ITA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Iittala',
		stationShortCode: 'ITA',
		stationUICCode: 154,
		countryCode: 'FI',
		longitude: 24.140789,
		latitude: 61.090616
	},
	ILA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Ilmala',
		stationShortCode: 'ILA',
		stationUICCode: 9,
		countryCode: 'FI',
		longitude: 24.920636,
		latitude: 60.208134
	},
	ILR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ilmala ratapiha',
		stationShortCode: 'ILR',
		stationUICCode: 1030,
		countryCode: 'FI',
		longitude: 24.928154,
		latitude: 60.21312
	},
	IOA: {
		passengerTraffic: false,
		type: 'STOPPING_POINT',
		stationName: 'Ilola',
		stationShortCode: 'IOA',
		stationUICCode: 1345,
		countryCode: 'FI',
		longitude: 23.875154,
		latitude: 61.229936
	},
	ILO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ilomantsi',
		stationShortCode: 'ILO',
		stationUICCode: 459,
		countryCode: 'FI',
		longitude: 30.941562,
		latitude: 62.666381
	},
	IMR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Imatra',
		stationShortCode: 'IMR',
		stationUICCode: 603,
		countryCode: 'FI',
		longitude: 28.776017,
		latitude: 61.195914
	},
	IMT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Imatra tavara',
		stationShortCode: 'IMT',
		stationUICCode: 502,
		countryCode: 'FI',
		longitude: 28.812093,
		latitude: 61.208116
	},
	IMK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Imatrankoski',
		stationShortCode: 'IMK',
		stationUICCode: 504,
		countryCode: 'FI',
		longitude: 28.788045,
		latitude: 61.170432
	},
	IMKR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Imatrankoski-raja',
		stationShortCode: 'IMKR',
		stationUICCode: 503,
		countryCode: 'FI',
		longitude: 28.831782,
		latitude: 61.124973
	},
	IM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Immola',
		stationShortCode: 'IM',
		stationUICCode: 1352,
		countryCode: 'FI',
		longitude: 28.883766,
		latitude: 61.246855
	},
	IN: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Inha',
		stationShortCode: 'IN',
		stationUICCode: 264,
		countryCode: 'FI',
		longitude: 24.146053,
		latitude: 62.550706
	},
	IKR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Inkeroinen',
		stationShortCode: 'IKR',
		stationUICCode: 530,
		countryCode: 'FI',
		longitude: 26.839178,
		latitude: 60.696674
	},
	IKO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Inkoo',
		stationShortCode: 'IKO',
		stationUICCode: 62,
		countryCode: 'FI',
		longitude: 23.93585,
		latitude: 60.061511
	},
	IKY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Isokyrö',
		stationShortCode: 'IKY',
		stationUICCode: 295,
		countryCode: 'FI',
		longitude: 22.394797,
		latitude: 62.951072
	},
	JAL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Jalasjärvi',
		stationShortCode: 'JAL',
		stationUICCode: 276,
		countryCode: 'FI',
		longitude: 22.954266,
		latitude: 62.472534
	},
	JPA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Jepua',
		stationShortCode: 'JPA',
		stationUICCode: 303,
		countryCode: 'FI',
		longitude: 22.655272,
		latitude: 63.408383
	},
	JNS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Joensuu',
		stationShortCode: 'JNS',
		stationUICCode: 460,
		countryCode: 'FI',
		longitude: 29.777033,
		latitude: 62.599536
	},
	KPP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Joensuu Koppola',
		stationShortCode: 'KPP',
		stationUICCode: 1369,
		countryCode: 'FI',
		longitude: 29.79147,
		latitude: 62.572314
	},
	PLT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Joensuu Peltola',
		stationShortCode: 'PLT',
		stationUICCode: 1070,
		countryCode: 'FI',
		longitude: 29.771729,
		latitude: 62.593453
	},
	SUL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Joensuu Sulkulahti',
		stationShortCode: 'SUL',
		stationUICCode: 1071,
		countryCode: 'FI',
		longitude: 29.775371,
		latitude: 62.58571
	},
	JK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Jokela',
		stationShortCode: 'JK',
		stationUICCode: 28,
		countryCode: 'FI',
		longitude: 24.970682,
		latitude: 60.552798
	},
	JOR: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Joroinen',
		stationShortCode: 'JOR',
		stationUICCode: 431,
		countryCode: 'FI',
		longitude: 27.808684,
		latitude: 62.17479
	},
	JRS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Jorvas',
		stationShortCode: 'JRS',
		stationUICCode: 578,
		countryCode: 'FI',
		longitude: 24.512776,
		latitude: 60.137885
	},
	JTS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Joutseno',
		stationShortCode: 'JTS',
		stationUICCode: 499,
		countryCode: 'FI',
		longitude: 28.488252,
		latitude: 61.120291
	},
	JKI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Juankoski',
		stationShortCode: 'JKI',
		stationUICCode: 414,
		countryCode: 'FI',
		longitude: 28.318074,
		latitude: 63.063182
	},
	JUT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Jutila',
		stationShortCode: 'JUT',
		stationUICCode: 1085,
		countryCode: 'FI',
		longitude: 25.123661,
		latitude: 60.837131
	},
	JJ: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Juupajoki',
		stationShortCode: 'JJ',
		stationUICCode: 627,
		countryCode: 'FI',
		longitude: 24.365046,
		latitude: 61.796788
	},
	JRI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Juurikorpi',
		stationShortCode: 'JRI',
		stationUICCode: 535,
		countryCode: 'FI',
		longitude: 26.938127,
		latitude: 60.604162
	},
	JY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Jyväskylä',
		stationShortCode: 'JY',
		stationUICCode: 240,
		countryCode: 'FI',
		longitude: 25.754984,
		latitude: 62.241455
	},
	JÄS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Jämsä',
		stationShortCode: 'JÄS',
		stationUICCode: 204,
		countryCode: 'FI',
		longitude: 25.173294,
		latitude: 61.865627
	},
	JSK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Jämsänkoski',
		stationShortCode: 'JSK',
		stationUICCode: 205,
		countryCode: 'FI',
		longitude: 25.171247,
		latitude: 61.89613
	},
	JR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Järvelä',
		stationShortCode: 'JR',
		stationUICCode: 95,
		countryCode: 'FI',
		longitude: 25.274659,
		latitude: 60.867325
	},
	JP: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Järvenpää',
		stationShortCode: 'JP',
		stationUICCode: 25,
		countryCode: 'FI',
		longitude: 25.090796,
		latitude: 60.473684
	},
	KPA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kaipiainen',
		stationShortCode: 'KPA',
		stationUICCode: 485,
		countryCode: 'FI',
		longitude: 27.117721,
		latitude: 60.900137
	},
	KLA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kaipola',
		stationShortCode: 'KLA',
		stationUICCode: 656,
		countryCode: 'FI',
		longitude: 25.214721,
		latitude: 61.816678
	},
	KJR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kaitjärvi',
		stationShortCode: 'KJR',
		stationUICCode: 944,
		countryCode: 'FI',
		longitude: 27.346311,
		latitude: 60.910768
	},
	KAJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kajaani',
		stationShortCode: 'KAJ',
		stationUICCode: 387,
		countryCode: 'FI',
		longitude: 27.738374,
		latitude: 64.219716
	},
	KTN: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kaleton',
		stationShortCode: 'KTN',
		stationUICCode: 697,
		countryCode: 'FI',
		longitude: 24.791661,
		latitude: 62.239687
	},
	KAU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kalkku',
		stationShortCode: 'KAU',
		stationUICCode: 639,
		countryCode: 'FI',
		longitude: 23.572333,
		latitude: 61.496551
	},
	KAO: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kalliovarasto',
		stationShortCode: 'KAO',
		stationUICCode: 1090,
		countryCode: 'FI',
		longitude: 27.909191,
		latitude: 64.281152
	},
	KSA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kalvitsa',
		stationShortCode: 'KSA',
		stationUICCode: 548,
		countryCode: 'FI',
		longitude: 27.285129,
		latitude: 61.910592
	},
	KGS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kangas',
		stationShortCode: 'KGS',
		stationUICCode: 1092,
		countryCode: 'FI',
		longitude: 24.71276,
		latitude: 64.143616
	},
	KAN: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kannelmäki',
		stationShortCode: 'KAN',
		stationUICCode: 658,
		countryCode: 'FI',
		longitude: 24.877004,
		latitude: 60.239562
	},
	KSI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kannonkoski',
		stationShortCode: 'KSI',
		stationUICCode: 256,
		countryCode: 'FI',
		longitude: 25.270005,
		latitude: 62.983598
	},
	KNS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kannus',
		stationShortCode: 'KNS',
		stationUICCode: 317,
		countryCode: 'FI',
		longitude: 23.915361,
		latitude: 63.898425
	},
	KRR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Karhejärvi',
		stationShortCode: 'KRR',
		stationUICCode: 1095,
		countryCode: 'FI',
		longitude: 23.390356,
		latitude: 61.750017
	},
	KHG: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Karhukangas',
		stationShortCode: 'KHG',
		stationUICCode: 1097,
		countryCode: 'FI',
		longitude: 24.43962,
		latitude: 64.024376
	},
	KR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Karjaa',
		stationShortCode: 'KR',
		stationUICCode: 60,
		countryCode: 'FI',
		longitude: 23.66126,
		latitude: 60.068724
	},
	KRU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Karkku',
		stationShortCode: 'KRU',
		stationUICCode: 178,
		countryCode: 'FI',
		longitude: 23.049129,
		latitude: 61.443314
	},
	KAR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Karviainen',
		stationShortCode: 'KAR',
		stationUICCode: 1100,
		countryCode: 'FI',
		longitude: 22.558744,
		latitude: 60.62317
	},
	KSK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kaskinen',
		stationShortCode: 'KSK',
		stationUICCode: 267,
		countryCode: 'FI',
		longitude: 21.229972,
		latitude: 62.381061
	},
	KTH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kattilaharju',
		stationShortCode: 'KTH',
		stationUICCode: 1319,
		countryCode: 'FI',
		longitude: 26.959698,
		latitude: 60.880135
	},
	KJI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kauhajoki',
		stationShortCode: 'KJI',
		stationUICCode: 272,
		countryCode: 'FI',
		longitude: 22.211614,
		latitude: 62.459927
	},
	KHA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kauhava',
		stationShortCode: 'KHA',
		stationUICCode: 299,
		countryCode: 'FI',
		longitude: 23.0353,
		latitude: 63.099643
	},
	KLH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kauklahti',
		stationShortCode: 'KLH',
		stationUICCode: 65,
		countryCode: 'FI',
		longitude: 24.600354,
		latitude: 60.189456
	},
	KLR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kaulinranta',
		stationShortCode: 'KLR',
		stationUICCode: 790,
		countryCode: 'FI',
		longitude: 23.712767,
		latitude: 66.466907
	},
	KNI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kauniainen',
		stationShortCode: 'KNI',
		stationUICCode: 67,
		countryCode: 'FI',
		longitude: 24.730884,
		latitude: 60.211939
	},
	KPL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kauppilanmäki',
		stationShortCode: 'KPL',
		stationUICCode: 423,
		countryCode: 'FI',
		longitude: 27.227847,
		latitude: 63.709557
	},
	KA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kausala',
		stationShortCode: 'KA',
		stationUICCode: 477,
		countryCode: 'FI',
		longitude: 26.329366,
		latitude: 60.885347
	},
	KTP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Keitelepohja',
		stationShortCode: 'KTP',
		stationUICCode: 257,
		countryCode: 'FI',
		longitude: 25.54797,
		latitude: 63.192764
	},
	KEK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kekomäki',
		stationShortCode: 'KEK',
		stationUICCode: 1101,
		countryCode: 'FI',
		longitude: 24.911994,
		latitude: 60.750527
	},
	KEM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kemi',
		stationShortCode: 'KEM',
		stationUICCode: 347,
		countryCode: 'FI',
		longitude: 24.574339,
		latitude: 65.736749
	},
	LI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kemi Lautiosaari',
		stationShortCode: 'LI',
		stationUICCode: 829,
		countryCode: 'FI',
		longitude: 24.565183,
		latitude: 65.779047
	},
	SHS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kemi Sahansaari',
		stationShortCode: 'SHS',
		stationUICCode: 1363,
		countryCode: 'FI',
		longitude: 24.550275,
		latitude: 65.757307
	},
	KJÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kemijärvi',
		stationShortCode: 'KJÄ',
		stationUICCode: 367,
		countryCode: 'FI',
		longitude: 27.403715,
		latitude: 66.724273
	},
	KML: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kempele',
		stationShortCode: 'KML',
		stationUICCode: 769,
		countryCode: 'FI',
		longitude: 25.514546,
		latitude: 64.912904
	},
	KEA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kera',
		stationShortCode: 'KEA',
		stationUICCode: 621,
		countryCode: 'FI',
		longitude: 24.75564,
		latitude: 60.216573
	},
	R660: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kerava (R660)',
		stationShortCode: 'R660',
		stationUICCode: 98997,
		countryCode: 'FI',
		longitude: 25.115166,
		latitude: 60.415815
	},
	KE: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kerava',
		stationShortCode: 'KE',
		stationUICCode: 20,
		countryCode: 'FI',
		longitude: 25.106028,
		latitude: 60.404297
	},
	KIÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kerimäki',
		stationShortCode: 'KIÄ',
		stationUICCode: 522,
		countryCode: 'FI',
		longitude: 29.114053,
		latitude: 61.861412
	},
	KTI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kesälahti',
		stationShortCode: 'KTI',
		stationUICCode: 966,
		countryCode: 'FI',
		longitude: 29.802865,
		latitude: 61.887467
	},
	KEU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Keuruu',
		stationShortCode: 'KEU',
		stationUICCode: 235,
		countryCode: 'FI',
		longitude: 24.707325,
		latitude: 62.255309
	},
	KIA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kiiala',
		stationShortCode: 'KIA',
		stationUICCode: 1113,
		countryCode: 'FI',
		longitude: 25.613204,
		latitude: 60.406719
	},
	KIL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kilo',
		stationShortCode: 'KIL',
		stationUICCode: 580,
		countryCode: 'FI',
		longitude: 24.782393,
		latitude: 60.217939
	},
	KUA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kilpua',
		stationShortCode: 'KUA',
		stationUICCode: 1115,
		countryCode: 'FI',
		longitude: 24.961514,
		latitude: 64.346567
	},
	KNH: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kinahmi',
		stationShortCode: 'KNH',
		stationUICCode: 873,
		countryCode: 'FI',
		longitude: 27.951398,
		latitude: 63.142738
	},
	KII: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kinni',
		stationShortCode: 'KII',
		stationUICCode: 1120,
		countryCode: 'FI',
		longitude: 26.846707,
		latitude: 61.306328
	},
	KIJ: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kirjola',
		stationShortCode: 'KIJ',
		stationUICCode: 1123,
		countryCode: 'FI',
		longitude: 29.520088,
		latitude: 61.536416
	},
	KKN: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kirkkonummi',
		stationShortCode: 'KKN',
		stationUICCode: 63,
		countryCode: 'FI',
		longitude: 24.438814,
		latitude: 60.119648
	},
	KRN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kirkniemi',
		stationShortCode: 'KRN',
		stationUICCode: 79,
		countryCode: 'FI',
		longitude: 23.963456,
		latitude: 60.175824
	},
	KIT: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kitee',
		stationShortCode: 'KIT',
		stationUICCode: 453,
		countryCode: 'FI',
		longitude: 30.049014,
		latitude: 62.142774
	},
	KN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kiukainen',
		stationShortCode: 'KN',
		stationUICCode: 169,
		countryCode: 'FI',
		longitude: 22.089236,
		latitude: 61.209665
	},
	KRV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kiuruvesi',
		stationShortCode: 'KRV',
		stationUICCode: 417,
		countryCode: 'FI',
		longitude: 26.611334,
		latitude: 63.640907
	},
	KVJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kivesjärvi',
		stationShortCode: 'KVJ',
		stationUICCode: 378,
		countryCode: 'FI',
		longitude: 27.471464,
		latitude: 64.468856
	},
	KIV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kivijärvi',
		stationShortCode: 'KIV',
		stationUICCode: 2810,
		countryCode: 'RU',
		longitude: 30.074562,
		latitude: 64.545544
	},
	KTÖ: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kivistö',
		stationShortCode: 'KTÖ',
		stationUICCode: 1330,
		countryCode: 'FI',
		longitude: 24.846938,
		latitude: 60.314607
	},
	KOH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kohtavaara',
		stationShortCode: 'KOH',
		stationUICCode: 848,
		countryCode: 'FI',
		longitude: 29.287006,
		latitude: 63.514758
	},
	KVU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Koivu',
		stationShortCode: 'KVU',
		stationUICCode: 362,
		countryCode: 'FI',
		longitude: 25.206795,
		latitude: 66.16981
	},
	KVH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Koivuhovi',
		stationShortCode: 'KVH',
		stationUICCode: 675,
		countryCode: 'FI',
		longitude: 24.701273,
		latitude: 60.207144
	},
	KVY: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Koivukylä',
		stationShortCode: 'KVY',
		stationUICCode: 559,
		countryCode: 'FI',
		longitude: 25.059797,
		latitude: 60.323284
	},
	KKI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kokemäki',
		stationShortCode: 'KKI',
		stationUICCode: 170,
		countryCode: 'FI',
		longitude: 22.30335,
		latitude: 61.254199
	},
	KOK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kokkola',
		stationShortCode: 'KOK',
		stationUICCode: 312,
		countryCode: 'FI',
		longitude: 23.131096,
		latitude: 63.834429
	},
	KLI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kolari',
		stationShortCode: 'KLI',
		stationUICCode: 358,
		countryCode: 'FI',
		longitude: 23.836254,
		latitude: 67.348706
	},
	KLO: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kolho',
		stationShortCode: 'KLO',
		stationUICCode: 199,
		countryCode: 'FI',
		longitude: 24.507444,
		latitude: 62.128049
	},
	KPI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kolppi',
		stationShortCode: 'KPI',
		stationUICCode: 309,
		countryCode: 'FI',
		longitude: 22.898299,
		latitude: 63.62756
	},
	KMM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kommila',
		stationShortCode: 'KMM',
		stationUICCode: 500,
		countryCode: 'FI',
		longitude: 27.887689,
		latitude: 62.325423
	},
	KOM: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Komu',
		stationShortCode: 'KOM',
		stationUICCode: 758,
		countryCode: 'FI',
		longitude: 26.153932,
		latitude: 63.663536
	},
	KHI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kontiolahti',
		stationShortCode: 'KHI',
		stationUICCode: 463,
		countryCode: 'FI',
		longitude: 29.857039,
		latitude: 62.732254
	},
	KON: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kontiomäki',
		stationShortCode: 'KON',
		stationUICCode: 390,
		countryCode: 'FI',
		longitude: 28.114694,
		latitude: 64.338219
	},
	R934: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Kontiomäki (R934)',
		stationShortCode: 'R934',
		stationUICCode: 99998,
		countryCode: 'FI',
		longitude: 28.100614,
		latitude: 64.362961
	},
	KRA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Koria',
		stationShortCode: 'KRA',
		stationUICCode: 478,
		countryCode: 'FI',
		longitude: 26.60131,
		latitude: 60.847067
	},
	KAS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Korkeakoski',
		stationShortCode: 'KAS',
		stationUICCode: 193,
		countryCode: 'FI',
		longitude: 24.375464,
		latitude: 61.807686
	},
	KRS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Korso',
		stationShortCode: 'KRS',
		stationUICCode: 19,
		countryCode: 'FI',
		longitude: 25.078507,
		latitude: 60.35129
	},
	KSU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Korvensuo',
		stationShortCode: 'KSU',
		stationUICCode: 1128,
		countryCode: 'FI',
		longitude: 25.218194,
		latitude: 60.582687
	},
	KOS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Koskenkorva',
		stationShortCode: 'KOS',
		stationUICCode: 274,
		countryCode: 'FI',
		longitude: 22.462393,
		latitude: 62.688028
	},
	KTA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kotka',
		stationShortCode: 'KTA',
		stationUICCode: 532,
		countryCode: 'FI',
		longitude: 26.928611,
		latitude: 60.464388
	},
	HOS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kotka Hovinsaari',
		stationShortCode: 'HOS',
		stationUICCode: 980,
		countryCode: 'FI',
		longitude: 26.919254,
		latitude: 60.483022
	},
	MSS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kotka Mussalo',
		stationShortCode: 'MSS',
		stationUICCode: 557,
		countryCode: 'FI',
		longitude: 26.89751,
		latitude: 60.431802
	},
	KTT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kotka tavara',
		stationShortCode: 'KTT',
		stationUICCode: 1130,
		countryCode: 'FI',
		longitude: 26.919356,
		latitude: 60.478803
	},
	KTS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kotkan satama',
		stationShortCode: 'KTS',
		stationUICCode: 644,
		countryCode: 'FI',
		longitude: 26.934952,
		latitude: 60.466492
	},
	KOO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kotolahti',
		stationShortCode: 'KOO',
		stationUICCode: 1329,
		countryCode: 'FI',
		longitude: 26.898503,
		latitude: 60.445244
	},
	KV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kouvola',
		stationShortCode: 'KV',
		stationUICCode: 480,
		countryCode: 'FI',
		longitude: 26.704588,
		latitude: 60.865613
	},
	KVLA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kouvola lajittelu',
		stationShortCode: 'KVLA',
		stationUICCode: 1132,
		countryCode: 'FI',
		longitude: 26.723643,
		latitude: 60.865734
	},
	OIK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kouvola Oikoraide',
		stationShortCode: 'OIK',
		stationUICCode: 1133,
		countryCode: 'FI',
		longitude: 26.764691,
		latitude: 60.86715
	},
	KVT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kouvola tavara',
		stationShortCode: 'KVT',
		stationUICCode: 1134,
		countryCode: 'FI',
		longitude: 26.750447,
		latitude: 60.86857
	},
	KOI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kovjoki',
		stationShortCode: 'KOI',
		stationUICCode: 745,
		countryCode: 'FI',
		longitude: 22.69252,
		latitude: 63.521231
	},
	KPY: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kruunupyy',
		stationShortCode: 'KPY',
		stationUICCode: 311,
		countryCode: 'FI',
		longitude: 23.034045,
		latitude: 63.7216
	},
	KIS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuivasjärvi',
		stationShortCode: 'KIS',
		stationUICCode: 1137,
		countryCode: 'FI',
		longitude: 23.036413,
		latitude: 62.174449
	},
	KUV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kullasvaara',
		stationShortCode: 'KUV',
		stationUICCode: 1320,
		countryCode: 'FI',
		longitude: 26.809881,
		latitude: 60.872249
	},
	KUO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kuopio',
		stationShortCode: 'KUO',
		stationUICCode: 408,
		countryCode: 'FI',
		longitude: 27.679581,
		latitude: 62.897218
	},
	ILH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuopio Iloharju',
		stationShortCode: 'ILH',
		stationUICCode: 1366,
		countryCode: 'FI',
		longitude: 27.644033,
		latitude: 62.8913
	},
	KUOT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuopio tavara',
		stationShortCode: 'KUOT',
		stationUICCode: 1139,
		countryCode: 'FI',
		longitude: 27.697282,
		latitude: 62.897796
	},
	KUT: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kupittaa',
		stationShortCode: 'KUT',
		stationUICCode: 126,
		countryCode: 'FI',
		longitude: 22.297114,
		latitude: 60.450274
	},
	KRM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kurkimäki',
		stationShortCode: 'KRM',
		stationUICCode: 406,
		countryCode: 'FI',
		longitude: 27.517621,
		latitude: 62.771886
	},
	KU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuurila',
		stationShortCode: 'KU',
		stationUICCode: 626,
		countryCode: 'FI',
		longitude: 23.994903,
		latitude: 61.133691
	},
	KUK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuusankoski',
		stationShortCode: 'KUK',
		stationUICCode: 537,
		countryCode: 'FI',
		longitude: 26.656252,
		latitude: 60.921019
	},
	KSN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kuusikkoniemi',
		stationShortCode: 'KSN',
		stationUICCode: 1356,
		countryCode: 'FI',
		longitude: 27.919899,
		latitude: 64.392909
	},
	KYN: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kylänlahti',
		stationShortCode: 'KYN',
		stationUICCode: 937,
		countryCode: 'FI',
		longitude: 29.75243,
		latitude: 63.361403
	},
	KY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Kymi',
		stationShortCode: 'KY',
		stationUICCode: 534,
		countryCode: 'FI',
		longitude: 26.90714,
		latitude: 60.539229
	},
	KLN: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Kyminlinna',
		stationShortCode: 'KLN',
		stationUICCode: 981,
		countryCode: 'FI',
		longitude: 26.895812,
		latitude: 60.508258
	},
	KÖ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kyrö',
		stationShortCode: 'KÖ',
		stationUICCode: 139,
		countryCode: 'FI',
		longitude: 22.748862,
		latitude: 60.702716
	},
	KYT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kytömaa',
		stationShortCode: 'KYT',
		stationUICCode: 1111,
		countryCode: 'FI',
		longitude: 25.110001,
		latitude: 60.425639
	},
	KLV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Kälviä',
		stationShortCode: 'KLV',
		stationUICCode: 316,
		countryCode: 'FI',
		longitude: 23.493255,
		latitude: 63.863974
	},
	KÄP: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Käpylä',
		stationShortCode: 'KÄP',
		stationUICCode: 977,
		countryCode: 'FI',
		longitude: 24.946034,
		latitude: 60.22017
	},
	KÖK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Köykkäri',
		stationShortCode: 'KÖK',
		stationUICCode: 1144,
		countryCode: 'FI',
		longitude: 22.772334,
		latitude: 63.343804
	},
	LAV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Laajavuori',
		stationShortCode: 'LAV',
		stationUICCode: 1341,
		countryCode: 'FI',
		longitude: 24.851146,
		latitude: 60.282453
	},
	LPR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lahdenperä',
		stationShortCode: 'LPR',
		stationUICCode: 1149,
		countryCode: 'FI',
		longitude: 24.944751,
		latitude: 61.811782
	},
	LHN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lahnaslampi',
		stationShortCode: 'LHN',
		stationUICCode: 871,
		countryCode: 'FI',
		longitude: 28.072026,
		latitude: 64.120658
	},
	LH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lahti',
		stationShortCode: 'LH',
		stationUICCode: 100,
		countryCode: 'FI',
		longitude: 25.657397,
		latitude: 60.97647
	},
	LAI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Laihia',
		stationShortCode: 'LAI',
		stationUICCode: 293,
		countryCode: 'FI',
		longitude: 22.003444,
		latitude: 62.990138
	},
	LAK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lakiala',
		stationShortCode: 'LAK',
		stationUICCode: 212,
		countryCode: 'FI',
		longitude: 23.526965,
		latitude: 61.625873
	},
	LMK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lamminkoski',
		stationShortCode: 'LMK',
		stationUICCode: 1151,
		countryCode: 'FI',
		longitude: 23.061226,
		latitude: 62.107789
	},
	LAM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lamminniemi',
		stationShortCode: 'LAM',
		stationUICCode: 845,
		countryCode: 'FI',
		longitude: 27.702541,
		latitude: 64.232062
	},
	LPJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lapinjärvi',
		stationShortCode: 'LPJ',
		stationUICCode: 108,
		countryCode: 'FI',
		longitude: 26.127856,
		latitude: 60.599097
	},
	LNA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lapinlahti',
		stationShortCode: 'LNA',
		stationUICCode: 416,
		countryCode: 'FI',
		longitude: 27.393552,
		latitude: 63.360666
	},
	LR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lappeenranta',
		stationShortCode: 'LR',
		stationUICCode: 495,
		countryCode: 'FI',
		longitude: 28.195304,
		latitude: 61.047973
	},
	LAA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Lappila',
		stationShortCode: 'LAA',
		stationUICCode: 94,
		countryCode: 'FI',
		longitude: 25.17423,
		latitude: 60.848954
	},
	LPO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lappohja',
		stationShortCode: 'LPO',
		stationUICCode: 75,
		countryCode: 'FI',
		longitude: 23.236919,
		latitude: 59.904082
	},
	LPA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lapua',
		stationShortCode: 'LPA',
		stationUICCode: 298,
		countryCode: 'FI',
		longitude: 23.015112,
		latitude: 62.971338
	},
	LYÖ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Larvakytö',
		stationShortCode: 'LYÖ',
		stationUICCode: 1153,
		countryCode: 'FI',
		longitude: 22.935915,
		latitude: 62.680182
	},
	LAU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Laukaa',
		stationShortCode: 'LAU',
		stationUICCode: 249,
		countryCode: 'FI',
		longitude: 25.924359,
		latitude: 62.422807
	},
	LLA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Laurila',
		stationShortCode: 'LLA',
		stationUICCode: 360,
		countryCode: 'FI',
		longitude: 24.534062,
		latitude: 65.796833
	},
	LRS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lauritsala',
		stationShortCode: 'LRS',
		stationUICCode: 498,
		countryCode: 'FI',
		longitude: 28.259631,
		latitude: 61.066415
	},
	LNÄ: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Leinelä',
		stationShortCode: 'LNÄ',
		stationUICCode: 1333,
		countryCode: 'FI',
		longitude: 25.039419,
		latitude: 60.322641
	},
	LKL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lelkola',
		stationShortCode: 'LKL',
		stationUICCode: 993,
		countryCode: 'FI',
		longitude: 26.966496,
		latitude: 61.526751
	},
	LPÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lempäälä',
		stationShortCode: 'LPÄ',
		stationUICCode: 156,
		countryCode: 'FI',
		longitude: 23.755094,
		latitude: 61.314233
	},
	LEN: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Lentoasema',
		stationShortCode: 'LEN',
		stationUICCode: 1332,
		countryCode: 'FI',
		longitude: 24.968343,
		latitude: 60.315732
	},
	LK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Leppäkoski',
		stationShortCode: 'LK',
		stationUICCode: 43,
		countryCode: 'FI',
		longitude: 24.695884,
		latitude: 60.87288
	},
	LPV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Leppävaara',
		stationShortCode: 'LPV',
		stationUICCode: 68,
		countryCode: 'FI',
		longitude: 24.813541,
		latitude: 60.21948
	},
	LTS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Leteensuo',
		stationShortCode: 'LTS',
		stationUICCode: 1154,
		countryCode: 'FI',
		longitude: 24.232505,
		latitude: 61.065513
	},
	LIS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lieksa',
		stationShortCode: 'LIS',
		stationUICCode: 468,
		countryCode: 'FI',
		longitude: 30.016394,
		latitude: 63.318195
	},
	LTK: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Lieksan teollisuuskylä',
		stationShortCode: 'LTK',
		stationUICCode: 1157,
		countryCode: 'FI',
		longitude: 30.064649,
		latitude: 63.314174
	},
	LLH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lielahti',
		stationShortCode: 'LLH',
		stationUICCode: 183,
		countryCode: 'FI',
		longitude: 23.6817,
		latitude: 61.510284
	},
	LVT: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Lievestuore',
		stationShortCode: 'LVT',
		stationUICCode: 246,
		countryCode: 'FI',
		longitude: 26.195893,
		latitude: 62.259872
	},
	LKA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Liminka',
		stationShortCode: 'LKA',
		stationUICCode: 338,
		countryCode: 'FI',
		longitude: 25.423892,
		latitude: 64.810176
	},
	LMP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Liminpuro',
		stationShortCode: 'LMP',
		stationUICCode: 1354,
		countryCode: 'FI',
		longitude: 27.250167,
		latitude: 64.538637
	},
	LUO: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Lohiluoma',
		stationShortCode: 'LUO',
		stationUICCode: 1159,
		countryCode: 'FI',
		longitude: 22.280376,
		latitude: 62.533667
	},
	LO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lohja',
		stationShortCode: 'LO',
		stationUICCode: 81,
		countryCode: 'FI',
		longitude: 24.116408,
		latitude: 60.265369
	},
	LM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Loimaa',
		stationShortCode: 'LM',
		stationUICCode: 142,
		countryCode: 'FI',
		longitude: 23.060408,
		latitude: 60.847378
	},
	LOH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Louhela',
		stationShortCode: 'LOH',
		stationUICCode: 661,
		countryCode: 'FI',
		longitude: 24.853299,
		latitude: 60.270798
	},
	LOL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Loukolampi',
		stationShortCode: 'LOL',
		stationUICCode: 861,
		countryCode: 'FI',
		longitude: 27.203502,
		latitude: 62.162673
	},
	LVS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Loviisan satama',
		stationShortCode: 'LVS',
		stationUICCode: 106,
		countryCode: 'FI',
		longitude: 26.247612,
		latitude: 60.418261
	},
	LUI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Luikonlahti',
		stationShortCode: 'LUI',
		stationUICCode: 411,
		countryCode: 'FI',
		longitude: 28.6752,
		latitude: 62.927654
	},
	LUS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Lusto',
		stationShortCode: 'LUS',
		stationUICCode: 690,
		countryCode: 'FI',
		longitude: 29.322269,
		latitude: 61.800548
	},
	LÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Luumäki',
		stationShortCode: 'LÄ',
		stationUICCode: 487,
		countryCode: 'FI',
		longitude: 27.761801,
		latitude: 60.944407
	},
	LHS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Lähessuo',
		stationShortCode: 'LHS',
		stationUICCode: 1364,
		countryCode: 'FI',
		longitude: 25.411155,
		latitude: 65.400725
	},
	LÄP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Länkipohja',
		stationShortCode: 'LÄP',
		stationUICCode: 203,
		countryCode: 'FI',
		longitude: 24.813105,
		latitude: 61.740823
	},
	MLK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Maanselkä',
		stationShortCode: 'MLK',
		stationUICCode: 382,
		countryCode: 'FI',
		longitude: 28.499352,
		latitude: 63.882203
	},
	MRI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Maaria',
		stationShortCode: 'MRI',
		stationUICCode: 1166,
		countryCode: 'FI',
		longitude: 22.365622,
		latitude: 60.538524
	},
	MD: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Madesjärvi',
		stationShortCode: 'MD',
		stationUICCode: 217,
		countryCode: 'FI',
		longitude: 22.987474,
		latitude: 62.3116
	},
	MJJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Majajärvi',
		stationShortCode: 'MJJ',
		stationUICCode: 1168,
		countryCode: 'FI',
		longitude: 23.469457,
		latitude: 61.682946
	},
	MKN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Maksniemi',
		stationShortCode: 'MKN',
		stationUICCode: 1365,
		countryCode: 'FI',
		longitude: 24.810093,
		latitude: 65.681839
	},
	ML: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Malmi',
		stationShortCode: 'ML',
		stationUICCode: 17,
		countryCode: 'FI',
		longitude: 25.011468,
		latitude: 60.25166
	},
	MLO: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Malminkartano',
		stationShortCode: 'MLO',
		stationUICCode: 659,
		countryCode: 'FI',
		longitude: 24.861283,
		latitude: 60.249316
	},
	MKA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mankala',
		stationShortCode: 'MKA',
		stationUICCode: 1336,
		countryCode: 'FI',
		longitude: 26.182911,
		latitude: 60.916315
	},
	MRK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Markkala',
		stationShortCode: 'MRK',
		stationUICCode: 896,
		countryCode: 'FI',
		longitude: 27.190465,
		latitude: 62.54004
	},
	MRL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Martinlaakso',
		stationShortCode: 'MRL',
		stationUICCode: 662,
		countryCode: 'FI',
		longitude: 24.852604,
		latitude: 60.27808
	},
	MAS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Masala',
		stationShortCode: 'MAS',
		stationUICCode: 64,
		countryCode: 'FI',
		longitude: 24.539106,
		latitude: 60.158661
	},
	MTV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Matkaneva',
		stationShortCode: 'MTV',
		stationUICCode: 1171,
		countryCode: 'FI',
		longitude: 23.348859,
		latitude: 63.84089
	},
	MAT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mattila',
		stationShortCode: 'MAT',
		stationUICCode: 1172,
		countryCode: 'FI',
		longitude: 23.758953,
		latitude: 61.261133
	},
	MLL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Melalahti',
		stationShortCode: 'MLL',
		stationUICCode: 1355,
		countryCode: 'FI',
		longitude: 27.659328,
		latitude: 64.412901
	},
	MSÄ: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Metsäkansa',
		stationShortCode: 'MSÄ',
		stationUICCode: 558,
		countryCode: 'FI',
		longitude: 23.884586,
		latitude: 61.234303
	},
	MI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Mikkeli',
		stationShortCode: 'MI',
		stationUICCode: 546,
		countryCode: 'FI',
		longitude: 27.277969,
		latitude: 61.687818
	},
	MIS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Misi',
		stationShortCode: 'MIS',
		stationUICCode: 366,
		countryCode: 'FI',
		longitude: 26.687235,
		latitude: 66.617923
	},
	MLA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Mommila',
		stationShortCode: 'MLA',
		stationUICCode: 93,
		countryCode: 'FI',
		longitude: 25.075141,
		latitude: 60.821177
	},
	MVA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Moskova_(Leningradski)',
		stationShortCode: 'MVA',
		stationUICCode: 6007,
		countryCode: 'RU',
		longitude: 37.655278,
		latitude: 55.777111
	},
	MH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Muhos',
		stationShortCode: 'MH',
		stationUICCode: 375,
		countryCode: 'FI',
		longitude: 25.991997,
		latitude: 64.805398
	},
	MUK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mukkula',
		stationShortCode: 'MUK',
		stationUICCode: 594,
		countryCode: 'FI',
		longitude: 25.657807,
		latitude: 61.005746
	},
	MUR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Murtomäki',
		stationShortCode: 'MUR',
		stationUICCode: 386,
		countryCode: 'FI',
		longitude: 27.579581,
		latitude: 64.064426
	},
	MSO: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Mustio',
		stationShortCode: 'MSO',
		stationUICCode: 78,
		countryCode: 'FI',
		longitude: 23.868437,
		latitude: 60.140408
	},
	MST: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mustolan satama',
		stationShortCode: 'MST',
		stationUICCode: 77,
		countryCode: 'FI',
		longitude: 28.312624,
		latitude: 61.059167
	},
	MKO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Muukko',
		stationShortCode: 'MKO',
		stationUICCode: 1180,
		countryCode: 'FI',
		longitude: 28.341566,
		latitude: 61.088163
	},
	MUU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Muurame',
		stationShortCode: 'MUU',
		stationUICCode: 433,
		countryCode: 'FI',
		longitude: 25.651352,
		latitude: 62.110893
	},
	MUL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Muurola',
		stationShortCode: 'MUL',
		stationUICCode: 363,
		countryCode: 'FI',
		longitude: 25.37511,
		latitude: 66.370875
	},
	MYS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Myllykangas',
		stationShortCode: 'MYS',
		stationUICCode: 1183,
		countryCode: 'FI',
		longitude: 25.272566,
		latitude: 65.535747
	},
	MKI: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Myllykoski',
		stationShortCode: 'MKI',
		stationUICCode: 536,
		countryCode: 'FI',
		longitude: 26.78669,
		latitude: 60.771013
	},
	MY: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Myllymäki',
		stationShortCode: 'MY',
		stationUICCode: 263,
		countryCode: 'FI',
		longitude: 24.280965,
		latitude: 62.524753
	},
	MYL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Myllyoja',
		stationShortCode: 'MYL',
		stationUICCode: 606,
		countryCode: 'FI',
		longitude: 25.989681,
		latitude: 61.16369
	},
	MYT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mynttilä',
		stationShortCode: 'MYT',
		stationUICCode: 543,
		countryCode: 'FI',
		longitude: 26.923895,
		latitude: 61.487261
	},
	MYN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mynämäki',
		stationShortCode: 'MYN',
		stationUICCode: 123,
		countryCode: 'FI',
		longitude: 21.964129,
		latitude: 60.650417
	},
	MYR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Myyrmäki',
		stationShortCode: 'MYR',
		stationUICCode: 660,
		countryCode: 'FI',
		longitude: 24.854751,
		latitude: 60.261327
	},
	MÄK: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Mäkkylä',
		stationShortCode: 'MÄK',
		stationUICCode: 693,
		countryCode: 'FI',
		longitude: 24.842976,
		latitude: 60.22131
	},
	MLÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Mäntsälä',
		stationShortCode: 'MLÄ',
		stationUICCode: 27,
		countryCode: 'FI',
		longitude: 25.307475,
		latitude: 60.647258
	},
	MÄN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mänttä',
		stationShortCode: 'MÄN',
		stationUICCode: 198,
		countryCode: 'FI',
		longitude: 24.646888,
		latitude: 62.029018
	},
	MR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Mäntyharju',
		stationShortCode: 'MR',
		stationUICCode: 544,
		countryCode: 'FI',
		longitude: 26.881746,
		latitude: 61.421104
	},
	MN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Mäntyluoto',
		stationShortCode: 'MN',
		stationUICCode: 223,
		countryCode: 'FI',
		longitude: 21.511964,
		latitude: 61.58996
	},
	MN_V: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Mäntyluoto erkanemisvaihde',
		stationShortCode: 'MN_V',
		stationUICCode: 98988,
		countryCode: 'FI',
		longitude: 21.541641,
		latitude: 61.576262
	},
	NNL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Naantali',
		stationShortCode: 'NNL',
		stationUICCode: 124,
		countryCode: 'FI',
		longitude: 22.040037,
		latitude: 60.469929
	},
	NRI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Naarajärvi',
		stationShortCode: 'NRI',
		stationUICCode: 895,
		countryCode: 'FI',
		longitude: 27.045557,
		latitude: 62.283143
	},
	NAL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Nakkila',
		stationShortCode: 'NAL',
		stationUICCode: 672,
		countryCode: 'FI',
		longitude: 21.969594,
		latitude: 61.387035
	},
	NSL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Nastola',
		stationShortCode: 'NSL',
		stationUICCode: 595,
		countryCode: 'FI',
		longitude: 25.935467,
		latitude: 60.935567
	},
	NMP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niemenpää',
		stationShortCode: 'NMP',
		stationUICCode: 1185,
		countryCode: 'FI',
		longitude: 23.92106,
		latitude: 66.165558
	},
	NII: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Niinimaa',
		stationShortCode: 'NII',
		stationUICCode: 285,
		countryCode: 'FI',
		longitude: 23.420637,
		latitude: 62.642246
	},
	NMÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niinimäki',
		stationShortCode: 'NMÄ',
		stationUICCode: 1324,
		countryCode: 'FI',
		longitude: 26.384374,
		latitude: 60.877915
	},
	NNS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niinisalo',
		stationShortCode: 'NNS',
		stationUICCode: 227,
		countryCode: 'FI',
		longitude: 22.481919,
		latitude: 61.844661
	},
	NRL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niirala',
		stationShortCode: 'NRL',
		stationUICCode: 446,
		countryCode: 'FI',
		longitude: 30.600268,
		latitude: 62.175021
	},
	NRLR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niirala-raja',
		stationShortCode: 'NRLR',
		stationUICCode: 445,
		countryCode: 'FI',
		longitude: 30.632051,
		latitude: 62.170426
	},
	NTH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niittylahti',
		stationShortCode: 'NTH',
		stationUICCode: 917,
		countryCode: 'FI',
		longitude: 29.845911,
		latitude: 62.51221
	},
	NLÄ: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Nikkilä',
		stationShortCode: 'NLÄ',
		stationUICCode: 22,
		countryCode: 'FI',
		longitude: 25.26654,
		latitude: 60.38237
	},
	NSK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Niska',
		stationShortCode: 'NSK',
		stationUICCode: 1353,
		countryCode: 'FI',
		longitude: 26.533759,
		latitude: 64.637367
	},
	NVL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Nivala',
		stationShortCode: 'NVL',
		stationUICCode: 328,
		countryCode: 'FI',
		longitude: 24.960768,
		latitude: 63.936389
	},
	NOA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Nokia',
		stationShortCode: 'NOA',
		stationUICCode: 181,
		countryCode: 'FI',
		longitude: 23.49917,
		latitude: 61.481059
	},
	NM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Nummela',
		stationShortCode: 'NM',
		stationUICCode: 84,
		countryCode: 'FI',
		longitude: 24.316922,
		latitude: 60.328751
	},
	NUA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Nuojua',
		stationShortCode: 'NUA',
		stationUICCode: 1361,
		countryCode: 'FI',
		longitude: 26.687556,
		latitude: 64.568518
	},
	NRM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Nurmes',
		stationShortCode: 'NRM',
		stationUICCode: 472,
		countryCode: 'FI',
		longitude: 29.137234,
		latitude: 63.541078
	},
	NÄR: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Närpiö',
		stationShortCode: 'NÄR',
		stationUICCode: 268,
		countryCode: 'FI',
		longitude: 21.363959,
		latitude: 62.468168
	},
	OHM: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Ohenmäki',
		stationShortCode: 'OHM',
		stationUICCode: 1190,
		countryCode: 'FI',
		longitude: 27.266604,
		latitude: 63.494989
	},
	OI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Oitti',
		stationShortCode: 'OI',
		stationUICCode: 92,
		countryCode: 'FI',
		longitude: 25.021316,
		latitude: 60.789806
	},
	OLLI: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Olli',
		stationShortCode: 'OLLI',
		stationUICCode: 570,
		countryCode: 'FI',
		longitude: 25.374228,
		latitude: 60.382804
	},
	ONT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Onttola',
		stationShortCode: 'ONT',
		stationUICCode: 443,
		countryCode: 'FI',
		longitude: 29.700477,
		latitude: 62.635524
	},
	OM: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Orimattila',
		stationShortCode: 'OM',
		stationUICCode: 109,
		countryCode: 'FI',
		longitude: 25.748738,
		latitude: 60.814493
	},
	OV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Orivesi',
		stationShortCode: 'OV',
		stationUICCode: 190,
		countryCode: 'FI',
		longitude: 24.368047,
		latitude: 61.650095
	},
	OVK: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Orivesi keskusta',
		stationShortCode: 'OVK',
		stationUICCode: 1316,
		countryCode: 'FI',
		longitude: 24.369838,
		latitude: 61.673906
	},
	OTM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Otanmäki',
		stationShortCode: 'OTM',
		stationUICCode: 385,
		countryCode: 'FI',
		longitude: 27.092351,
		latitude: 64.112027
	},
	OT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Otava',
		stationShortCode: 'OT',
		stationUICCode: 545,
		countryCode: 'FI',
		longitude: 27.071576,
		latitude: 61.640827
	},
	OU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Oulainen',
		stationShortCode: 'OU',
		stationUICCode: 322,
		countryCode: 'FI',
		longitude: 24.82098,
		latitude: 64.269509
	},
	OL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Oulu',
		stationShortCode: 'OL',
		stationUICCode: 370,
		countryCode: 'FI',
		longitude: 25.486121,
		latitude: 65.012409
	},
	NOK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Oulu Nokela',
		stationShortCode: 'NOK',
		stationUICCode: 1195,
		countryCode: 'FI',
		longitude: 25.476067,
		latitude: 64.988959
	},
	ORI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Oulu Oritkari',
		stationShortCode: 'ORI',
		stationUICCode: 1196,
		countryCode: 'FI',
		longitude: 25.452448,
		latitude: 64.98925
	},
	OLT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Oulu tavara',
		stationShortCode: 'OLT',
		stationUICCode: 1197,
		countryCode: 'FI',
		longitude: 25.470291,
		latitude: 65.000913
	},
	TUA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Oulu Tuira',
		stationShortCode: 'TUA',
		stationUICCode: 339,
		countryCode: 'FI',
		longitude: 25.474942,
		latitude: 65.02871
	},
	OLK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Oulunkylä',
		stationShortCode: 'OLK',
		stationUICCode: 15,
		countryCode: 'FI',
		longitude: 24.967676,
		latitude: 60.229
	},
	OLL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Oulunlahti',
		stationShortCode: 'OLL',
		stationUICCode: 1351,
		countryCode: 'FI',
		longitude: 25.504832,
		latitude: 64.962428
	},
	PTI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Paimenportti',
		stationShortCode: 'PTI',
		stationUICCode: 768,
		countryCode: 'FI',
		longitude: 26.919345,
		latitude: 60.475938
	},
	PO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Paimio',
		stationShortCode: 'PO',
		stationUICCode: 128,
		countryCode: 'FI',
		longitude: 22.685879,
		latitude: 60.459453
	},
	PLP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Palopuro',
		stationShortCode: 'PLP',
		stationUICCode: 562,
		countryCode: 'FI',
		longitude: 24.906231,
		latitude: 60.601471
	},
	PTO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Paltamo',
		stationShortCode: 'PTO',
		stationUICCode: 379,
		countryCode: 'FI',
		longitude: 27.82218,
		latitude: 64.40061
	},
	PAS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pankakoski',
		stationShortCode: 'PAS',
		stationUICCode: 935,
		countryCode: 'FI',
		longitude: 30.12173,
		latitude: 63.321127
	},
	PAR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Parikkala',
		stationShortCode: 'PAR',
		stationUICCode: 510,
		countryCode: 'FI',
		longitude: 29.502884,
		latitude: 61.55855
	},
	PKO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Parkano',
		stationShortCode: 'PKO',
		stationUICCode: 215,
		countryCode: 'FI',
		longitude: 23.078439,
		latitude: 62.051967
	},
	PRL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Parola',
		stationShortCode: 'PRL',
		stationUICCode: 49,
		countryCode: 'FI',
		longitude: 24.366497,
		latitude: 61.049922
	},
	PSL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pasila',
		stationShortCode: 'PSL',
		stationUICCode: 10,
		countryCode: 'FI',
		longitude: 24.933521,
		latitude: 60.198689
	},
	PAU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pasila autojuna-asema',
		stationShortCode: 'PAU',
		stationUICCode: 1328,
		countryCode: 'FI',
		longitude: 24.933169,
		latitude: 60.208303
	},
	PSLT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pasila tavara',
		stationShortCode: 'PSLT',
		stationUICCode: 1034,
		countryCode: 'FI',
		longitude: 24.934411,
		latitude: 60.212086
	},
	PTG: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Patokangas',
		stationShortCode: 'PTG',
		stationUICCode: 1346,
		countryCode: 'FI',
		longitude: 27.519974,
		latitude: 66.724902
	},
	PA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pelkola',
		stationShortCode: 'PA',
		stationUICCode: 1055,
		countryCode: 'FI',
		longitude: 28.813728,
		latitude: 61.13426
	},
	PEL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pello',
		stationShortCode: 'PEL',
		stationUICCode: 356,
		countryCode: 'FI',
		longitude: 23.993374,
		latitude: 66.78466
	},
	PMI: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Peltosalmi',
		stationShortCode: 'PMI',
		stationUICCode: 882,
		countryCode: 'FI',
		longitude: 27.246161,
		latitude: 63.520846
	},
	PSJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Peräseinäjoki',
		stationShortCode: 'PSJ',
		stationUICCode: 687,
		countryCode: 'FI',
		longitude: 22.941988,
		latitude: 62.549545
	},
	PSK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pesiökylä',
		stationShortCode: 'PSK',
		stationUICCode: 393,
		countryCode: 'FI',
		longitude: 28.569552,
		latitude: 64.926213
	},
	PRK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Petroskoi / Petrozavodsk',
		stationShortCode: 'PRK',
		stationUICCode: 1000,
		countryCode: 'RU',
		longitude: 32.176808,
		latitude: 62.11698
	},
	PVI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Petäjävesi',
		stationShortCode: 'PVI',
		stationUICCode: 237,
		countryCode: 'FI',
		longitude: 25.189337,
		latitude: 62.256974
	},
	PM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pieksämäki',
		stationShortCode: 'PM',
		stationUICCode: 400,
		countryCode: 'FI',
		longitude: 27.16753,
		latitude: 62.301253
	},
	PMLA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pieksämäki lajittelu',
		stationShortCode: 'PMLA',
		stationUICCode: 1210,
		countryCode: 'FI',
		longitude: 27.175321,
		latitude: 62.324528
	},
	PMT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pieksämäki tavara',
		stationShortCode: 'PMT',
		stationUICCode: 1211,
		countryCode: 'FI',
		longitude: 27.182414,
		latitude: 62.335855
	},
	TMU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pieksämäki Temu',
		stationShortCode: 'TMU',
		stationUICCode: 1212,
		countryCode: 'FI',
		longitude: 27.169853,
		latitude: 62.31317
	},
	PTR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pietari_(Finljandski)',
		stationShortCode: 'PTR',
		stationUICCode: 3820,
		countryCode: 'RU',
		longitude: 30.356308,
		latitude: 59.957131
	},
	PTL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pietari_(Ladozhski)',
		stationShortCode: 'PTL',
		stationUICCode: 3181,
		countryCode: 'RU',
		longitude: 30.443925,
		latitude: 59.9311424
	},
	PTS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pietarsaari',
		stationShortCode: 'PTS',
		stationUICCode: 306,
		countryCode: 'FI',
		longitude: 22.714689,
		latitude: 63.674326
	},
	PH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pihlajavesi',
		stationShortCode: 'PH',
		stationUICCode: 261,
		countryCode: 'FI',
		longitude: 24.395608,
		latitude: 62.346234
	},
	PP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pihtipudas',
		stationShortCode: 'PP',
		stationUICCode: 258,
		countryCode: 'FI',
		longitude: 25.556278,
		latitude: 63.371806
	},
	PIK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Piikkiö',
		stationShortCode: 'PIK',
		stationUICCode: 127,
		countryCode: 'FI',
		longitude: 22.51586,
		latitude: 60.423105
	},
	PKL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pikkarala',
		stationShortCode: 'PKL',
		stationUICCode: 819,
		countryCode: 'FI',
		longitude: 25.754062,
		latitude: 64.912694
	},
	PIO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pitkäkallio',
		stationShortCode: 'PIO',
		stationUICCode: 1358,
		countryCode: 'FI',
		longitude: 26.792637,
		latitude: 60.765446
	},
	PTK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pitkämäki',
		stationShortCode: 'PTK',
		stationUICCode: 1350,
		countryCode: 'FI',
		longitude: 29.060715,
		latitude: 63.570689
	},
	PJM: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Pitäjänmäki',
		stationShortCode: 'PJM',
		stationUICCode: 69,
		countryCode: 'FI',
		longitude: 24.859649,
		latitude: 60.223412
	},
	PKU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pohjankuru',
		stationShortCode: 'PKU',
		stationUICCode: 59,
		countryCode: 'FI',
		longitude: 23.551872,
		latitude: 60.098215
	},
	POH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Pohjois-Haaga',
		stationShortCode: 'POH',
		stationUICCode: 657,
		countryCode: 'FI',
		longitude: 24.883319,
		latitude: 60.230156
	},
	PLU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pohjois-Louko',
		stationShortCode: 'PLU',
		stationUICCode: 1214,
		countryCode: 'FI',
		longitude: 22.941522,
		latitude: 62.646837
	},
	PKK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Poikkeus',
		stationShortCode: 'PKK',
		stationUICCode: 1216,
		countryCode: 'FI',
		longitude: 23.137954,
		latitude: 61.989112
	},
	POI: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Poiksilta',
		stationShortCode: 'POI',
		stationUICCode: 965,
		countryCode: 'FI',
		longitude: 29.741895,
		latitude: 61.790643
	},
	PRI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pori',
		stationShortCode: 'PRI',
		stationUICCode: 220,
		countryCode: 'FI',
		longitude: 21.786607,
		latitude: 61.477212
	},
	PRV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Porvoo',
		stationShortCode: 'PRV',
		stationUICCode: 23,
		countryCode: 'FI',
		longitude: 25.648462,
		latitude: 60.396602
	},
	PUS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Puhos',
		stationShortCode: 'PUS',
		stationUICCode: 919,
		countryCode: 'FI',
		longitude: 29.976082,
		latitude: 62.088594
	},
	PLA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Puistola',
		stationShortCode: 'PLA',
		stationUICCode: 553,
		countryCode: 'FI',
		longitude: 25.036683,
		latitude: 60.276313
	},
	PMK: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Pukinmäki',
		stationShortCode: 'PMK',
		stationUICCode: 551,
		countryCode: 'FI',
		longitude: 24.993288,
		latitude: 60.242216
	},
	PL: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pulsa',
		stationShortCode: 'PL',
		stationUICCode: 1217,
		countryCode: 'FI',
		longitude: 27.972716,
		latitude: 60.927309
	},
	PUN: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Punkaharju',
		stationShortCode: 'PUN',
		stationUICCode: 517,
		countryCode: 'FI',
		longitude: 29.382354,
		latitude: 61.761151
	},
	PUR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Purola',
		stationShortCode: 'PUR',
		stationUICCode: 564,
		countryCode: 'FI',
		longitude: 25.050225,
		latitude: 60.500329
	},
	PYK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pyhäkumpu',
		stationShortCode: 'PYK',
		stationUICCode: 757,
		countryCode: 'FI',
		longitude: 26.042336,
		latitude: 63.662046
	},
	PYE: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Pyhäkumpu erkanemisvaihde',
		stationShortCode: 'PYE',
		stationUICCode: 1218,
		countryCode: 'FI',
		longitude: 26.030169,
		latitude: 63.677555
	},
	PHÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pyhäsalmi',
		stationShortCode: 'PHÄ',
		stationUICCode: 331,
		countryCode: 'FI',
		longitude: 25.982615,
		latitude: 63.682935
	},
	PNÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pännäinen',
		stationShortCode: 'PNÄ',
		stationUICCode: 305,
		countryCode: 'FI',
		longitude: 22.790363,
		latitude: 63.595382
	},
	R855: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Pännäinen (R855)',
		stationShortCode: 'R855',
		stationUICCode: 98991,
		countryCode: 'FI',
		longitude: 22.777103,
		latitude: 63.592508
	},
	PKY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Pääskylahti',
		stationShortCode: 'PKY',
		stationUICCode: 519,
		countryCode: 'FI',
		longitude: 28.924534,
		latitude: 61.862291
	},
	RHE: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Raahe',
		stationShortCode: 'RHE',
		stationUICCode: 335,
		countryCode: 'FI',
		longitude: 24.490632,
		latitude: 64.683364
	},
	RPO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Raippo',
		stationShortCode: 'RPO',
		stationUICCode: 490,
		countryCode: 'FI',
		longitude: 28.10607,
		latitude: 60.912094
	},
	RAI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Raisio',
		stationShortCode: 'RAI',
		stationUICCode: 125,
		countryCode: 'FI',
		longitude: 22.130194,
		latitude: 60.485475
	},
	RM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rajamäki',
		stationShortCode: 'RM',
		stationUICCode: 88,
		countryCode: 'FI',
		longitude: 24.761636,
		latitude: 60.532706
	},
	RJP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rajaperkiö',
		stationShortCode: 'RJP',
		stationUICCode: 1220,
		countryCode: 'FI',
		longitude: 23.013344,
		latitude: 63.036254
	},
	RMI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rantasalmi',
		stationShortCode: 'RMI',
		stationUICCode: 524,
		countryCode: 'FI',
		longitude: 28.276594,
		latitude: 62.014348
	},
	RAS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rasinsuo',
		stationShortCode: 'RAS',
		stationUICCode: 1222,
		countryCode: 'FI',
		longitude: 27.892136,
		latitude: 60.97619
	},
	RLÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ratikylä',
		stationShortCode: 'RLÄ',
		stationUICCode: 596,
		countryCode: 'FI',
		longitude: 23.011184,
		latitude: 62.245426
	},
	RAH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rauha',
		stationShortCode: 'RAH',
		stationUICCode: 501,
		countryCode: 'FI',
		longitude: 28.687578,
		latitude: 61.178295
	},
	RHL: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Rauhalahti',
		stationShortCode: 'RHL',
		stationUICCode: 1225,
		countryCode: 'FI',
		longitude: 25.801006,
		latitude: 62.239957
	},
	RMA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rauma',
		stationShortCode: 'RMA',
		stationUICCode: 165,
		countryCode: 'FI',
		longitude: 21.492431,
		latitude: 61.132361
	},
	RIO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Raunio',
		stationShortCode: 'RIO',
		stationUICCode: 1227,
		countryCode: 'FI',
		longitude: 22.955164,
		latitude: 63.171521
	},
	RAT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rautaruukki',
		stationShortCode: 'RAT',
		stationUICCode: 750,
		countryCode: 'FI',
		longitude: 24.443464,
		latitude: 64.658708
	},
	RJÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Rautjärvi',
		stationShortCode: 'RJÄ',
		stationUICCode: 506,
		countryCode: 'FI',
		longitude: 29.085136,
		latitude: 61.300812
	},
	RPH: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Rautpohja',
		stationShortCode: 'RPH',
		stationUICCode: 1232,
		countryCode: 'FI',
		longitude: 25.690392,
		latitude: 62.232539
	},
	RKL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Rekola',
		stationShortCode: 'RKL',
		stationUICCode: 554,
		countryCode: 'FI',
		longitude: 25.068666,
		latitude: 60.332871
	},
	REE: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Retretti',
		stationShortCode: 'REE',
		stationUICCode: 793,
		countryCode: 'FI',
		longitude: 29.294294,
		latitude: 61.803308
	},
	R060: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Riihimäki (R060)',
		stationShortCode: 'R060',
		stationUICCode: 98999,
		countryCode: 'FI',
		longitude: 24.786983,
		latitude: 60.743504
	},
	R702: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Riihimäki (R702)',
		stationShortCode: 'R702',
		stationUICCode: 98998,
		countryCode: 'FI',
		longitude: 24.784822,
		latitude: 60.759175
	},
	ARP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Riihimäki Arolampi',
		stationShortCode: 'ARP',
		stationUICCode: 1235,
		countryCode: 'FI',
		longitude: 24.818591,
		latitude: 60.697135
	},
	RI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Riihimäki',
		stationShortCode: 'RI',
		stationUICCode: 40,
		countryCode: 'FI',
		longitude: 24.781241,
		latitude: 60.736078
	},
	RILA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Riihimäki lajittelu',
		stationShortCode: 'RILA',
		stationUICCode: 1238,
		countryCode: 'FI',
		longitude: 24.792909,
		latitude: 60.725385
	},
	RIT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Riihimäki tavara',
		stationShortCode: 'RIT',
		stationUICCode: 1240,
		countryCode: 'FI',
		longitude: 24.802312,
		latitude: 60.714716
	},
	RJR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Riijärvi',
		stationShortCode: 'RJR',
		stationUICCode: 1327,
		countryCode: 'FI',
		longitude: 22.66527,
		latitude: 63.465864
	},
	RPA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Riippa',
		stationShortCode: 'RPA',
		stationUICCode: 747,
		countryCode: 'FI',
		longitude: 23.637151,
		latitude: 63.868454
	},
	RST: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ristiina',
		stationShortCode: 'RST',
		stationUICCode: 770,
		countryCode: 'FI',
		longitude: 27.264338,
		latitude: 61.461611
	},
	RJV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ristijärvi',
		stationShortCode: 'RJV',
		stationUICCode: 391,
		countryCode: 'FI',
		longitude: 28.18586,
		latitude: 64.488355
	},
	ROI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Rovaniemi',
		stationShortCode: 'ROI',
		stationUICCode: 364,
		countryCode: 'FI',
		longitude: 25.705329,
		latitude: 66.497675
	},
	RHA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ruha',
		stationShortCode: 'RHA',
		stationUICCode: 742,
		countryCode: 'FI',
		longitude: 22.978534,
		latitude: 62.887473
	},
	RNN: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Runni',
		stationShortCode: 'RNN',
		stationUICCode: 886,
		countryCode: 'FI',
		longitude: 26.886487,
		latitude: 63.602052
	},
	RSU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ruokosuo',
		stationShortCode: 'RSU',
		stationUICCode: 1342,
		countryCode: 'FI',
		longitude: 27.740113,
		latitude: 63.09744
	},
	RKI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Ruukki',
		stationShortCode: 'RKI',
		stationUICCode: 337,
		countryCode: 'FI',
		longitude: 25.0982,
		latitude: 64.660373
	},
	RSM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ruusumäki',
		stationShortCode: 'RSM',
		stationUICCode: 1338,
		countryCode: 'FI',
		longitude: 24.878314,
		latitude: 60.31566
	},
	RY: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Ryttylä',
		stationShortCode: 'RY',
		stationUICCode: 42,
		countryCode: 'FI',
		longitude: 24.758186,
		latitude: 60.818048
	},
	RÖY: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Röyttä',
		stationShortCode: 'RÖY',
		stationUICCode: 833,
		countryCode: 'FI',
		longitude: 24.162896,
		latitude: 65.765795
	},
	SAA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Saakoski',
		stationShortCode: 'SAA',
		stationUICCode: 668,
		countryCode: 'FI',
		longitude: 25.410596,
		latitude: 61.990369
	},
	SR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Saari',
		stationShortCode: 'SR',
		stationUICCode: 964,
		countryCode: 'FI',
		longitude: 29.660865,
		latitude: 61.695058
	},
	SRJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Saarijärvi',
		stationShortCode: 'SRJ',
		stationUICCode: 254,
		countryCode: 'FI',
		longitude: 25.283095,
		latitude: 62.700076
	},
	SLN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Salminen',
		stationShortCode: 'SLN',
		stationUICCode: 405,
		countryCode: 'FI',
		longitude: 27.286121,
		latitude: 62.676239
	},
	SLO: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Salo',
		stationShortCode: 'SLO',
		stationUICCode: 55,
		countryCode: 'FI',
		longitude: 23.121448,
		latitude: 60.384777
	},
	SAM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sammalisto',
		stationShortCode: 'SAM',
		stationUICCode: 1246,
		countryCode: 'FI',
		longitude: 24.78372,
		latitude: 60.763711
	},
	STA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Santala',
		stationShortCode: 'STA',
		stationUICCode: 827,
		countryCode: 'FI',
		longitude: 23.121052,
		latitude: 59.875008
	},
	SAU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Saunakallio',
		stationShortCode: 'SAU',
		stationUICCode: 806,
		countryCode: 'FI',
		longitude: 25.065568,
		latitude: 60.487305
	},
	SMÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Saunamäki',
		stationShortCode: 'SMÄ',
		stationUICCode: 1325,
		countryCode: 'FI',
		longitude: 26.519052,
		latitude: 60.852337
	},
	SAV: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Savio',
		stationShortCode: 'SAV',
		stationUICCode: 555,
		countryCode: 'FI',
		longitude: 25.097803,
		latitude: 60.381296
	},
	SL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Savonlinna',
		stationShortCode: 'SL',
		stationUICCode: 521,
		countryCode: 'FI',
		longitude: 28.888266,
		latitude: 61.8689
	},
	SK: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Seinäjoki',
		stationShortCode: 'SK',
		stationUICCode: 280,
		countryCode: 'FI',
		longitude: 22.844217,
		latitude: 62.792016
	},
	RLA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Seinäjoki Rahkola',
		stationShortCode: 'RLA',
		stationUICCode: 1362,
		countryCode: 'FI',
		longitude: 22.91748,
		latitude: 62.765005
	},
	SKT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Seinäjoki tavara',
		stationShortCode: 'SKT',
		stationUICCode: 1252,
		countryCode: 'FI',
		longitude: 22.866289,
		latitude: 62.784847
	},
	SPÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Selänpää',
		stationShortCode: 'SPÄ',
		stationUICCode: 539,
		countryCode: 'FI',
		longitude: 26.714088,
		latitude: 61.007729
	},
	SPJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sieppijärvi',
		stationShortCode: 'SPJ',
		stationUICCode: 796,
		countryCode: 'FI',
		longitude: 23.867383,
		latitude: 67.159514
	},
	SVI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sievi',
		stationShortCode: 'SVI',
		stationUICCode: 319,
		countryCode: 'FI',
		longitude: 24.278697,
		latitude: 63.978137
	},
	SKÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Siikamäki',
		stationShortCode: 'SKÄ',
		stationUICCode: 429,
		countryCode: 'FI',
		longitude: 27.40773,
		latitude: 62.289158
	},
	SIJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Siilinjärvi',
		stationShortCode: 'SIJ',
		stationUICCode: 413,
		countryCode: 'FI',
		longitude: 27.666561,
		latitude: 63.074953
	},
	SIM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Simo',
		stationShortCode: 'SIM',
		stationUICCode: 346,
		countryCode: 'FI',
		longitude: 25.060752,
		latitude: 65.663135
	},
	SPL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Simpele',
		stationShortCode: 'SPL',
		stationUICCode: 507,
		countryCode: 'FI',
		longitude: 29.371696,
		latitude: 61.424787
	},
	SIP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sipilä',
		stationShortCode: 'SIP',
		stationUICCode: 1254,
		countryCode: 'FI',
		longitude: 25.420346,
		latitude: 60.711122
	},
	STÖ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sisättö',
		stationShortCode: 'STÖ',
		stationUICCode: 1257,
		countryCode: 'FI',
		longitude: 23.310976,
		latitude: 61.838125
	},
	STI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Siuntio',
		stationShortCode: 'STI',
		stationUICCode: 576,
		countryCode: 'FI',
		longitude: 24.221671,
		latitude: 60.140648
	},
	SIU: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Siuro',
		stationShortCode: 'SIU',
		stationUICCode: 179,
		countryCode: 'FI',
		longitude: 23.33911,
		latitude: 61.47445
	},
	SGY: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Skogby',
		stationShortCode: 'SGY',
		stationUICCode: 817,
		countryCode: 'FI',
		longitude: 23.312403,
		latitude: 59.926668
	},
	SLD: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sköldvik',
		stationShortCode: 'SLD',
		stationUICCode: 560,
		countryCode: 'FI',
		longitude: 25.481846,
		latitude: 60.305964
	},
	SOA: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Soinlahti',
		stationShortCode: 'SOA',
		stationUICCode: 422,
		countryCode: 'FI',
		longitude: 27.204458,
		latitude: 63.634206
	},
	SOR: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Sorsasalo',
		stationShortCode: 'SOR',
		stationUICCode: 870,
		countryCode: 'FI',
		longitude: 27.68315,
		latitude: 62.953371
	},
	SKV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Sukeva',
		stationShortCode: 'SKV',
		stationUICCode: 424,
		countryCode: 'FI',
		longitude: 27.422313,
		latitude: 63.864618
	},
	SUO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Suolahti',
		stationShortCode: 'SUO',
		stationUICCode: 251,
		countryCode: 'FI',
		longitude: 25.851545,
		latitude: 62.561352
	},
	SNJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Suonenjoki',
		stationShortCode: 'SNJ',
		stationUICCode: 404,
		countryCode: 'FI',
		longitude: 27.124495,
		latitude: 62.623707
	},
	SNM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Suoniemi',
		stationShortCode: 'SNM',
		stationUICCode: 638,
		countryCode: 'FI',
		longitude: 23.210006,
		latitude: 61.465246
	},
	STG: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Svetogorsk',
		stationShortCode: 'STG',
		stationUICCode: 2190,
		countryCode: 'RU',
		longitude: 28.847194,
		latitude: 61.11705
	},
	SYR: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Syrjä',
		stationShortCode: 'SYR',
		stationUICCode: 435,
		countryCode: 'FI',
		longitude: 28.366542,
		latitude: 62.356168
	},
	SKI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Syrjämäki',
		stationShortCode: 'SKI',
		stationUICCode: 1265,
		countryCode: 'FI',
		longitude: 22.912391,
		latitude: 62.756156
	},
	SMJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sysmäjärvi',
		stationShortCode: 'SMJ',
		stationUICCode: 912,
		countryCode: 'FI',
		longitude: 29.060797,
		latitude: 62.716898
	},
	SÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Säkäniemi',
		stationShortCode: 'SÄ',
		stationUICCode: 918,
		countryCode: 'FI',
		longitude: 30.120915,
		latitude: 62.317676
	},
	SKM: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Sänkimäki',
		stationShortCode: 'SKM',
		stationUICCode: 872,
		countryCode: 'FI',
		longitude: 27.874879,
		latitude: 63.15085
	},
	SJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Sääksjärvi',
		stationShortCode: 'SJ',
		stationUICCode: 157,
		countryCode: 'FI',
		longitude: 23.752219,
		latitude: 61.418654
	},
	TA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Taavetti',
		stationShortCode: 'TA',
		stationUICCode: 486,
		countryCode: 'FI',
		longitude: 27.559584,
		latitude: 60.913077
	},
	TKO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tahkoluoto',
		stationShortCode: 'TKO',
		stationUICCode: 702,
		countryCode: 'FI',
		longitude: 21.417336,
		latitude: 61.633918
	},
	TE: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Taipale',
		stationShortCode: 'TE',
		stationUICCode: 1268,
		countryCode: 'FI',
		longitude: 27.311786,
		latitude: 63.459474
	},
	TV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Talviainen',
		stationShortCode: 'TV',
		stationUICCode: 1270,
		countryCode: 'FI',
		longitude: 24.658868,
		latitude: 61.724742
	},
	TLV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Talvivaara',
		stationShortCode: 'TLV',
		stationUICCode: 1323,
		countryCode: 'FI',
		longitude: 27.995425,
		latitude: 63.979256
	},
	TMS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tammisaari',
		stationShortCode: 'TMS',
		stationUICCode: 76,
		countryCode: 'FI',
		longitude: 23.443501,
		latitude: 59.979553
	},
	TPE: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Tampere',
		stationShortCode: 'TPE',
		stationUICCode: 160,
		countryCode: 'FI',
		longitude: 23.773454,
		latitude: 61.498236
	},
	JVS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tampere Järvensivu',
		stationShortCode: 'JVS',
		stationUICCode: 1272,
		countryCode: 'FI',
		longitude: 23.785189,
		latitude: 61.491461
	},
	TPET: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tampere tavara',
		stationShortCode: 'TPET',
		stationUICCode: 1273,
		countryCode: 'FI',
		longitude: 23.763974,
		latitude: 61.469888
	},
	VKA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tampere Viinikka',
		stationShortCode: 'VKA',
		stationUICCode: 1274,
		countryCode: 'FI',
		longitude: 23.773542,
		latitude: 61.480331
	},
	TNA: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tapanila',
		stationShortCode: 'TNA',
		stationUICCode: 552,
		countryCode: 'FI',
		longitude: 25.030033,
		latitude: 60.2639
	},
	TAP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tapavainola',
		stationShortCode: 'TAP',
		stationUICCode: 1276,
		countryCode: 'FI',
		longitude: 28.08938,
		latitude: 61.017354
	},
	TSL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tavastila',
		stationShortCode: 'TSL',
		stationUICCode: 837,
		countryCode: 'FI',
		longitude: 26.954279,
		latitude: 60.572959
	},
	TK: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tervajoki',
		stationShortCode: 'TK',
		stationUICCode: 294,
		countryCode: 'FI',
		longitude: 22.171462,
		latitude: 63.000773
	},
	TRV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Tervola',
		stationShortCode: 'TRV',
		stationUICCode: 361,
		countryCode: 'FI',
		longitude: 24.772291,
		latitude: 66.081811
	},
	TSO: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tesoma',
		stationShortCode: 'TSO',
		stationUICCode: 1359,
		countryCode: 'FI',
		longitude: 23.630271,
		latitude: 61.503363
	},
	TUV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Teuva',
		stationShortCode: 'TUV',
		stationUICCode: 271,
		countryCode: 'FI',
		longitude: 21.742287,
		latitude: 62.474956
	},
	TKK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tikkala',
		stationShortCode: 'TKK',
		stationUICCode: 916,
		countryCode: 'FI',
		longitude: 30.083633,
		latitude: 62.364981
	},
	TKP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tikkaperä',
		stationShortCode: 'TKP',
		stationUICCode: 1335,
		countryCode: 'FI',
		longitude: 25.291811,
		latitude: 64.771091
	},
	TKL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Tikkurila',
		stationShortCode: 'TKL',
		stationUICCode: 18,
		countryCode: 'FI',
		longitude: 25.044055,
		latitude: 60.292166
	},
	TOH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tohmajärvi',
		stationShortCode: 'TOH',
		stationUICCode: 448,
		countryCode: 'FI',
		longitude: 30.356148,
		latitude: 62.243484
	},
	TL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Toijala',
		stationShortCode: 'TL',
		stationUICCode: 150,
		countryCode: 'FI',
		longitude: 23.860905,
		latitude: 61.170611
	},
	TOI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Toivala',
		stationShortCode: 'TOI',
		stationUICCode: 412,
		countryCode: 'FI',
		longitude: 27.723588,
		latitude: 62.996029
	},
	TOL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tolsa',
		stationShortCode: 'TOL',
		stationUICCode: 830,
		countryCode: 'FI',
		longitude: 24.472724,
		latitude: 60.118558
	},
	TOM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tommola',
		stationShortCode: 'TOM',
		stationUICCode: 1280,
		countryCode: 'FI',
		longitude: 25.492176,
		latitude: 60.906703
	},
	TRK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Torkkeli',
		stationShortCode: 'TRK',
		stationUICCode: 1283,
		countryCode: 'FI',
		longitude: 24.548925,
		latitude: 61.70059
	},
	R742: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Tornio (R742)',
		stationShortCode: 'R742',
		stationUICCode: 98992,
		countryCode: 'FI',
		longitude: 24.170321,
		latitude: 65.854053
	},
	TOR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tornio',
		stationShortCode: 'TOR',
		stationUICCode: 351,
		countryCode: 'FI',
		longitude: 24.163844,
		latitude: 65.845798
	},
	TRI: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tornio-Itäinen',
		stationShortCode: 'TRI',
		stationUICCode: 1318,
		countryCode: 'FI',
		longitude: 24.18508,
		latitude: 65.850823
	},
	TRR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tornio-raja',
		stationShortCode: 'TRR',
		stationUICCode: 678,
		countryCode: 'FI',
		longitude: 24.150744,
		latitude: 65.827851
	},
	TRL: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tuomarila',
		stationShortCode: 'TRL',
		stationUICCode: 579,
		countryCode: 'FI',
		longitude: 24.681767,
		latitude: 60.20605
	},
	TJA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tuomioja',
		stationShortCode: 'TJA',
		stationUICCode: 336,
		countryCode: 'FI',
		longitude: 25.027911,
		latitude: 64.608277
	},
	R530: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Tuomioja (R530)',
		stationShortCode: 'R530',
		stationUICCode: 99994,
		countryCode: 'FI',
		longitude: 25.021967,
		latitude: 64.606205
	},
	TU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Turenki',
		stationShortCode: 'TU',
		stationUICCode: 44,
		countryCode: 'FI',
		longitude: 24.63865,
		latitude: 60.918387
	},
	TKU: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Turku',
		stationShortCode: 'TKU',
		stationUICCode: 130,
		countryCode: 'FI',
		longitude: 22.252945,
		latitude: 60.453985
	},
	TUS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Turku satama',
		stationShortCode: 'TUS',
		stationUICCode: 135,
		countryCode: 'FI',
		longitude: 22.226894,
		latitude: 60.434245
	},
	TKUT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Turku tavara',
		stationShortCode: 'TKUT',
		stationUICCode: 1285,
		countryCode: 'FI',
		longitude: 22.240471,
		latitude: 60.452001
	},
	TPV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Tuupovaara',
		stationShortCode: 'TPV',
		stationUICCode: 458,
		countryCode: 'FI',
		longitude: 30.558938,
		latitude: 62.523103
	},
	TUU: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Tuuri',
		stationShortCode: 'TUU',
		stationUICCode: 283,
		countryCode: 'FI',
		longitude: 23.722323,
		latitude: 62.605349
	},
	TVE: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Tver',
		stationShortCode: 'TVE',
		stationUICCode: 9999,
		countryCode: 'RU',
		longitude: 35.8928,
		latitude: 56.8352
	},
	TÖR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Törmä',
		stationShortCode: 'TÖR',
		stationUICCode: 1287,
		countryCode: 'FI',
		longitude: 24.625744,
		latitude: 65.89466
	},
	TRÄ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Törölä',
		stationShortCode: 'TRÄ',
		stationUICCode: 1290,
		countryCode: 'FI',
		longitude: 27.99051,
		latitude: 61.007817
	},
	UIM: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Uimaharju',
		stationShortCode: 'UIM',
		stationUICCode: 465,
		countryCode: 'FI',
		longitude: 30.241497,
		latitude: 62.912482
	},
	UR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Urjala',
		stationShortCode: 'UR',
		stationUICCode: 148,
		countryCode: 'FI',
		longitude: 23.626264,
		latitude: 61.0635
	},
	UTJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Utajärvi',
		stationShortCode: 'UTJ',
		stationUICCode: 376,
		countryCode: 'FI',
		longitude: 26.413565,
		latitude: 64.758926
	},
	UTI: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Utti',
		stationShortCode: 'UTI',
		stationUICCode: 484,
		countryCode: 'FI',
		longitude: 26.933289,
		latitude: 60.877673
	},
	UKP: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Uusikaupunki',
		stationShortCode: 'UKP',
		stationUICCode: 121,
		countryCode: 'FI',
		longitude: 21.425685,
		latitude: 60.797364
	},
	UKÄ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Uusikylä',
		stationShortCode: 'UKÄ',
		stationUICCode: 105,
		countryCode: 'FI',
		longitude: 25.993966,
		latitude: 60.927722
	},
	VKO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vaajakoski',
		stationShortCode: 'VKO',
		stationUICCode: 245,
		countryCode: 'FI',
		longitude: 25.879324,
		latitude: 62.247587
	},
	VAA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vaala',
		stationShortCode: 'VAA',
		stationUICCode: 377,
		countryCode: 'FI',
		longitude: 26.842702,
		latitude: 64.558015
	},
	VRA: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Vaarala',
		stationShortCode: 'VRA',
		stationUICCode: 807,
		countryCode: 'FI',
		longitude: 25.8801,
		latitude: 66.518098
	},
	VS: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vaasa',
		stationShortCode: 'VS',
		stationUICCode: 288,
		countryCode: 'FI',
		longitude: 21.621824,
		latitude: 63.097786
	},
	VJR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vahojärvi',
		stationShortCode: 'VJR',
		stationUICCode: 214,
		countryCode: 'FI',
		longitude: 23.232163,
		latitude: 61.913026
	},
	VNA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vainikkala',
		stationShortCode: 'VNA',
		stationUICCode: 492,
		countryCode: 'FI',
		longitude: 28.303201,
		latitude: 60.863835
	},
	VNAT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vainikkala tavara',
		stationShortCode: 'VNAT',
		stationUICCode: 1292,
		countryCode: 'FI',
		longitude: 28.285662,
		latitude: 60.86817
	},
	VNAR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vainikkala-raja',
		stationShortCode: 'VNAR',
		stationUICCode: 493,
		countryCode: 'FI',
		longitude: 28.337173,
		latitude: 60.855474
	},
	VMO: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Valimo',
		stationShortCode: 'VMO',
		stationUICCode: 847,
		countryCode: 'FI',
		longitude: 24.87583,
		latitude: 60.222028
	},
	VI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Valkeakoski',
		stationShortCode: 'VI',
		stationUICCode: 153,
		countryCode: 'FI',
		longitude: 24.017075,
		latitude: 61.273922
	},
	VSO: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Valkeasuo',
		stationShortCode: 'VSO',
		stationUICCode: 450,
		countryCode: 'FI',
		longitude: 30.163977,
		latitude: 62.304843
	},
	VLM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Valtimo',
		stationShortCode: 'VLM',
		stationUICCode: 475,
		countryCode: 'FI',
		longitude: 28.800862,
		latitude: 63.686406
	},
	VMA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vammala',
		stationShortCode: 'VMA',
		stationUICCode: 176,
		countryCode: 'FI',
		longitude: 22.887664,
		latitude: 61.349519
	},
	VTR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vanattara',
		stationShortCode: 'VTR',
		stationUICCode: 1295,
		countryCode: 'FI',
		longitude: 23.759537,
		latitude: 61.370713
	},
	VKS: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Vantaankoski',
		stationShortCode: 'VKS',
		stationUICCode: 839,
		countryCode: 'FI',
		longitude: 24.847966,
		latitude: 60.286119
	},
	VAR: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Varkaus',
		stationShortCode: 'VAR',
		stationUICCode: 432,
		countryCode: 'FI',
		longitude: 27.873415,
		latitude: 62.312389
	},
	VUS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vartius',
		stationShortCode: 'VUS',
		stationUICCode: 941,
		countryCode: 'FI',
		longitude: 29.94809,
		latitude: 64.540163
	},
	VUR: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vartius-raja',
		stationShortCode: 'VUR',
		stationUICCode: 949,
		countryCode: 'FI',
		longitude: 29.989741,
		latitude: 64.545906
	},
	VKH: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vasikkahaka',
		stationShortCode: 'VKH',
		stationUICCode: 1300,
		countryCode: 'FI',
		longitude: 24.524784,
		latitude: 60.146114
	},
	VSK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vaskiluoto',
		stationShortCode: 'VSK',
		stationUICCode: 291,
		countryCode: 'FI',
		longitude: 21.564228,
		latitude: 63.089086
	},
	VEH: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Vehkala',
		stationShortCode: 'VEH',
		stationUICCode: 1337,
		countryCode: 'FI',
		longitude: 24.843716,
		latitude: 60.295054
	},
	VKI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Venetmäki',
		stationShortCode: 'VKI',
		stationUICCode: 428,
		countryCode: 'FI',
		longitude: 26.752862,
		latitude: 62.309222
	},
	VN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vesanka',
		stationShortCode: 'VN',
		stationUICCode: 239,
		countryCode: 'FI',
		longitude: 25.557151,
		latitude: 62.269355
	},
	VK: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Viekki',
		stationShortCode: 'VK',
		stationUICCode: 471,
		countryCode: 'FI',
		longitude: 29.61174,
		latitude: 63.421549
	},
	VRM: {
		passengerTraffic: false,
		type: 'TURNOUT_IN_THE_OPEN_LINE',
		stationName: 'Vierumäki',
		stationShortCode: 'VRM',
		stationUICCode: 112,
		countryCode: 'FI',
		longitude: 25.932868,
		latitude: 61.101895
	},
	VTI: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vihanti',
		stationShortCode: 'VTI',
		stationUICCode: 334,
		countryCode: 'FI',
		longitude: 24.993624,
		latitude: 64.48451
	},
	VIH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vihtari',
		stationShortCode: 'VIH',
		stationUICCode: 438,
		countryCode: 'FI',
		longitude: 29.029282,
		latitude: 62.380739
	},
	VRI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vihtavuori',
		stationShortCode: 'VRI',
		stationUICCode: 248,
		countryCode: 'FI',
		longitude: 25.889739,
		latitude: 62.373612
	},
	VIA: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Viiala',
		stationShortCode: 'VIA',
		stationUICCode: 155,
		countryCode: 'FI',
		longitude: 23.770683,
		latitude: 61.211787
	},
	VNJ: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Viinijärvi',
		stationShortCode: 'VNJ',
		stationUICCode: 440,
		countryCode: 'FI',
		longitude: 29.237166,
		latitude: 62.641687
	},
	VYB: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Viipuri',
		stationShortCode: 'VYB',
		stationUICCode: 2000,
		countryCode: 'RU',
		longitude: 28.751409,
		latitude: 60.716073
	},
	VLH: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Villähde',
		stationShortCode: 'VLH',
		stationUICCode: 104,
		countryCode: 'FI',
		longitude: 25.833724,
		latitude: 60.946379
	},
	VLP: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vilppula',
		stationShortCode: 'VLP',
		stationUICCode: 196,
		countryCode: 'FI',
		longitude: 24.506956,
		latitude: 62.025888
	},
	VIN: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vinnilä',
		stationShortCode: 'VIN',
		stationUICCode: 1305,
		countryCode: 'FI',
		longitude: 24.110938,
		latitude: 61.099944
	},
	VMS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Virkamies',
		stationShortCode: 'VMS',
		stationUICCode: 1339,
		countryCode: 'FI',
		longitude: 24.963318,
		latitude: 60.310517
	},
	VT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Voltti',
		stationShortCode: 'VT',
		stationUICCode: 302,
		countryCode: 'FI',
		longitude: 22.824405,
		latitude: 63.286164
	},
	VHJ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vuohijärvi',
		stationShortCode: 'VHJ',
		stationUICCode: 541,
		countryCode: 'FI',
		longitude: 26.796227,
		latitude: 61.095852
	},
	VJO: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vuojoki',
		stationShortCode: 'VJO',
		stationUICCode: 1310,
		countryCode: 'FI',
		longitude: 21.709937,
		latitude: 61.179379
	},
	VKT: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vuokatti',
		stationShortCode: 'VKT',
		stationUICCode: 383,
		countryCode: 'FI',
		longitude: 28.273914,
		latitude: 64.14752
	},
	VSL: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Vuonislahti',
		stationShortCode: 'VSL',
		stationUICCode: 467,
		countryCode: 'FI',
		longitude: 29.99331,
		latitude: 63.152636
	},
	VNS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vuonos',
		stationShortCode: 'VNS',
		stationUICCode: 863,
		countryCode: 'FI',
		longitude: 29.080453,
		latitude: 62.756358
	},
	VSA: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Vuosaari',
		stationShortCode: 'VSA',
		stationUICCode: 1321,
		countryCode: 'FI',
		longitude: 25.167956,
		latitude: 60.227507
	},
	VRS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Värtsilä',
		stationShortCode: 'VRS',
		stationUICCode: 2410,
		countryCode: 'RU',
		longitude: 30.652785,
		latitude: 62.165755
	},
	YKST: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ykspihlaja tavara',
		stationShortCode: 'YKST',
		stationUICCode: 315,
		countryCode: 'FI',
		longitude: 23.083099,
		latitude: 63.838554
	},
	YKSV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ykspihlaja väliratapiha',
		stationShortCode: 'YKSV',
		stationUICCode: 1326,
		countryCode: 'FI',
		longitude: 23.058247,
		latitude: 63.850442
	},
	YST: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Ylistaro',
		stationShortCode: 'YST',
		stationUICCode: 296,
		countryCode: 'FI',
		longitude: 22.532729,
		latitude: 62.917801
	},
	YTR: {
		passengerTraffic: true,
		type: 'STOPPING_POINT',
		stationName: 'Ylitornio',
		stationShortCode: 'YTR',
		stationUICCode: 789,
		countryCode: 'FI',
		longitude: 23.682508,
		latitude: 66.324438
	},
	YLV: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ylivalli',
		stationShortCode: 'YLV',
		stationUICCode: 654,
		countryCode: 'FI',
		longitude: 22.958844,
		latitude: 62.402105
	},
	YV: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Ylivieska',
		stationShortCode: 'YV',
		stationUICCode: 320,
		countryCode: 'FI',
		longitude: 24.540593,
		latitude: 64.071898
	},
	YLK: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Yläkoski',
		stationShortCode: 'YLK',
		stationUICCode: 867,
		countryCode: 'FI',
		longitude: 27.085998,
		latitude: 62.644012
	},
	YLY: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ylämylly',
		stationShortCode: 'YLY',
		stationUICCode: 913,
		countryCode: 'FI',
		longitude: 29.564534,
		latitude: 62.620557
	},
	YLÖ: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ylöjärvi',
		stationShortCode: 'YLÖ',
		stationUICCode: 211,
		countryCode: 'FI',
		longitude: 23.58604,
		latitude: 61.556526
	},
	YPY: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ypykkävaara',
		stationShortCode: 'YPY',
		stationUICCode: 940,
		countryCode: 'FI',
		longitude: 29.474923,
		latitude: 64.479932
	},
	ÄS: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Äetsä',
		stationShortCode: 'ÄS',
		stationUICCode: 174,
		countryCode: 'FI',
		longitude: 22.706473,
		latitude: 61.296677
	},
	ÄHT: {
		passengerTraffic: true,
		type: 'STATION',
		stationName: 'Ähtäri',
		stationShortCode: 'ÄHT',
		stationUICCode: 265,
		countryCode: 'FI',
		longitude: 24.064036,
		latitude: 62.553265
	},
	ÄM: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Ämmänsaari',
		stationShortCode: 'ÄM',
		stationUICCode: 394,
		countryCode: 'FI',
		longitude: 28.890466,
		latitude: 64.887024
	},
	ÄKI: {
		passengerTraffic: false,
		type: 'STATION',
		stationName: 'Äänekoski',
		stationShortCode: 'ÄKI',
		stationUICCode: 252,
		countryCode: 'FI',
		longitude: 25.747629,
		latitude: 62.596862
	}
};

export default stations;
