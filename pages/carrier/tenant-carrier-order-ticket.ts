//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';

export class HostTenant {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async ImpersonateTenant(testInfo: TestInfo) {

        await this.page.locator('text=ENVIROTECHNWENVIROTECHNWCarrier 1/3/2022 >> [aria-label="Impersonate"]').click();

        testInfo.annotations.push({ type: "info", description: "Fill Form For Admin" });
        const screenshotLogin = await this.page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        await testInfo.attach('screenshot', { body: screenshotLogin, contentType: 'image/png' });

    }
}

