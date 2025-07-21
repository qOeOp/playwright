"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports.default = (0, test_1.defineConfig)({
    testDir: '.',
    testMatch: /.*\.spec\.ts$/,
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 1,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html', { open: "never" }]],
    globalSetup: require.resolve('./global-setup/setup.js'),
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        customName: 'vincent',
        customAge: 18,
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://playwright.dev',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        headless: true,
        screenshot: 'on',
        // Record video only when retrying a test for the first time.
        video: 'on-first-retry'
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...test_1.devices['Desktop Chrome'] },
        },
        /*{t r
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
    
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },*/
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
//# sourceMappingURL=playwright.config.js.map