import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const query = `query searchJourney(
    $departureStation: String!,
    $arrivalStation: String!,
    $departureDateTime: DateTime!,
    $passengers: [PassengerInput!]!,
    $filters: [ConnectionFilter]! = [],
    $placeTypes: [PlaceType!]!,
    $bundleId: String,
    $companyId: String
  ) {
    searchJourney(
      departureStation: $departureStation,
      arrivalStation: $arrivalStation,
      departureDateTime: $departureDateTime,
      passengers: $passengers,
      filters: $filters,
      placeTypes: $placeTypes,
      bundleId: $bundleId,
      companyId: $companyId
    ) {
      ...JourneyOption
      __typename
    }
  }
  
  fragment JourneyOptionPassenger on JourneyOptionPassenger {
    type
    offers {
      legId
      product
      price
      discountCategory
      __typename
    }
    __typename
  }
  
  fragment JourneyOption on JourneyOption {
    id
    departureTime
    departureStation
    arrivalStation
    arrivalTime
    legs {
      ...JourneyOptionLeg
      __typename
    }
    totalPrice
    discount {
      discountPercentage
      ids
      __typename
    }
    error
    passengers {
      ...JourneyOptionPassenger
      __typename
    }
    availability {
      ...OptionAvailability
      __typename
    }
    highestLegTrainFill
    __typename
  }
  
  fragment ProductAttribute on ProductAttribute {
    name
    attribute
    availability
    __typename
  }
  
  fragment JourneyOptionLeg on JourneyOptionLeg {
    legKey
    trainNumber
    trainType
    trainAttributes
    type
    commercialLineIdentifier
    departureStation
    departureTime
    arrivalStation
    arrivalTime
    trainFillPercentage
    productAttributes {
      ...ProductAttribute
      __typename
    }
    __typename
  }
  
  fragment OptionAvailability on OptionAvailability {
    seatAvailability_v2
    accessibleSeatAvailability
    petSeatAvailability
    cabinAvailability
    petCabinAvailability
    accessibleCabinAvailability
    __typename
  }
  `;

export const GET: RequestHandler = async ({ request }) => {
	const data = new URLSearchParams(await request.url.split('?')[1]);
	if (!data?.get('departureStation') || !data?.get('arrivalStation') || !data?.get('departureDateTime')) {
		return json({ error: 'Invalid request' }, { status: 400 });
	}

	console.log(json);

	const body = JSON.stringify({
		operationName: 'searchJourney',
		variables: {
			filters: [],
			arrivalStation: data.get('arrivalStation'),
			departureDateTime: data.get('departureDateTime'),
			departureStation: data.get('departureStation'),
			passengers: [
				{
					key: '9f116a7c-2b9e-4483-90a8-1c006996cd1a',
					type: 'ADULT',
					wheelchair: false,
					vehicles: []
				}
			],
			placeTypes: ['SEAT', 'CABIN_BED']
		},
		query
	});
	const resp = await fetch('https://www.vr.fi/api/v7', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-US,en;q=0.6',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Linux"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'sec-gpc': '1',
			'x-bff-version': '2',
			'x-vr-requestid': '4301968b-e1cd-44cf-bd13-521a3020c315',
			'x-vr-sessionid': 'd401d595-0439-4b11-810d-554dda01324a'
		},
		referrer: 'https://www.vr.fi/',
		referrerPolicy: 'origin',
		body: body,
		method: 'POST',
		mode: 'cors',
		credentials: 'include'
	});

  const response = await resp.json();
  response.request = body;
	return new Response(JSON.stringify(response), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
