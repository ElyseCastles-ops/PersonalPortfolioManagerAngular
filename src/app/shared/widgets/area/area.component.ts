import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-widget-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

    chartOptions = {};

    Highcharts = Highcharts;

    constructor() { }

    ngOnInit(): void {
        this.chartOptions = {

            title: {
                text: 'User Accounts For Year 2021'
            },

            /*subtitle: {
                text: 'Source: thesolarfoundation.com'
            },*/

            yAxis: {
                title: {
                    text: 'Networth in USD'
                }
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August']

            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
                //   },

                //   plotOptions: {
                //       series: {
                //           label: {
                //               connectorAllowed: false
                //           },
                //           pointStart: 2021
                //       }
            },

            series: [{
                name: 'Networth',
                data: [3300, 112126.0291, 129951.3972, 257859.163, 286182.6734, 287547.5756, 301709.1784, 313157.4312]
            }, {
                name: 'Investments',
                data: [0, 102478.9491, 113280.5072, 234164.463, 255464.1634, 249805.2556, 258778.5684, 265038.5312]
            }, {
                name: 'Cash',
                data: [3300, 9647.08, 16670.89, 23694.7, 30718.51, 37742.32, 42930.61, 48118.9]
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

        };

    }

}
