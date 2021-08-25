import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-accounts',
  templateUrl: './investment-accounts.component.html',
  styleUrls: ['./investment-accounts.component.css']
})
export class InvestmentAccountsComponent implements OnInit {

  accounts = [
    { name: 'test1', balance: 123 },
    { name: 'test2', balance: 456 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
