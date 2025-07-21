import {expect, test} from "./my-test";

test.beforeEach(async ({settingsPage}) => {
    await settingsPage.switchToDarkMode();
});

test('basic test', async ({todoPage, baseURL,page}) => {
    test.slow();

    await todoPage.addToDo('something nice');
    await expect(page.getByTestId('todo-title')).toContainText(['something nice']);
});