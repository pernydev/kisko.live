/* eslint-disable no-case-declarations */
import { searchForTrain } from "./train";
import { getType, SearchType } from "./type"

export type SearchResult = {
    type: SearchType;
    train?: Train;
    station?: Station;
}

export async function search(input: string): Promise<SearchResult[]> {
    const type = getType(input);
    console.log(type);
    switch (type) {
        case SearchType.TRAIN:
            const train = await searchForTrain(input);
            if (train === null) {
                console.error("Train not found");
                return [];
            }
            console.log(train);
            return [{ type: SearchType.TRAIN, train }];
        
        default:
            return [];
    }
}