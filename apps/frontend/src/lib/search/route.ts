/* eslint-disable no-case-declarations */
/**
 * Parses a string in the format "from-to [date] [.flags]" and returns an object containing
 * the `from` location, the `to` location, the `date` (if present), and an array of `flags`.
 *
 * @param {string} input - The input string to be parsed.
 * @returns {{ from: string, to: string, date?: string, flags: string[] }} An object with the parsed components.
 * @throws Will throw an error if the input string does not match the expected format.
 */
function parseLocationString(input: string): { from: string, to: string, date?: string, flags: string[] } {
    const locationRegex = /^([a-zA-Z]+)-([a-zA-Z]+)/;
    const flagRegex = /\.(\w{1,2})/g;

    const locationMatch = input.match(locationRegex);

    if (!locationMatch) {
        throw new Error("The string does not match the expected format.");
    }

    const from = locationMatch[1];
    const to = locationMatch[2];

    let date: string | undefined;
    const flags: string[] = [];

    // Extract flags and other parts
    const parts = input.split(/\s+/);
    parts.forEach((part) => {
        if (flagRegex.test(part)) {
            // Reset regex lastIndex to start search from beginning for each part
            flagRegex.lastIndex = 0;
            let match;
            while ((match = flagRegex.exec(part)) !== null) {
                flags.push(match[1]);
            }
        } else if (!part.includes('-')) {
            date = part;
        }
    });

    return { from, to, date, flags };
}

const dateShortners: Record<string, string> = {
    t: 'today',
    tday: 'today',
    today: 'today',
    tmrw: 'tomorrow',
    tomorrow: 'tomorrow',
};

function parseDate(date: string): Date {
    const shortDate = (dateShortners[date.toLowerCase()]) as string | null;
    if (shortDate) {
        switch (shortDate) {
            case 'today':
                return new Date();
            case 'tomorrow':
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow;
        }
    }
    // date should be in one of the following formats: YYYY-MM-DD, DDMM or DD
    const yearMonthDay = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (yearMonthDay) {
        return new Date(`${yearMonthDay[1]}-${yearMonthDay[2]}-${yearMonthDay[3]}`);
    }
    const dayMonth = date.match(/^(\d{2})(\d{2})$/);
    if (dayMonth) {
        const today = new Date();
        const year = today.getFullYear();
        return new Date(`${year}-${dayMonth[2]}-${dayMonth[1]}`);
    }
    const day = date.match(/^(\d{2})$/);
    if (day) {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        return new Date(`${year}-${month}-${day[1]}`);
    }
    throw new Error('Invalid date format');
}

function stringifyDate(date: Date): string {
    // return date in format YYYY-MM-DD (month and day must be 2 digits)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export async function searchForRoute(input: string): Promise<VRJourneyOption[]> {
    const { from, to, date } = parseLocationString(input);
    const data = {
        arrivalStation: to.toUpperCase(),
        departureStation: from.toUpperCase(),
        departureDateTime: date ? stringifyDate(parseDate(date)) : stringifyDate(new Date()),
    }

    const res = await fetch(`/api/vr/route?${new URLSearchParams(data).toString()}`);
    if (!res.ok) {
        return [];
    }
    const routes = await res.json();
    return routes.data.searchJourney;
}