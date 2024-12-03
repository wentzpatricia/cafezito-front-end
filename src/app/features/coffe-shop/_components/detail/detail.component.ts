import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';

import { CoffeeShopDetail} from '../../_models/list-coffee.interface';
import { CoffeTypesEnum, ProductTagEnum } from '../../_models/coffee-shop.enum';

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

  getEnum(product: string): string {
    return this.ProductTag[product as keyof typeof ProductTagEnum] || '';
  }

  getClassFromEnum(product: string): string {
    const value = this.ProductTag[product as keyof typeof ProductTagEnum];
    if (!value) return '';
  
    return value
      .toLowerCase() 
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') 
      .replace(/[^a-z0-9\-]/g, '');
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

  redirectTo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  
}
