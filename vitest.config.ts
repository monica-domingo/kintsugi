import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['packages/lib/kintsugi/src/**/*.spec.ts?(x)'],
    setupFiles: ['packages/lib/kintsugi/jest.setup.ts'],
  },
});
