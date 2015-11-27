import { array } from '../../../helpers/array';
import { module, test } from 'qunit';

module('Unit | Helper | array');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = array(['foo', 'bar', 'baz']);
  assert.propEqual(result, ['foo', 'bar', 'baz']);
});
