import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-pie-segment', 'Integration | Component | svg pie segment', {
  integration: true,

  beforeEach () {
    // http://www.justinmccandless.com/blog/Patching+jQuery's+Lack+of+SVG+Support
    const $ = Ember.$;
    var hasClass = $.fn.hasClass;
    $.fn.hasClass = function(value) {
      var orig = hasClass.apply(this, arguments);

      var elem,
        i = 0,
        len = this.length;

      for (; i < len; i++ ) {
        elem = this[ i ];
        /* globals SVGElement */
        if ( elem instanceof SVGElement ) {
          var classes = $(elem).attr('class');

          if ( classes ) {
            return classes.indexOf(value) !== -1;
          } else {
            return false;
          }
        }
      }
      return orig;
    };
  }
});

test('it renders', function(assert) {

  this.set('klass',       'klass');
  this.set('fill',        'red');
  this.set('size',        100);
  this.set('value',       90);
  this.set('total',       360);
  this.set('startAngle',  -90);
  this.set('stroke',      'black');
  this.set('strokeWidth', 0);

  // Template block usage:" + EOL +
  this.render(hbs`
    <svg>
      {{svg-pie-segment
        class=klass
        fill=fill
        size=size
        value=value
        total=total
        startAngle=startAngle
        stroke=stroke
        strokeWidth=strokeWidth
      }}
    </svg>
  `);

  const $segment = this.$('g');

  assert.ok($segment.hasClass('klass'),                "$segment.hasClass('klass')");
  assert.equal($segment.attr('fill'),         'red',   "$segment.attr('fill')");
  assert.equal($segment.attr('stroke'),       'black', "$segment.attr('width')");
  assert.equal($segment.attr('stroke-width'), '0',     "$segment.attr('stroke-width')");

  const $path = $segment.find('path');
  const d     = $path.attr('d').trim().replace(/\s+/g, ' ');
  assert.equal(d, 'M 50 50 L 50 0 A 50 50 0 0 1 100 50 z');
});
