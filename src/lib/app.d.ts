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

/*
 trainNumber: 1-99999 Info Junan numero. Esim junan “IC 59” junanumero on 59
Required departureDate: date Info Junan ensimmäisen lähdön päivämäärä Suomen ajassa
Required operatorUICCode: 1-9999 Info Junan operoiman operaattorin UIC-koodi
Required operatorShortCode: vr, vr-track, destia, … Info Lista operaattoreista löytyy täältä.
Required trainType: IC, P, S, …
Required trainCategory: lähiliikenne, kaukoliikenne, tavaraliikenne, …
Optional commuterLineID: Z, K, N….
Required runningCurrently: true/false Info Onko juna tällä hetkellä kulussa
Required cancelled: true/false Info Totta, jos junan peruminen on tehty 10 vuorokauden sisällä. Yli 10 vuorokautta sitten peruttuja junia ei palauteta rajapinnassa laisinkaan.
Required version: positive integer Info Versionumero, jossa juna on viimeksi muuttunut
Required timetableType: REGULAR tai ADHOC. Info Kertoo onko junan aikataulu haettu säännöllisenä (REGULAR) vai kiireellisenä yksittäistä päivää koskevana (ADHOC).
Required timetableAcceptanceDate: datetime. Info Ajanhetki jolloin viranomainen on hyväksynyt junan aikataulun.
Optional deleted: true,false Info Kertoo onko juna poistettu eli peruttu yli kymmenen päivää ennen lähtöä.
Required timeTableRows Info Kuvaa saapumisia ja lähtöjä liikennepaikoilta. Järjestetty reitin mukaiseen järjestykseen.
*/

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