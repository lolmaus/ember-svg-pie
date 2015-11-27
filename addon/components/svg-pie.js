import E from 'ember';
import layout from '../templates/components/svg-pie';

export default E.Component.extend({

  // ----- Arguments -----
  data:        null,
  size:        100,
  total:       null,
  startAngle:  -90,
  stroke:      null,
  strokeWidth: 0,

  // ----- Overridden properties -----
  tagName: 'svg',
  layout,
  attributeBindings: ['size:width', 'size:height'],

  // ----- Computed properties -----
  effectiveData: E.computed('data', function () {
    const data = this.get('data');
    return E.isArray(data) ? data : [data];
  }),

  effectiveTotal: E.computed('total', 'data.@each.value', function () {
    const total = this.get('total');
    return total ? total : this.get('data').reduce((sum, item) => sum + E.get(item, 'value'), 0);
  })
});
