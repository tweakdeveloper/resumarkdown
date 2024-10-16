import { type RequestEvent } from '@sveltejs/kit';

import { UAParser } from 'ua-parser-js';

export async function load({ request }: RequestEvent) {
  const ua = request.headers.get('user-agent');

  if (!ua) {
    return { mobile: true };
  }

  const { device } = UAParser(ua);
  return { mobile: device.type === 'mobile' };
}
