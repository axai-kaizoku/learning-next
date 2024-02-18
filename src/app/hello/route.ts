export const dynamic = 'force-dynamic'; //default is 'auto'

export async function GET() {
	return Response.json({
		time: new Date().toTimeString(),
	});
}
