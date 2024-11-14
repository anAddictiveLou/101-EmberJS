import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rentals/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    // go to http://localhost:4200/
    await visit('/');

    // After going to /, check current url is / as expected
    assert.strictEqual(currentURL(), '/');

    // check dom of / page
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    // look inside the tag with the jumbo class for an <a> tag with the button class.
    assert.dom('.jumbo a.button').hasText('About Us');

    // click on this link
    await click('.jumbo a.button');

    // asserted that clicking on the link should go to the /about URL.
    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });
});