import Ember from 'ember';

export function svgPieStartAngle(params, {data, index, total, start}) {
  start = start || 0; // ToDo: move into destructuring when JSHint is 2.9.1+

  return data
    .slice(0, index)
    .reduce((sum, item) => {
      const angle = item.value / total * 360 || 0;
      return sum + angle;
    }, start);
}

export default Ember.Helper.helper(svgPieStartAngle);
