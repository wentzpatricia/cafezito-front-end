import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';

@Component({ selector: 'app-detail', templateUrl: './detail.component.html', styleUrl: './detail.component.scss' })
export class DetailComponent implements OnInit {
  
  coffeeShopId: string | null = null;

  constructor (
    private listCoffeeShopService : ListCoffeeShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coffeeShopId = this.route.snapshot.paramMap.get('id');

    this.coffeeShopId ? this.getCoffeeShopById(this.coffeeShopId) : '';
  }

  getCoffeeShopById(id:string) {
    this.listCoffeeShopService.getCoffeeShopById(id).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
