import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('svg-pie', 'Unit | Component | svg pie', {
  // Specify the other units that are required for this test
  needs: ['helper:svg-pie-start-angle', 'component:svg-pie-sector'],
  unit: true
});

test('effectiveData', function(assert) {
  let component = this.subject({data: ['foo']});
  assert.propEqual(component.get('effectiveData'), ['foo'], 'array');

  component.set('data', 'foo');
  assert.propEqual(component.get('effectiveData'), ['foo'], 'non-array');
});


test('effectiveTotal', function(assert) {
  let component = this.subject({total: 100, data: [{value: 10}, {value: 20}]});
  assert.equal(component.get('effectiveTotal'), 100, 'total given');

  component.set('total', null);
  assert.equal(component.get('effectiveTotal'), 30, 'total not given');
});


