var tempAnomalyChart = "https://raw.githubusercontent.com/jinalpatel08/fit2179-data-vis-2/main/js/temp_anomaly.vg.json";

vegaEmbed("#temp_anomaly_chart", tempAnomalyChart)
  .then(function(result) {})
  .catch(console.error);