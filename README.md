# ember-svg-pie

A very lightweight, pure SVG pie chart

[![Travis](https://travis-ci.org/lolmaus/ember-svg-pie.svg)](https://travis-ci.org/lolmaus/ember-svg-pie)
[![npm](https://img.shields.io/npm/v/ember-svg-pie.svg)](https://www.npmjs.com/package/ember-svg-pie)
[![npm](https://img.shields.io/npm/dm/ember-svg-pie.svg)](https://www.npmjs.com/package/ember-svg-pie)
[![Ember Observer Score](http://emberobserver.com/badges/ember-svg-pie.svg)](http://emberobserver.com/addons/ember-svg-pie)



## Requirements

In Ember 2.2.x or lower, install the `hash` helper polyfill:

    ember install ember-hash-helper-polyfill


## Installation

    ember install ember-svg-pie
    
    
## Usage

Use the `{{svg-pie}}` component with the following arguments:

* `data` (array or object, required) -- a sector or array of sectors that represent the data do plot. Each sector is an object with the following key-value pairs:
  * `value` (number, required) -- value of this sector.
  * `color` (string, optional) -- fill color for the sector.
  * `class` (string, optional) -- HTML class to apply to the sector. If you omit `color`, you can use this HTML class to color the sector with `.class {fill: deeppink}`.
* `total` (number, optional) -- the overall value. Useful if you want to display a partial circle. If omitted, a sum of all sector values is used as a total.
* `size` (number, default `100`) -- the width and height of the SVG in px.
* `startAngle` (number, default `-90` aka 12 o'clock) -- the start angle of the first sector in degrees. `0` corresponds to three o'clock.
* `stroke` (string, optional) -- color of the sectors' outline.
* `strokeWidth` (number, default `0`) -- stroke width in px.
* `fluid` (boolean, default `false`) -- whether the SVG should stretch, i. e. behave like an `<img>` with `width: 100%, height: auto`. Default size should be overridden by CSS.


See [demo](https://lolmaus.github.io/ember-svg-pie/) for code samples and results!



## Bonus array helper

This addon provides the `array` helper which acts similar to the [hash](https://github.com/emberjs/ember.js/blob/master/packages/ember-htmlbars/lib/helpers/hash.js) helper [introduced](http://emberjs.com/blog/2015/11/16/ember-2-2-released.html#toc_hash-helper) in Ember 2.3.

Use it to quickly build an array in your template:

```hbs
<ul>
  {{#each (array 'foo' 'bar' 'baz') as |item|}}
    <li>{{item}}</li>
  {{/each}}
</ul>
```
