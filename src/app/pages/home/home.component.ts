import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  amountOptions = [10, 30, 50, 100];

  ngOnInit(): void {}

  selectOrder(a: number) {
    this.router.navigate(['confirmation', a]);
  }
}
