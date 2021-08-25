import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-cash-accounts',
  templateUrl: './cash-accounts.component.html',
  styleUrls: ['./cash-accounts.component.css']
})
export class CashAccountsComponent implements OnInit {


  reportAccounts = [
    { id: 1, name: '', balance: 1, type:'', description: '' }
  ]

  constructor(private PortfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.makeAllAccountsServiceCall()
  }

  makeAllAccountsServiceCall() {
    this.PortfolioService.getAllCashAccounts().subscribe((data:any) => {
      this.reportAccounts = data;
    })
  }

}
