import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';


@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {

  @Input() displayId: number = 0;

  reportedAccount = {id: 8, name:'', type:'', description:'', balance: 8};
  reportedTransactions = [{ id: 8, account_id: 8, ticker: '', priceper: 8, quantity: 8, date: '' }];
  reportedHoldings = [{ id: 8, account_id: 8, ticker: '', quantity: 8}]
  

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.displayId = +params['id'];
      this.updateDisplayId();
    })
  }


  updateDisplayId() {
    this.portfolioService.getAccountTransactions({ category: 'investmenttransactions', account_id: this.displayId }).subscribe((data: any) => {
      this.reportedTransactions = data;
    })
    this.portfolioService.getAccountHoldings({ account_id: this.displayId }).subscribe((data: any) => {
      this.reportedHoldings = data;
    })
    this.portfolioService.getAccount({ id: this.displayId }).subscribe((data: any) => {
      this.reportedAccount = data;
    })
  }

}
