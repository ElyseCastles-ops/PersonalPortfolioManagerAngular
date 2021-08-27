import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';
// import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'app-investment-accounts',
  templateUrl: './investment-accounts.component.html',
  styleUrls: ['./investment-accounts.component.css']
})
export class InvestmentAccountsComponent implements OnInit {

  reportAccounts = [
    { id: 1, name: '', balance: 1, type: '', description: '' }
  ]

  reportTotal: number = 8;

  @Output() getInvestmentAccount: EventEmitter<number> = new EventEmitter();
  @Output() getDetails: EventEmitter<number> = new EventEmitter();

  constructor(private portfolioService:PortfolioService ) { }

  ngOnInit(): void {
    this.makeTotalValueServiceCall();
    this.makeAllAccountsServiceCall();
  }

  makeTotalValueServiceCall() {
    this.portfolioService.getTotalInvestmentAccountsValue().subscribe((data:any) => {
      this.reportTotal = data
    })
  }

  makeAllAccountsServiceCall() {
    this.portfolioService.getAllInvestmentAccounts().subscribe((data: any) => {
      this.reportAccounts = data;
    })
  }

  getAccountDetails(account_id: number) {
    this.getDetails.emit(account_id);
    this.getInvestmentAccount.emit();
  }

}
