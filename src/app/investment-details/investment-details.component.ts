import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {

  @Input() displayId: number = 0;

  reportedTransactions = [{ id: 8, account_id: 8, ticker: '', priceper: 8, quantity: 8, date: '' }];
  reportedHoldings = [{ id: 8, account_id: 8, ticker: '', quantity: 8}]
  

  constructor(private PortfolioService: PortfolioService) { }

  

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.updateDisplayId()
  }

  updateDisplayId() {
    this.PortfolioService.getAccountTransactions({ category: 'investmenttransactions', account_id: this.displayId }).subscribe((data: any) => {
      this.reportedTransactions = data;
    })
    this.PortfolioService.getAccountHoldings({ account_id: this.displayId }).subscribe((data: any) => {
      this.reportedHoldings = data;
    })
  }

}
