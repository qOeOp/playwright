import {test as base} from "@playwright/test";
import debug from 'debug'
import fs from 'fs'
import {Vincent} from "../playwright.config";

export const test = base.extend<Vincent&{saveLog:void}&{defaultItem:string},{
    workerFixture:void
}>({
    defaultItem: ['Something nice', { option: true }],
    saveLog: [
        async ({defaultItem}, use,testInfo) => {
        console.log('initializing the auto fixture')
            const logs:string[] = [];
            debug.log = (...args)=>logs.push(args.map(String).join(''))
            debug.enable('my');
            await use();

            if (testInfo.status !== testInfo.expectedStatus) {
                const logFile = testInfo.outputPath(`${testInfo.title}-log.txt`);
                await fs.promises.writeFile(logFile, logs.join('\n'), 'utf8');
                testInfo.attachments.push({
                    name: 'log',
                    path: logFile,
                    contentType: 'text/plain',
                });
            }
        },{auto:true}
    ],
    workerFixture: [
        async ({}, use) => {
        console.log('initializing the worker fixture')
            await use()
        },{auto:true,scope:'worker'}
    ],
    customAge: [async ({ }, use, testInfo) => {
        await use(-1);
    }, { option: true }],
    customName: [async ({ }, use, testInfo) => {
        await use('xx');
    }, { option: true }],
});