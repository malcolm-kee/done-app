import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Order, OrderStatus } from '../type';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  createOrder(order: Omit<Order, '_id'>): Observable<Order> {
    return this.http.post<Order>('http://localhost:3000', {
      ...order,
      userId: this.authService.userId,
    });
  }

  getOrderStatus(orderId: string): Observable<{ status: OrderStatus }> {
    return this.http.get<{ status: OrderStatus }>(
      `http://localhost:3000/status/${orderId}`
    );
  }
}
