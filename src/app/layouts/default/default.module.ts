import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
// import { CashAccountsComponent } from 'src/app/modules/cash-accounts/cash-accounts.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    // CashAccountsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
