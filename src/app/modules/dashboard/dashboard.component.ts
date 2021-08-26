import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reportedGainers = [{ accountId: 8, ticker:'', quantity: 8, percentChange: 8}]

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.updateGainersLosersDisplay();
  }

  updateGainersLosersDisplay() {
    this.portfolioService.getGainersAndLosers().subscribe((data: any) => {
      this.reportedGainers = data;
    })
  }

}
