import { error, json, type RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
  if (!(request.headers.get('Content-Type') ?? 'bad').includes('text/html')) {
    error(400, 'request body not HTML');
  }

  if (!request.body) {
    error(400, 'no body in request');
  }

  const input = await request.text();
  console.log('received input: ', input);

  return json({ msg: 'to be implemented' });
}
