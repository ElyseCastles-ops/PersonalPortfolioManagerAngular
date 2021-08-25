import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CashDetailsComponent } from './cash-details/cash-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GainersLosersComponent } from './gainers-losers/gainers-losers.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentInsightsComponent } from './investment-insights/investment-insights.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';

const appRoutes: Routes = [
  { path: 'investment-details', component: InvestmentDetailsComponent },
  { path: 'cash-details', component: CashDetailsComponent }
  /*{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
