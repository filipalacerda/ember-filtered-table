import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | increment', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Increment />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Increment>
        template block text
      </Increment>
    `);

    assert.dom().hasText('template block text');
  });
});
