import E from 'ember';
import layout from '../templates/components/svg-pie-segment';

export default E.Component.extend({

  // ----- Arguments -----
  fill: null,
  size: null,
  value: null,
  total: null,
  startAngle: 0,
  stroke: null,
  strokeWidth: 0,


  // ----- Overridden properties -----
  layout,
  tagName: 'g',
  attributeBindings: ['fill', 'stroke', 'strokeWidth:stroke-width'],


  // ----- Computed properties -----
  halfWidth: E.computed('size', function() {
    return this.get('size') / 2;
  }),

  radius: E.computed('size', function() {
    return this.get('halfWidth') - this.get('strokeWidth');
  }),

  angle: E.computed('value', 'total', function() {
    return this.get('value') / this.get('total') * 360;
  }),

  endAngle: E.computed('startAngle', 'angle', function () {
    return this.get('angle') + this.get('startAngle');
  }),

  startX: E.computed('startAngle', 'radius', function() {
    return this.get('halfWidth') + this.get('radius') * Math.cos(this.get('startAngle') * (Math.PI / 180));
  }),

  startY: E.computed('startAngle', 'radius', function() {
    return this.get('halfWidth') + this.get('radius') * Math.sin(this.get('startAngle') * (Math.PI / 180));
  }),

  endX: E.computed('endAngle', 'radius', function() {
    return this.get('halfWidth') + this.get('radius') * Math.cos(this.get('endAngle') * (Math.PI / 180));
  }),

  endY: E.computed('endAngle', 'radius', function() {
    return this.get('halfWidth') + this.get('radius') * Math.sin(this.get('endAngle') * (Math.PI / 180));
  }),

  largeArcFlag: E.computed('startAngle', 'endAngle', function () {
    return this.get('startAngle') - this.get('endAngle') > 180 ? 1 : 0;
  }),

  sweepFlag: E.computed('startAngle', 'endAngle', function () {
    return this.get('startAngle') < this.get('endAngle') ? 1 : 0;
  })

});
