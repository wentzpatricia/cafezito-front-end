import { Component, OnInit } from '@angular/core';
import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';

import { CoffeeShop } from '../../_models/list-coffee.interface';

@Component({ selector: 'app-list', templateUrl: './list.component.html', styleUrl: './list.component.scss' })
export class ListComponent implements OnInit {

  listCoffeeShop: CoffeeShop[] = [];
  loading: boolean = false;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}
  
  ngOnInit(): void {
    this.getAllCoffeeShop();
  }

  getAllCoffeeShop() {
    this.loading = true;

    this.listCoffeeShopService.getAllCoffeeShop().subscribe({
      next: (res: CoffeeShop[]) => {
        console.log(res)
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err)
      }
    })
  }

}
