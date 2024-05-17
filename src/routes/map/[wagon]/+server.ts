import type { RequestHandler } from './$types';

// "proxy"

export const GET: RequestHandler = async ({ params }) => {
	const resp = await fetch(
		`https://prod.wagonmap.prodvrfi.vrpublic.fi/images/v1.8.0/${params.wagon}`
	);
	const data = await resp.text();

	const recolor = data
		.replace(/#F2F2F2/g, '#09090B')
		.replace(/#FFF/g, '#09090B')
		.replace(/#1B50AF/g, '#FFF')
		.replace(/#1b50af/g, '#FFF')
        .replace(/#D5EEFA/g, 'none')
		.replace(/<circle stroke="#fff" stroke-width="2" fill="#f2f2f2"/g, '<circle stroke="none" stroke-width="2" fill="none"')
        

	return new Response(recolor, {
		headers: {
			'Content-Type': 'image/svg+xml'
		}
	});
};
