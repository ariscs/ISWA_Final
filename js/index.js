var descargas = parseInt(localStorage.getItem('des'));
var usuariosA = parseInt(localStorage.getItem('usu'));
var region1 = parseInt(localStorage.getItem('reg1'));
var region2 = parseInt(localStorage.getItem('reg2'));
var region3 = parseInt(localStorage.getItem('reg3'));
var os = parseInt(localStorage.getItem('os'));
var tiempo = parseInt(localStorage.getItem('tie'));

Highcharts.chart('descargas', {

    title: {
        text: 'Número de descargas desde la primera liberación'
    },

    subtitle: {
        text: 'RIATT Games'
    },

    yAxis: {
        title: {
            text: 'Número de descargas'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2017,
        }
    },

    series: [{
        name: 'Descargas',
        data: [10000, 150000, 500000, 2000000, 5000000]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

Highcharts.chart('usuarios', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Porcentaje de usuarios activos al dia'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Usuarios Activos',
            y: 60,
            sliced: false,
            selected: true
        },{
            name: 'Usuarios Inactivos',
            y: 40,
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('region', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Usuarios por región'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'México',
            y: 50,
            sliced: false,
            selected: true
        },{
            name: 'Estados Unidos',
            y: 30,
            sliced: false,
            selected: true
        },{
            name: 'Latinoamerica',
            y: 20,
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('os', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Usuarios por sistema operativo'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Android',
            y: 75,
            sliced: false,
            selected: true
        },{
            name: 'IOS',
            y: 25,
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('tiempo', {

    title: {
        text: 'Tiempo promedio por sesión'
    },

    subtitle: {
        text: 'RIATT Games'
    },

    yAxis: {
        title: {
            text: 'Tiempo en minutos'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2017,
        }
    },

    series: [{
        name: 'Minutos',
        data: [15, 22, 20, 30, 35]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

//Variables
Highcharts.chart('descargas1', {

    title: {
        text: 'Número de descargas desde la primera liberación'
    },

    subtitle: {
        text: 'RIATT Games'
    },

    yAxis: {
        title: {
            text: 'Número de descargas'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2017,
        }
    },

    series: [{
        name: 'Descargas',
        data: [10000, 150000, 500000, 1500000, descargas]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

Highcharts.chart('usuarios1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Porcentaje de usuarios activos al dia'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Usuarios Activos',
            y: usuariosA,
            sliced: false,
            selected: true
        },{
            name: 'Usuarios Inactivos',
            y: (100-usuariosA),
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('region1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Usuarios por región'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'México',
            y: region1,
            sliced: false,
            selected: true
        },{
            name: 'Estados Unidos',
            y: region2,
            sliced: false,
            selected: true
        },{
            name: 'Latinoamerica',
            y: region3,
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('os1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Usuarios por sistema operativo'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Android',
            y: os,
            sliced: false,
            selected: true
        },{
            name: 'IOS',
            y: (100-os),
            sliced: false,
            selected: true
        }]
    }]
});

Highcharts.chart('tiempo1', {

    title: {
        text: 'Tiempo promedio por sesión'
    },

    subtitle: {
        text: 'RIATT Games'
    },

    yAxis: {
        title: {
            text: 'Tiempo en minutos'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2017,
        }
    },

    series: [{
        name: 'Minutos',
        data: [15, 22, 20, 30, tiempo]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});