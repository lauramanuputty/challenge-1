 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
	      ['Water', 'Stock'],
          ['Water',     11],
          ['',      2],
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
		  slices: {
			0: { color: '#80C5DE' },
            1: { color: 'transparent' },
		
			  
		  }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }