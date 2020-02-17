import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonComponent,
  ContentCardComponent,
  HeaderComponent,
  ListItemComponent,
} from './components';
import {
  HomeComponent,
  LoginComponent,
  NotFoundComponent,
  OrderConfirmationComponent,
  OrderHistoryComponent,
} from './pages';

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
    ContentCardComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
