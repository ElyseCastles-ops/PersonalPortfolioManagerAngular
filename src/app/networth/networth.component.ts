import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.css']
})
export class NetworthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makeNetworthChart() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

  }

}
