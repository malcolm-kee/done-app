import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  OrderConfirmationComponent,
  OrderHistoryComponent,
} from './components';

const routes: Routes = [
  {
    path: 'confirmation/:amount',
    component: OrderConfirmationComponent,
  },
  {
    path: 'transactions',
    component: OrderHistoryComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
