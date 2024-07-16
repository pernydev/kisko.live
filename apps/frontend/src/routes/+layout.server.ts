import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    return {
        nerdmode: cookies.get('nerdmode') === 'true'
    };
}) satisfies LayoutServerLoad;