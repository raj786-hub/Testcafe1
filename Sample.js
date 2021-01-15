import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://dev-marketplace.claims1-mp-dev.dev.us.insurance.dxc.com/claims1/`;

test('New Test', async t => {
    await t
        .click(Selector('header a').withText('LOGIN').nth(1))
 console.log("test completed")
    });
