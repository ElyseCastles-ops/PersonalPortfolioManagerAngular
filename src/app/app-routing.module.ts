import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CashDetailsComponent } from './cash-details/cash-details.component';
import { ChildRoutingModule } from './child/child-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GainersLosersComponent } from './gainers-losers/gainers-losers.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentInsightsComponent } from './investment-insights/investment-insights.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChildRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
