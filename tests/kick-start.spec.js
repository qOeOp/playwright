"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("my first test", () => { });
(0, test_1.test)("kick start with play wright", ({ clientCertificates }, info) => {
    console.log(`my first test ${clientCertificates}`);
    console.log(`my first test ${info.project.name}`);
});
//# sourceMappingURL=kick-start.spec.js.map