import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-cash-details',
  templateUrl: './cash-details.component.html',
  styleUrls: ['./cash-details.component.css']
})
export class CashDetailsComponent implements OnInit {

  @Input() displayId:any = 0;

  reportedAccount = { id: 8, name: '', type: '', description: '', balance: 8 };
  reportedTransactions = [{ id: 8, account_id: 8, name: '', amount: 8, date: '' }];

  constructor(private portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
 
    // this.displayId = this.route.snapshot.paramMap.get('id')!;
    this.route.params.subscribe(params => {
      this.displayId =  +params['id'];
      this.updateDisplayId()
    })

  }

  updateDisplayId() {
    this.portfolioService.getAccount({ id: this.displayId }).subscribe((data: any) => {
      this.reportedAccount = data;
    })
    this.portfolioService.getAccountTransactions({ category: 'cashtransactions', account_id: this.displayId }).subscribe((data:any) => {
      this.reportedTransactions = data;
    })
  }

}
