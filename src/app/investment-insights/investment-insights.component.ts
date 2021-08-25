import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-insights',
  templateUrl: './investment-insights.component.html',
  styleUrls: ['./investment-insights.component.css']
})
export class InvestmentInsightsComponent implements OnInit {

  toggleVal = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMM() {
    this.toggleVal = 0;
  }

  toggleGL() {
    this.toggleVal = 1;
  }

}
