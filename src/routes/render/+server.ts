import child_process from 'node:child_process';

import { error, type RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
  if (!(request.headers.get('Content-Type') ?? 'bad').includes('text/html')) {
    error(400, 'request body not HTML');
  }

  if (!request.body) {
    error(400, 'no body in request');
  }

  const input = await request.text();

  const {
    status: exitCode,
    stderr: err,
    stdout: output,
  } = child_process.spawnSync('pandoc', ['--sandbox', '-f', 'html', '-t', 'pdf'], {
    input,
    timeout: 5000,
    uid: 9999,
  });

  if (exitCode !== 0) {
    console.error('pandoc errored: ', err.toString());
    error(500, 'pandoc returned error response in server');
  }

  return new Response(output, { headers: { 'content-type': 'application/pdf' } });
}
