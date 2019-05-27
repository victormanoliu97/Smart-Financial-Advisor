import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {IndexMainComponent} from '../index-main/index-main.component';
import {UserProfilingComponent} from '../user-profiling/user-profiling.component';
import {CustomerPanelComponent} from '../customer-panel/customer-panel.component';
import {IncomeLiabilitiesComponent} from '../income-liabilities/income-liabilities.component';
import {EstatesCompaniesComponent} from '../estates-companies/estates-companies.component';
import {AccountStatisticsComponent} from '../account-statistics/account-statistics.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'index',
    component: IndexMainComponent
  },
  {
    path: 'user-profiling',
    component: UserProfilingComponent
  },
  {
    path: 'income',
    component: IncomeLiabilitiesComponent
  },
  {
    path: 'customer-panel',
    component: CustomerPanelComponent
  },
  {
    path: 'estates',
    component: EstatesCompaniesComponent
  },
  {
    path: 'statistics',
    component: AccountStatisticsComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
