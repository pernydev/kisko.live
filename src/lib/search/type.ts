
// This file has the goal of figuring out what the type of information is that we are searching for.

import traintypes from '$lib/traintypes';

export enum SearchType {
	TRAIN = 'train',
	STATION = 'station',
	TRAINTYPE = 'traintype',
	WAGON = 'wagon',
	INVALID = 'invalid'
}

/**
 * Provided a user input, this function will return the type of search that the user is trying to perform.
 * @param input The user input
 * @returns The type of search that the user is trying to perform
 */
export function getType(input: string): SearchType {
	const types = Object.keys(checkType);
    for (const type of types) {
		if (checkType[type](input)) {
            return type as SearchType;
		}
	}
	return SearchType.INVALID;
}

/**
 * This object contains functions that check if a given input is of a certain type.
 */
const checkType: Record<string, (input: string) => boolean> = {
	"train": (input: string) => {
		return /^\d+$/.test(input);
	},
	"traintype": (input: string) => {
		return traintypes.some((traintype) => {
			return traintype.name.toLowerCase() === input.toLowerCase();
		});
	},
	"wagon": () => {
		return false;
	},
	"invalid": () => {
		return false;
	},
	"station": () => {
		return true; // always try to search for a station
	},
};
