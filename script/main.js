   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawLineChart);

      function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
          ['PLAATS', 'Brandstof' ],
          ['Opstijgen',  300,      ],
          ['Binnen aarde orbit ',  150,      ],
          ['Buiten aarde orbit',  100,       ],
          ['Mars',  50,      ]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
 

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawLineChartTwo);

	function drawLineChartTwo() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Tijd');
      data.addColumn('number', 'Afstand');

      data.addRows([
        [0, 0],   [1, 50],  [2, 99],  [3, 110],  [4, 140],  [5, 180],
        [6, 222],  [7, 250],  [8, 290]
      ]);

      var options = {
        hAxis: {
          title: 'TIJD (in maanden)'
        },
        vAxis: {
          title: 'AFSTAND (in afgelegde km)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_chart'));

      chart.draw(data, options);
    }
 
 
 

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
	      ['WATER', 'VOORRAAD'],
          ['Water',     97],
          ['',      3],
        ]);

        var options = {
          pieHole: 0.4,
		  backgroundColor: '#47B7EB',
		  slices: {
			0: { color: 'white' },
            1: { color: 'transparent' },
		  }
        };

        var chart = new google.visualization.PieChart(document.getElementById('water_chart'));
        chart.draw(data, options);
      }
	  
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChartTwo);

      function drawChartTwo() {
        var data = google.visualization.arrayToDataTable([
	      ['ETEN', 'VOORRAAD'],
          ['Eten',     90],
          ['',      10],
        ]);

        var options = {
          pieHole: 0.4,
		  backgroundColor: '#47B7EB',
		  slices: {
			0: { color: 'lightgrey' },
            1: { color: 'transparent' },
		  }
        };

        var chart = new google.visualization.PieChart(document.getElementById('food_chart'));
        chart.draw(data, options);
      }
	  
	 google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Snacks');
        data.addColumn('number', 'Prijs');
        data.addColumn('boolean', 'Op voorraad');
        data.addRows([
          ['Chips',  {v: 10000, f: '€1,50'}, true],
          ['Gedroogd fruit',   {v:8000,   f: '€1,50'},  false],
          ['Koekjes', {v: 12500, f: '€1,50'}, true],
          ['Nootjes',   {v: 7000,  f: '€2,00'},  true]
        ]);
		

        var table = new google.visualization.Table(document.getElementById('table_chart'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
 