import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY, interval, Observable } from 'rxjs';
import {
  catchError,
  delay,
  skipWhile,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';
import { UiStatus } from 'src/app/type';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}

  status: UiStatus = 'Idle';
  params$: Observable<Params> = this.route.params;
  createOrder$: Observable<unknown> = this.route.params.pipe(
    take(1),
    switchMap(({ amount }) =>
      this.orderService.createOrder({
        total: Number(amount),
      })
    ),
    switchMap(order =>
      interval(1000).pipe(
        switchMap(() => this.orderService.getOrderStatus(order._id)),
        skipWhile(result => result.status === 'Created'),
        take(1)
      )
    ),
    tap(({ status }) => {
      this.status = status === 'Cancelled' ? 'Error' : 'Success';
    }),
    catchError(() => {
      this.status = 'Error';
      return EMPTY;
    }),
    delay(3000),
    tap(() => {
      this.router.navigate(['']);
    })
  );

  ngOnInit(): void {}

  onConfirm() {
    this.status = 'Processing';
    return this.createOrder$.subscribe();
  }
}
