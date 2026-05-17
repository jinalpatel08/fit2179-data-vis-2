var tempAnomalyChart = "js/temperature_anomaly.vg.json";

vegaEmbed("#temp_anomaly_chart", tempAnomalyChart)
  .then(function(result) {})
  .catch(console.error);