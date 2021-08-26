import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CashDetailsComponent } from './modules/cash-details/cash-details.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GainersLosersComponent } from './gainers-losers/gainers-losers.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentInsightsComponent } from './investment-insights/investment-insights.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { PostsComponent } from './modules/posts/posts.component';

const appRoutes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
  path: 'cashdetails',
  component: CashDetailsComponent
}
]
}];
// { path: 'investment-details', component: InvestmentDetailsComponent },
// { path: 'cash-details', component: CashDetailsComponent }
/*{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }*/


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
