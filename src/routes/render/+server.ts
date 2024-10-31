import { error, json, type RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
  if (!request.body) {
    error(400, 'no body in request');
  }

  console.log(request);

  return json({ msg: 'to be implemented' });
}
