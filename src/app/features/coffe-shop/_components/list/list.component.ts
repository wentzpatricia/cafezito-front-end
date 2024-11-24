import { Component, OnInit } from '@angular/core';
import { ListCoffeeShopService } from '../../_services/list-coffee-shop.service';

import { CoffeeShop } from '../../_models/list-coffee.interface';
import { ProductTagEnum } from '../../_models/coffee-shop.enum';

@Component({ selector: 'app-list', templateUrl: './list.component.html', styleUrl: './list.component.scss' })
export class ListComponent implements OnInit {

  listCoffeeShop: CoffeeShop[] = [];
  loading: boolean = false;
  ProductTag = ProductTagEnum;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}
  
  ngOnInit(): void {
    this.getAllCoffeeShop();
  }

  getAllCoffeeShop(tags?: ProductTagEnum[]) {
    this.loading = true;

    this.listCoffeeShopService.getAllCoffeeShop(tags ? tags : undefined).subscribe({
      next: (res: CoffeeShop[]) => {
        this.listCoffeeShop = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err)
      }
    })
  }

  getEnum(product: string): string {
    return this.ProductTag[product as keyof typeof ProductTagEnum] || '';
  }

  getClassFromEnum(product: string): string {
    console.log(product)
    const value = this.ProductTag[product as keyof typeof ProductTagEnum];
    if (!value) return '';
  
    return value
      .toLowerCase() 
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') 
      .replace(/[^a-z0-9\-]/g, '');
  }
  

  onFiltersChanged(activeFilters: ProductTagEnum[]): void {
    this.loading = true;
    this.getAllCoffeeShop(activeFilters)
  }
  
}
