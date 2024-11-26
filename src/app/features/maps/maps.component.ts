import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';
import { ListCoffeeShopService } from '../coffe-shop/_services/list-coffee-shop.service';
import { CoffeeShop } from '../coffe-shop/_models/list-coffee.interface';
import { MapAdvancedMarker, MapInfoWindow, MapMarker } from '@angular/google-maps';

type MarkerPosition = google.maps.LatLngLiteral & { content: Node | google.maps.marker.PinElement | null };

@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  options: google.maps.MapOptions = {
    center: {lat: -30.03522036200517, lng: -51.22660642808879},
    zoom: 12,
  };
 
  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};
  advancedMarkerPositions: MarkerPosition[] = [];
  listCoffeeShop: CoffeeShop[] = [];
  loading: boolean = false;
  ProductTag = ProductTagEnum;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}

  ngOnInit() {
    this.getAllCoffeeShop();
  }

  addAdvancedMarker(lat: number, lng: number) {
    const marker = "../../../assets/images/marker.png";
    const imgTag = document.createElement("img");
    imgTag.src = marker;

    this.advancedMarkerPositions.push({
      lat: lat,
      lng: lng,
      content: imgTag
    });
  }

  getAllCoffeeShop(tags?: ProductTagEnum[]) {
    this.loading = true;
    this.advancedMarkerPositions = [];
    this.listCoffeeShopService.getAllCoffeeShop(tags ? tags : undefined).subscribe({
      next: (res: CoffeeShop[]) => {
        this.listCoffeeShop = res;

        this.listCoffeeShop.map((item)=>{
          this.addAdvancedMarker(item.latitude, item.longitude);
        })

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err)
      }
    })
  }
    
  onFiltersChanged(activeFilters: ProductTagEnum[]): void {
    this.getAllCoffeeShop(activeFilters)
  }

  openInfoWindow(marker: MapAdvancedMarker) {
    this.infoWindow.open(marker);
  }
}
