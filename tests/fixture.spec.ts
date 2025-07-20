import { test as base, expect } from '@playwright/test';
import {TodoPage} from "./todo-page";

const test = base.extend<{ todoPage: TodoPage }>({
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        console.log('todo page fixture: %s','add item1');
        await todoPage.addToDo('item1');
        console.log('todo page fixture: %s','add item2');
        await todoPage.addToDo('item2');
        await use(todoPage);
        await todoPage.removeAll();
    }
});

test.describe('test fixture test wise', () =>{
    test('should add a todo', async ({ todoPage }) => {
        console.log('test1: %s','add item3');
        await todoPage.addToDo('item3');
    });

    test('should remove a todo', async ({ todoPage }) => {
        console.log('test2: %s','remove item2');
        await todoPage.remove('item2');
    });
})