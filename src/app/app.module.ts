import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashAccountsComponent } from './cash-accounts/cash-accounts.component';
import { InvestmentAccountsComponent } from './investment-accounts/investment-accounts.component';
import { NetworthComponent } from './networth/networth.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InvestmentInsightsComponent } from './investment-insights/investment-insights.component';
import { GainersLosersComponent } from './gainers-losers/gainers-losers.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CashDetailsComponent } from './cash-details/cash-details.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CashAccountsComponent,
    InvestmentAccountsComponent,
    NetworthComponent,
    MarketMoversComponent,
    InvestmentInsightsComponent,
    GainersLosersComponent,
    AccountInfoComponent,
    CashDetailsComponent,
    InvestmentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
