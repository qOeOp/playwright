import {test as base} from "@playwright/test";
import {SettingsPage} from "./settings-page";
import {TodoPage} from "./todo-page";

export const test= base.extend<{settingsPage:SettingsPage;todoPage:TodoPage}>({
    settingsPage: async ({page}, use) => {
        const settingsPage = new SettingsPage(page);
        await use(settingsPage);
    },
    todoPage: async ({page}, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await todoPage.addToDo('item1');
        await todoPage.addToDo('item2');
        await use(todoPage);
        await todoPage.removeAll();
    }
})

export { expect } from '@playwright/test';