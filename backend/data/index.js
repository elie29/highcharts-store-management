const charts = {
  bar: () => require('./chart.bar'),
  column: () => require('./chart.column'),
  series: () => require('./chart.series')
};

const unknown = chart => {
  console.error(`${chart} is undefined`);
  return () => ({});
};

const fetch = chart => (charts[chart] || unknown(chart))();

module.exports = { fetch };
