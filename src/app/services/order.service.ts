import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { Order, OrderStatus } from '../type';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  createOrder(
    order: Omit<Order, '_id' | 'createdAt' | 'updatedAt' | 'status'>
  ): Observable<Order> {
    return this.http.post<Order>(environment.apiBaseUrl, {
      ...order,
      userId: this.authService.userId,
    });
  }

  getOrderStatus(orderId: string): Observable<{ status: OrderStatus }> {
    return this.http.get<{ status: OrderStatus }>(
      `${environment.apiBaseUrl}/status/${orderId}`
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${environment.apiBaseUrl}/user/${this.authService.userId}`
    );
  }
}
