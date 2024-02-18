import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	const headerList = headers();

	const theme = request.cookies.get('theme');
	cookies().set('XxxStock', '20');

	const auth = requestHeaders.get('Authorization');
	const auth2 = headerList.get('Authorization');
	console.log(cookies().get('XxxStock'));
	// console.log(theme);
	return new Response('<h1>Hell yeah!</h1>', {
		headers: {
			'Content-Type': 'text/html',
			'Set-Cookie': 'theme=dark',
		},
	});
}
