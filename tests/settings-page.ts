import type {Page} from "@playwright/test";

export class SettingsPage {
    constructor(public readonly page: Page) {
    }
    async switchToDarkMode() {
    console.log('switching to dark mode');
    }
}