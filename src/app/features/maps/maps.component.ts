import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';
import { ListCoffeeShopService } from '../coffe-shop/_services/list-coffee-shop.service';
import { CoffeeShop } from '../coffe-shop/_models/list-coffee.interface';
import { MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';

type MarkerPosition = google.maps.LatLngLiteral & {
  content: Node | google.maps.marker.PinElement | null;
  coffeeShopData?: CoffeeShop;
};

@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChildren('markerElem') markers!: QueryList<MapAdvancedMarker>;

  options: google.maps.MapOptions = {
    center: {lat: -30.03522036200517, lng: -51.22660642808879},
    zoom: 12,
    mapId: 'ad03ce7bab15585a'
  };
 
  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};
  advancedMarkerPositions: MarkerPosition[] = [];
  listCoffeeShop: CoffeeShop[] = [];
  loading: boolean = false;
  selectedCoffeeShop: CoffeeShop | null = null; 

  ProductTag = ProductTagEnum;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}

  ngOnInit() {
    this.getAllCoffeeShop();
  }

  addAdvancedMarker(lat: number, lng: number, coffee: CoffeeShop) {
    const marker = "../../../assets/images/marker.png";
    const imgTag = document.createElement("img");
    imgTag.src = marker;

    this.advancedMarkerPositions.push({
      lat: lat,
      lng: lng,
      content: imgTag,
      coffeeShopData : coffee
    });
  }

  getAllCoffeeShop(tags?: ProductTagEnum[]) {
    this.loading = true;
    this.advancedMarkerPositions = [];
    this.listCoffeeShopService.getAllCoffeeShop(tags ? tags : undefined).subscribe({
      next: (res: CoffeeShop[]) => {
        this.listCoffeeShop = res;

        this.listCoffeeShop.map((item)=>{
          this.addAdvancedMarker(item.latitude, item.longitude, item);
        })

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err)
      }
    })
  }

  highlightMarker(latitude: number, longitude: number, id: string) {
    this.options = {
      ...this.options,
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    };
  
    const markerIndex = this.listCoffeeShop.findIndex(item => item.id === id);
    const marker = this.markers.toArray()[markerIndex];
    const coffeeShop = this.listCoffeeShop.find(item => item.id === id) || null;
  
    if (marker && coffeeShop) {
      this.openInfoWindow(marker, coffeeShop);
    }
  }
  

    
  onFiltersChanged(activeFilters: ProductTagEnum[]): void {
    this.getAllCoffeeShop(activeFilters)
  }

  openInfoWindow(marker: MapAdvancedMarker, coffeeShop?: CoffeeShop) {
    if (coffeeShop) {
      this.selectedCoffeeShop = coffeeShop;
    } else {
      this.selectedCoffeeShop = null;
    }
    this.infoWindow.open(marker);
  }

}
