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
  fluid:       false,

  // ----- Overridden properties -----
  tagName: 'svg',
  layout,
  attributeBindings: ['size:width', 'size:height', 'viewBox', 'preserveAspectRatio'],

  // ----- Computed properties -----
  effectiveData: E.computed('data', function () {
    const data = this.get('data');
    return E.isArray(data) ? data : [data];
  }),

  effectiveTotal: E.computed('total', 'data.@each.value', function () {
    const total = this.get('total');
    if (total) { return total; }

    const data = this.get('data');
    return E.isArray(data) && data.reduce((sum, item) => sum + E.get(item, 'value'), 0);
  }),

  viewBox: E.computed('fluid', 'size', function () {
    if (this.get('fluid')) {
      const size = this.get('size');
      return `0 0 ${size} ${size}`;
    }
  }),

  preserveAspectRatio: E.computed('fluid', function () {
    if (this.get('fluid')) {
      return "xMinYMin";
    }
  }),
});
