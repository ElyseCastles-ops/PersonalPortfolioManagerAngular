import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CashDetailsComponent } from '../cash-details/cash-details.component';
/*import { PortfolioService } from */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  @ViewChild(CashDetailsComponent)
  private cashDetialsComponent!: CashDetailsComponent;

  accountDisplayId: number = 8;

  reportNetworth: number = 5;

  toggleCashVal: number = 0;
  toggleInvestmentVal: number = 0;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getNetworthServiceCall();
  }

  getNetworthServiceCall() {
    this.portfolioService.getNetworth().subscribe((data:any) => {
      this.reportNetworth = data;
    })
  }

  handleShowCashAccountDetals() {
    this.toggleCashVal = 1;
    this.toggleInvestmentVal = 0;
  }

  handleGetAccountDetails(value: number) {
    this.accountDisplayId = value;
  }

  handleShowInvestmentAcountDetails() {
    this.toggleCashVal = 0;
    this.toggleInvestmentVal = 1;
  }

}
