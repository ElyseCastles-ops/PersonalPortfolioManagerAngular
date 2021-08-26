import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-cash-accounts',
  templateUrl: './cash-accounts.component.html',
  styleUrls: ['./cash-accounts.component.css']
})
export class CashAccountsComponent implements OnInit {

  reportTotal: number = 8;

  reportAccounts = [
    { id: 1, name: '', balance: 1, type:'', description: '' }
  ]


  @Output() getCashAccount: EventEmitter<number> = new EventEmitter();
  @Output() getDetails: EventEmitter<number> = new EventEmitter();

  constructor(private PortfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.makeTotalValueServiceCall();
    this.makeAllAccountsServiceCall();
  }

  makeTotalValueServiceCall() {
    this.PortfolioService.getTotalCashAccountsValue().subscribe((data: any) => {
      this.reportTotal = data
    })
  }

  makeAllAccountsServiceCall() {
    this.PortfolioService.getAllCashAccounts().subscribe((data:any) => {
      this.reportAccounts = data;
    })
  }

  getAccountDetails(account_id:number) {
    this.getDetails.emit(account_id);
    this.getCashAccount.emit();
  }

}
