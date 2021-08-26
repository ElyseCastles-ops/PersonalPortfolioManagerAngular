import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getNetworth() {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/networth`)
  }

  getAllCashAccounts() {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/cash`)
  }

  getAllInvestmentAccounts() {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/investment`)
  }

  getTotalInvestmentAccountsValue() {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/investment/total`)
  }

  getTotalCashAccountsValue() {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/cash/total`)
  }

  getAccountTransactions(params = { category: 'cashtransactions', account_id: 1 }) {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/${params.category}/accountid/${params.account_id}`)
  }

  getAccountHoldings(params = {account_id: 1}) {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/holdings/accountid/${params.account_id}`)
  }
  getAccount(params = { id: 1 }) {
    return this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops17.conygre.com/accounts/${params.id}`)
  }
}
