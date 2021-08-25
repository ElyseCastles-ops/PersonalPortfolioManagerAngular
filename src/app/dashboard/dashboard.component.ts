import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
/*import { PortfolioService } from */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reportNetworth:number = 5;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getNetworthServiceCall();
  }

  getNetworthServiceCall() {
    this.portfolioService.getNetworth().subscribe((data:any) => {
      this.reportNetworth = data;
    })
  }

}
