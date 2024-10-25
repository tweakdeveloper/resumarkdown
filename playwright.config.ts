import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173,
  },
  expect: {
    timeout: 2.5 * 1000,
  },
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  timeout: 5 * 1000,
  use: {
    viewport: {
      height: 900,
      width: 1600,
    },
  },
};

export default config;
