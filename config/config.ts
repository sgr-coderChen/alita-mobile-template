import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  // keepalive: [/users/],
  // aconsole: {
  //   console: {},
  //   inspx: {},
  // },
  mobileLayout: 'mobile5',
  mfsu: {},
  hash: true,
  npmClient: 'pnpm',
});
