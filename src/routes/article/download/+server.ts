import fs from 'fs';

export async function GET({ url, setHeaders }) {
	let name;
	if (url.searchParams.get('sources')) {
		name = 'Quellen_Milan_Natalie_Gabi.pdf';
	} else {
		name = 'Leben-als-queere-Person_Milan_Natalie_Gabi.pdf';
	}
	let file = fs.readFileSync(`./src/assets/${name}`);
	setHeaders({
		'Content-type': 'application/pdf',
		'Content-Disposition': `attachment; filename="${name}"`
	});
	return new Response(file);
}
