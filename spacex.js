  //LineChart 
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Places', 'Afstand naar mars (in miljoenen km)'],
          ['Aarde', 0 ],
          ['',  25 ],
          ['',  75 ],
		  ['',  125],
		  ['',  175],
		  ['Mars',250]
        ]);

        var options = {
		  title: 'De Afstand van Aarde naar Mars',
		  backgroundColor: '#024F88',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }