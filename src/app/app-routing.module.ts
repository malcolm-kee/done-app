import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import {
  HomeComponent,
  LoginComponent,
  NotFoundComponent,
  OrderConfirmationComponent,
  OrderHistoryComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'confirmation/:amount',
    component: OrderConfirmationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
