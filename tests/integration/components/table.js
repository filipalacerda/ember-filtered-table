import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async () => {
    this.setProperties({
      products: [
        {
          id: 0,
          property_values: [
            {
              property_id: 0,
              value: 'Headphones',
            },
            {
              property_id: 1,
              value: 'black',
            },
            {
              property_id: 2,
              value: 5,
            },
            {
              property_id: 3,
              value: 'electronics',
            },
            {
              property_id: 4,
              value: 'false',
            },
          ],
        },
        {
          id: 1,
          property_values: [
            {
              property_id: 0,
              value: 'Cell Phone',
            },
            {
              property_id: 1,
              value: 'black',
            },
            {
              property_id: 2,
              value: 3,
            },
            {
              property_id: 3,
              value: 'electronics',
            },
            {
              property_id: 4,
              value: 'true',
            },
          ],
        },
        {
          id: 2,
          property_values: [
            {
              property_id: 0,
              value: 'Keyboard',
            },
            {
              property_id: 1,
              value: 'grey',
            },
            {
              property_id: 2,
              value: 5,
            },
            {
              property_id: 3,
              value: 'electronics',
            },
            {
              property_id: 4,
              value: 'false',
            },
          ],
        },
        {
          id: 3,
          property_values: [
            {
              property_id: 0,
              value: 'Cup',
            },
            {
              property_id: 1,
              value: 'white',
            },
            {
              property_id: 2,
              value: 3,
            },
            {
              property_id: 3,
              value: 'kitchenware',
            },
          ],
        },
        {
          id: 4,
          property_values: [
            {
              property_id: 0,
              value: 'Key',
            },
            {
              property_id: 1,
              value: 'silver',
            },
            {
              property_id: 2,
              value: 1,
            },
            {
              property_id: 3,
              value: 'tools',
            },
          ],
        },
        {
          id: 5,
          property_values: [
            {
              property_id: 0,
              value: 'Hammer',
            },
            {
              property_id: 1,
              value: 'brown',
            },
            {
              property_id: 2,
              value: 19,
            },
            {
              property_id: 3,
              value: 'tools',
            },
          ],
        },
      ],

      properties: [
        {
          id: 0,
          name: 'Product Name',
          type: 'string',
        },
        {
          id: 1,
          name: 'color',
          type: 'string',
        },
        {
          id: 2,
          name: 'weight (oz)',
          type: 'number',
        },
        {
          id: 3,
          name: 'category',
          type: 'enumerated',
          values: ['tools', 'electronics', 'kitchenware'],
        },
        {
          id: 4,
          name: 'wireless',
          type: 'enumerated',
          values: ['true', 'false'],
        },
      ],

      operators: [
        {
          text: 'Equals',
          id: 'equals',
        },
        {
          text: 'Is greater than',
          id: 'greater_than',
        },
        {
          text: 'Is less than',
          id: 'less_than',
        },
        {
          text: 'Has any value',
          id: 'any',
        },
        {
          text: 'Has no value',
          id: 'none',
        },
        {
          text: 'Is any of',
          id: 'in',
        },
        {
          text: 'Contains',
          id: 'contains',
        },
      ],
    });
  });

  test('it renders a table', async (assert) => {
    await render(
      hbs`<Table @headers={{this.properties}} @rows={{this.products}} />`,
    );
    assert.dom('table').exists();
  });

  test('it renders headers', async function (assert) {
    await render(
      hbs`<Table @headers={{this.properties}} @rows={{this.products}} />`,
    );
    assert.dom('table').hasText('Product Name');
    assert.dom('table').hasText('color');
    assert.dom('table').hasText('weight (oz)');
    assert.dom('table').hasText('category');
    assert.dom('table').hasText('wireless');
  });
});
