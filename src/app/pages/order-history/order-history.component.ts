import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/type';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [
    {
      _id: '123',
      total: 50,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
