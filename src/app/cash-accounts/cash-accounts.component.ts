import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-accounts',
  templateUrl: './cash-accounts.component.html',
  styleUrls: ['./cash-accounts.component.css']
})
export class CashAccountsComponent implements OnInit {


  accounts = [
    { name: 'test1', balance: 123 },
    { name: 'test2', balance: 456 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
