import { Component, OnInit } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';
import { ListCoffeeShopService } from '../coffe-shop/_services/list-coffee-shop.service';
import { CoffeeShop } from '../coffe-shop/_models/list-coffee.interface';

@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent implements OnInit {

  options: google.maps.MapOptions = {
    center: {lat: -30.03522036200517, lng: -51.22660642808879},
    zoom: 12
  };

  listCoffeeShop: CoffeeShop[] = [];
  loading: boolean = false;
  ProductTag = ProductTagEnum;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}

  ngOnInit() {
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
    
  onFiltersChanged(activeFilters: ProductTagEnum[]): void {
    console.log(activeFilters)
  }
}
