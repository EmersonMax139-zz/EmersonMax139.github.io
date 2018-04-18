// 'current' current version of the visualization() api, can
//  also use the number of the release?
google.charts.load('current', {'packages':['geochart']},);
// drawChart() set as callback function after charts are loaded (this line can be anywhere)
google.charts.setOnLoadCallback(drawAvgChart);
google.charts.setOnLoadCallback(drawBeerChart);
google.charts.setOnLoadCallback(drawWineChart);
google.charts.setOnLoadCallback(drawSpiritChart);


  // The entire query + response is wrapped in the main functions,
  // drawAvgChart(), drawBeerChart(), etc. This keeps the data within the scope
  // of the function so different queries with the same variables
  // can be called in each.

  function drawAvgChart() {
    // Setup Query String (?range=A:B)
    // then add to .Query()
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1qUCbrw-3JScRihoOoNelSmaVfzYem-4W3EamRHk0bFg/edit?range=A:B');


    // Sends query request, with callback function
    // **Callback function is wrapped in draw() function
    query.send(handleQueryResponse);


  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
    // Takes data from sheets url, and converts to google's data table format
    var data = response.getDataTable();


    var options = {
      colorAxis: {colors: ['#f7fbff','#deebf7','#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']},
      "width": 750
    };

    // INSTANTIATION
    var chart = new google.visualization.GeoChart(document.getElementById('AvgChart')); //
    chart.draw(data, options);

  }
}

  function drawBeerChart() {
    var queryString = encodeURIComponent('SELECT A, C');

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1qUCbrw-3JScRihoOoNelSmaVfzYem-4W3EamRHk0bFg/gviz/tq?gid=0&headers=1&tq=' + queryString);
    query.send(handleQueryResponse);


  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
    // Takes data from sheets url, and converts to google's data table format
    var data = response.getDataTable();


    var options = {
      colorAxis: {colors: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b' ]},
      "width": 750
    };

    // INSTANTIATION
    var chart = new google.visualization.GeoChart(document.getElementById('BeerChart')); //
    chart.draw(data, options);

    }
  }

  function drawWineChart() {
    var queryString = encodeURIComponent('SELECT A, E');

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1qUCbrw-3JScRihoOoNelSmaVfzYem-4W3EamRHk0bFg/gviz/tq?gid=0&headers=1&tq=' + queryString);
    query.send(handleQueryResponse);


    function handleQueryResponse(response) {
      if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    // Takes data from sheets url, and converts to google's data table format
    var data = response.getDataTable();


    var options = {
      colorAxis: {colors: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d']},
      "width": 750
    };

  // INSTANTIATION
  var chart = new google.visualization.GeoChart(document.getElementById('WineChart')); //
  chart.draw(data, options);

  }
}

function drawSpiritChart() {
var queryString = encodeURIComponent('SELECT A, D');

var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1qUCbrw-3JScRihoOoNelSmaVfzYem-4W3EamRHk0bFg/gviz/tq?gid=0&headers=1&tq=' + queryString);
query.send(handleQueryResponse);


function handleQueryResponse(response) {
if (response.isError()) {
  alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  return;
}
// Takes data from sheets url, and converts to google's data table format
var data = response.getDataTable();


var options = {
  colorAxis: {colors: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000']},
  "width": 750
};

// INSTANTIATION
var chart = new google.visualization.GeoChart(document.getElementById('SpiritChart')); //
chart.draw(data, options);
  }
}
