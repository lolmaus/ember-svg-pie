# ember-svg-pie

A very lightweight, pure SVG pie chart


## Requirements

In Ember 2.2.x or lower, install the `hash` helper polyfill:

    ember install ember-hash-helper-polyfill


## Installation

    ember install ember-svg-pie
    
    
## Usage

Use the `{{svg-pie}}` component with the following arguments:

* `data` (array or object, required) -- a segment or array of segments that represent the data do plot. Each segment is an object with the following key-value pairs:
  * `value` (number, required) -- value of this segment.
  * `color` (string, optional) -- fill color for the segment.
  * `class` (string, optional) -- HTML class to apply to the segment. If you omit `color`, you can use this HTML class to color the segment with `.class {fill: deeppink}`.
* `total` (number, optional) -- the overall value. Useful if you want to display a partial circle. If omitted, a sum of all segment values is used as a total.
* `size` (number, default `100`) -- the width and height of the SVG in px.
* `startAngle` (number, default `-90` aka 12 o'clock) -- the start angle of the first segment in degrees. `0` corresponds to three o'clock.
* `stroke` (string, optional) -- color of the segments' outline.
* `strokeWidth` (number, default `0`) -- stroke width in px.


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
