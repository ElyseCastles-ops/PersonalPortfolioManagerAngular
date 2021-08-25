import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from '../account-info/account-info.component';
import { CashDetailsComponent } from '../cash-details/cash-details.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GainersLosersComponent } from '../gainers-losers/gainers-losers.component';
import { InvestmentDetailsComponent } from '../investment-details/investment-details.component';
import { InvestmentInsightsComponent } from '../investment-insights/investment-insights.component';
import { MarketMoversComponent } from '../market-movers/market-movers.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'investment-insights', component: InvestmentInsightsComponent,
        children: [
          { path: 'market-movers', component: MarketMoversComponent },
          { path: 'gainers-losers', component: GainersLosersComponent }

        ]
      },
      {
        path: 'account-info', component: AccountInfoComponent,
        children: [
          { path: 'investment-details', component: InvestmentDetailsComponent },
          { path: 'cash-details', component: CashDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
