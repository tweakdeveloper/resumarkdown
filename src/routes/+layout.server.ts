import { UAParser } from 'ua-parser-js';

export async function load({ request }) {
  const ua = request.headers.get('user-agent');

  if (!ua) {
    return { mobile: true };
  }

  const { device } = UAParser(ua);
  return { mobile: device.type === 'mobile' };
}
