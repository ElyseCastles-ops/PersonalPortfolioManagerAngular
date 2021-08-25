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
}
