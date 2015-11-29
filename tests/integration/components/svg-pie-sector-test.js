import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-pie-sector', 'Integration | Component | svg pie sector', {
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
      {{svg-pie-sector
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

  const $sector = this.$('g');

  assert.ok($sector.hasClass('klass'),                "$sector.hasClass('klass')");
  assert.equal($sector.attr('fill'),         'red',   "$sector.attr('fill')");
  assert.equal($sector.attr('stroke'),       'black', "$sector.attr('width')");
  assert.equal($sector.attr('stroke-width'), '0',     "$sector.attr('stroke-width')");

  const $path = $sector.find('path');
  const d     = $path.attr('d').trim().replace(/\s+/g, ' ');
  assert.equal(d, 'M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z');
});
