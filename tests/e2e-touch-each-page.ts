import { expect, test, TestInfo } from "@playwright/test"
import { LoginPage } from "../pages/login-page"
import { HostTenant } from "../pages/host/host-tenants"

require('dotenv').config();

test.describe("Run basic E2E TruTik App site ", async () => {

    test("Login as a Tenant and click every link", async ({ page, isMobile }, testInfo) => {

        const loginPage = new LoginPage(page, process.env.ENVIROMENT_URL, process.env.ENVIROMENT_USERNAME, process.env.ENVIROMENT_PASSWORD);
        await loginPage.GoToLoginPage();
        await loginPage.FillLogin(testInfo);
        await loginPage.ClickLogin(testInfo);


        const hostTenant = new HostTenant(page);
        //await hostTenant.HostDashboardIsLoaded(testInfo);
        await hostTenant.ImpersonateTenant(testInfo);
        await hostTenant.LoginAsUser(testInfo);

    });

});