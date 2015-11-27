import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-pie', 'Integration | Component | svg pie', {
  integration: true
});

test('it renders', function(assert) {

  this.set('data', [
    {value: 10},
    Ember.Object.create({value: 20})
  ]);

  this.render(hbs`{{svg-pie data=data}}`);

  assert.equal(this.$('g').length, 2, 'number of <g>');
});
