$(function () {
    // files with all the charts
    var color_1 = '#F0AB00'; // brand yellow primary
    var color_2 = '#C51F24'; // brand red secondary
    var color_3 = '#0099CC'; // brand blue secondary
    var color_4 = '#7D0063'; // brand purple secondary
    var color_5 = '#003F6A'; // brand blue tertiary
    var color_6 = '#007A4D'; // brand green tertiary
    var color_7 = '#97BD3D'; // brand green secondary


    /********************** Chart 1 ***********************/

    /* Chart variable
    /  Chart documentation: http://www.highcharts.com/docs 
    */
    var chartContainerES1 = {  
        chart: {
            type: 'column'
        },
        title: {
            text: "Tree Cover Loss in Indonesia's Primary Forests"
        },
        xAxis: {
            categories: [ '2001','2002','2003','2004','2005','2006','2008','2009','2010','2011', '2012']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Annual Tree Cover Loss<br/>(millions of hectares)'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}' // you can retreive values for display and format tooltips
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        //textShadow: '0 0 3px black'
                        textShadow: '0'
                    }
                }
            }
        },
        series: [{
            name: '2001-2013 total tree cover loss',
            data: [5, 3, 3, 5, 2, 5, 3, 3, 5, 2],
            color: "#CCE595"
        }, {
            name: '2001-2013 tree cover in primary forests',
            data: [5, 2, 3, 2, 1, 5, 2, 3, 2, 3],
            color: "#97BD3D"
        }, {
            name: '2014 tree cover loss',
            data: [null, null, null, null, null, null, null, null, null, null, 4], //null values create gaps. in this case, we're using to offset values
            color: color_1
        }, {
            name: '2014 tree cover loss in primary forests',
            data: [null, null, null, null, null, null, null, null, null, null, 5],
            color: "#F2D48D"
        },{
            name: '3-yr average, total tree cover loss',
            type: 'line',
            data: [null, null, null, 7.5, 5.2, 8.5, 9.2, 10.5, 8.3, 7.3, 7.9],
            color: color_2,
            tooltip: {
                valueSuffix: '°C'
            },
            marker: {
                enabled: false
            }
        }]
    };

    // Chart init
    $('#chartContainerES1').highcharts(chartContainerES1);

    /* Download button 
    /  For consistency and ease of use, 
    /  button naming convention is:
    /       #button-{nameOfChart}
    */
    $('#button-chartContainerES1').click(function () {
        var chart = $('#chartContainerES1').highcharts();
        chart.exportChart();
    });

    /********************** End chart 1 ***********************/

    

    /*$('#button').click(function () {
        var chart = $('#chartContainerES1').highcharts();
        //chart.exportChart();

        var obj = {},
        exportUrl = 'http://export.highcharts.com/';
        obj.options = JSON.stringify(chartContainerES1);
        obj.type = 'image/png';
        obj.async = true;

        $.ajax({
            type: 'post',
            url: exportUrl,
            data: obj,
            success: function (data) {
                var imgContainer = $("#imgContainer");
                $('<img>').attr('src', exportUrl + data).attr('width', '850px').appendTo(imgContainer);
                $('<a>or Download Here</a>').attr('href', exportUrl + data).appendTo(imgContainer);

            }
        });
    });*/

    var chartContainerES2 = {
        chart: {
            type: 'column'
        },
        title: {
            text: "Geographical Distribution of China's OFDI Stock, 2004 and 2013"
        },
        xAxis: {
            categories: [ '2004','2012','2013 (excluding OFCs*']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels: {
                enabled: false
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
         legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },
        tooltip: {
            enabled: false,
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.0f}%',
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        //textShadow: '0 0 3px black'
                        textShadow: '0'
                    }
                }
            }
        },
        series: [{
            name: 'Oceania',
            data: [2, 2, 2],
            color: color_1
        }, {
            name: 'Africa',
            data: [1, 2, 4],
            color: color_2
        }, {
            name: 'North America',
            data: [5, 3, 4],
            color: color_3
        }, {
            name: 'Europe',
            data: [4, 2, 3],
            color: color_4
        }, {
            name: 'Asia',
            data: [1, 1, 1],
            color: color_5
        }]
    };

    $('#chartContainerES2').highcharts(chartContainerES2);


    $('#chartContainerES3').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            //text: 'Contents of Highsoft\'s weekly fruit delivery'
            text: 'Outward FDI Stock'
        },
        plotOptions: {
            pie: {
                innerSize: "70%", // size of inner gap, relative to size
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }

        },
        series: [{
            name: 'Delivered amount',
            data: [{
                name: 'Other',
                y: 10,
                color: color_1
            }, {
                name: 'Manufacturing',
                y: 6,
                color: color_2
            }, {
                name: 'Transportation Storange & Post',
                y: 6,
                color: color_3
            }, {
                name: 'Leasing & Business Services',
                y: 33,
                color: color_4
            }, {
                name: 'Finance',
                y: 18,
                color: color_5
            }, {
                name: 'Mining',
                y: 14,
                color: color_6
            }, {
                name: 'Wholesale & Retail Trade',
                y: 14,
                color: color_7
            }]
        }]
    });
});