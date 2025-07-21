import {expect} from "@playwright/test";
import {test as base} from './auto-fixture'
import {TodoPage} from "./todo-page";

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
    await use(todoPage);
    await todoPage.removeAll();
  },
});

test.describe('navigation',()=>{
  test.beforeEach(async ({page})=>{
    await page.goto('/')
  })

  test('main navigation',{
    tag:'@fast',annotation:{
      type:'issue',
      description: 'https://github.com/microsoft/playwright/issues/23180',
    }
  },async ({page})=>{
    await expect(page).toHaveURL('/');
  })
})

test.describe('group test',()=>{
  test('should add an item', async ({ todoPage }) => {
    await todoPage.addToDo('my item');
    // ...
  });

  test('should remove an item', async ({ todoPage }) => {
    await todoPage.remove('item1');
    // ...
  });
})