import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [PortfolioService]
})
export class SidebarComponent implements OnInit {

  reportCashTotal: number = 8;
  reportInvestmentTotal: number = 8;

  constructor(private portfolioService:PortfolioService) { }


  ngOnInit(): void {
    this.getNetworthServiceCall();
    this.makeTotalCashValueServiceCall();
    this.makeTotalInvestmentValueServiceCall();
  }

  accountDisplayId:number = 8;

  reportNetworth:number = 5;

  toggleCashVal:number = 0;
  toggleInvestmentVal:number = 0;


  makeTotalCashValueServiceCall() {
    this.portfolioService.getTotalCashAccountsValue().subscribe((data: any) => {
      this.reportCashTotal = data
    })
  }
  makeTotalInvestmentValueServiceCall() {
    this.portfolioService.getTotalInvestmentAccountsValue().subscribe((data: any) => {
      this.reportInvestmentTotal = data
    })
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

  handleGetAccountDetails(value: any) {
    this.accountDisplayId = value;
  }

  handleShowInvestmentAcountDetails() {
    this.toggleCashVal = 0;
    this.toggleInvestmentVal = 1;
  }

}
