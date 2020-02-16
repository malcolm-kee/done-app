import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonComponent,
  HeaderComponent,
  HomeComponent,
  ListItemComponent,
  NotFoundComponent,
  OrderHistoryComponent,
} from './components';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NotFoundComponent,
    HomeComponent,
    ListItemComponent,
    OrderHistoryComponent,
    OrderConfirmationComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
