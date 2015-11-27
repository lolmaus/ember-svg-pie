import { svgPieStartAngle } from '../../../helpers/svg-pie-start-angle';
import { module, test } from 'qunit';

module('Unit | Helper | svg pie start angle');

// Replace this with your real tests.
test('it works', function(assert) {
  const data = [{value: 10}, {value: 20}, {value: 30}];

  assert.equal(svgPieStartAngle(null, {data, index: 0, total: 360}), 0,  'test 1');
  assert.equal(svgPieStartAngle(null, {data, index: 1, total: 360}), 10, 'test 2');
  assert.equal(svgPieStartAngle(null, {data, index: 2, total: 360}), 30, 'test 3');

  assert.equal(svgPieStartAngle(null, {data, index: 0, total: 360, start: 10}), 10, 'test 4');
  assert.equal(svgPieStartAngle(null, {data, index: 1, total: 360, start: 10}), 20, 'test 5');
  assert.equal(svgPieStartAngle(null, {data, index: 2, total: 360, start: 10}), 40, 'test 6');
});
