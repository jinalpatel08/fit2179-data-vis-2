var tempAnomalyChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/temp_anomaly.vg.json";
var ausMapChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/aus_map.vg.json";
var rainfallChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/rainfall.vg.json";
var stateBarChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/state_bar.vg.json";
var waterHeatmap = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/water_heatmap.vg.json";
var disastersBar = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/disasters_bar.vg.json";

vegaEmbed("#temp_anomaly_chart", tempAnomalyChart)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#aus_map_chart", ausMapChart)
  .then(function(result) {})
  .catch(console.error);


vegaEmbed("#rainfall_chart", rainfallChart)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#state_bar_chart", stateBarChart)
  .then(function(result) {})
  .catch(console.error);


vegaEmbed("#water_heatmap", waterHeatmap)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#disasters_bar", disastersBar)
  .then(function(result) {})
  .catch(console.error);