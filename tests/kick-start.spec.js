"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const auto_fixture_1 = require("./auto-fixture");
const todo_page_1 = require("./todo-page");
// Extend basic test by providing a "todoPage" fixture.
const test = auto_fixture_1.test.extend({
    todoPage: async ({ page }, use) => {
        const todoPage = new todo_page_1.TodoPage(page);
        await todoPage.goto();
        await todoPage.addToDo('item1');
        await todoPage.addToDo('item2');
        await use(todoPage);
        await todoPage.removeAll();
    },
});
test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    test('main navigation', {
        tag: '@fast', annotation: {
            type: 'issue',
            description: 'https://github.com/microsoft/playwright/issues/23180',
        }
    }, async ({ page }) => {
        await (0, test_1.expect)(page).toHaveURL('/');
    });
});
test.describe('group test', () => {
    test('should add an item', async ({ todoPage }) => {
        await todoPage.addToDo('my item');
        // ...
    });
    test('should remove an item', async ({ todoPage }) => {
        await todoPage.remove('item1');
        // ...
    });
});
//# sourceMappingURL=kick-start.spec.js.map