import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';

import { CoffeTypesEnum, CoffeeShopDetail, ProductTagEnum } from '../../_models/list-coffee.interface';

@Component({ selector: 'app-detail', templateUrl: './detail.component.html', styleUrl: './detail.component.scss' })
export class DetailComponent implements OnInit {
  
  coffeShopDetail!: CoffeeShopDetail;
  coffeeShopId: string | null = null;
  CoffeTypesEnum = CoffeTypesEnum;
  ProductTag = ProductTagEnum;

  constructor (
    private listCoffeeShopService : ListCoffeeShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coffeeShopId = this.route.snapshot.paramMap.get('id');

    this.coffeeShopId ? this.getCoffeeShopById(this.coffeeShopId) : '';
  }

  getClassFromEnum(product: string): string {
    return this.ProductTag[product as keyof typeof ProductTagEnum] || '';
  }

  getCoffeeShopById(id:string) {
    this.listCoffeeShopService.getCoffeeShopById(id).subscribe({
      next: (res) => {
        this.coffeShopDetail = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  getEnumFromCoffeTypes(coffeType: string): string {
    return this.CoffeTypesEnum[coffeType as keyof typeof CoffeTypesEnum] || '';
  }
  
}
