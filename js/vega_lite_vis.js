const BASE = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/";

const charts = [
  ["#temp_lollipop",    "temp_lollipop.vg.json"],
  ["#temp_grid",        "temp_grid.vg.json"],
  ["#aus_map",          "aus_map.vg.json"],
  ["#state_bar",        "state_bar.vg.json"],
  ["#rainfall_area",    "rainfall_area.vg.json"],
  ["#rainfall_decade",  "rainfall_decade.vg.json"],
  ["#water_heatmap",    "water_heatmap.vg.json"],
  ["#disasters_bar",    "disasters_bar.vg.json"],
  ["#disaster_map",     "disaster_map.vg.json"],
  ["#scatter",          "scatter.vg.json"],
  ["#strip_plot",       "strip_plot.vg.json"],
  ["#rainfall_trend",   "rainfall_trend.vg.json"]
];

charts.forEach(([id, file]) => {
  vegaEmbed(id, BASE + file, {actions: true})
    .then(() => {})
    .catch(err => console.error(id, err));
});