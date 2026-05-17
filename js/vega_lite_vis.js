var tempAnomalyChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/temp_anomaly.vg.json";
var ausMapChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/aus_map.vg.json";

vegaEmbed("#temp_anomaly_chart", tempAnomalyChart)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#aus_map_chart", ausMapChart)
  .then(function(result) {})
  .catch(console.error);