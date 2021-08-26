import { Component, Input, OnInit } from '@angular/core';
// import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'app-cash-details',
  templateUrl: './cash-details.component.html',
  styleUrls: ['./cash-details.component.css']
})
export class CashDetailsComponent implements OnInit {

  @Input() displayId:number = 0;

  reportedTransactions = [{ id: 8, account_id: 8, name: '', amount: 8, date: '' }];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.updateDisplayId()
  }

  updateDisplayId() {
    this.portfolioService.getAccountTransactions({ category: 'cashtransactions', account_id: this.displayId }).subscribe((data:any) => {
      this.reportedTransactions = data;
    })
  }

}
