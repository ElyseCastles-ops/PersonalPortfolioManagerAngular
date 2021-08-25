import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-investment-accounts',
  templateUrl: './investment-accounts.component.html',
  styleUrls: ['./investment-accounts.component.css']
})
export class InvestmentAccountsComponent implements OnInit {

  reportAccounts = [
    { id: 1, name: '', balance: 1, type: '', description: '' }
  ]

  constructor(private PortfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.makeAllAccountsServiceCall();
  }

  makeAllAccountsServiceCall() {
    this.PortfolioService.getAllInvestmentAccounts().subscribe((data: any) => {
      this.reportAccounts = data;
    })
  }
}
