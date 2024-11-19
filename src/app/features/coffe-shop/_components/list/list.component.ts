import { Component, OnInit } from '@angular/core';
import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';
import { CoffeeShop } from '../../_models/list-coffee.interface';

@Component({ selector: 'app-list', templateUrl: './list.component.html', styleUrl: './list.component.scss' })
export class ListComponent implements OnInit {

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}
  
  ngOnInit(): void {
    this.listCoffeeShopService.getAllCoffeeShop().subscribe({
      next: (res: CoffeeShop[]) => {
        console.log(res)
      }, error: (err) => {
        console.error(err)
      }
    })
  }

}
