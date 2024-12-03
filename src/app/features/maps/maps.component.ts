import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';
import { ListCoffeeShopService } from '../coffe-shop/_services/list-coffee-shop.service';
import { CoffeeShop } from '../coffe-shop/_models/list-coffee.interface';
import { MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';

type MarkerPosition = google.maps.LatLngLiteral & {
  content: Node | google.maps.marker.PinElement | null;
  coffeeShopData?: CoffeeShop;
};


@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent implements OnInit, AfterViewInit{
  @ViewChild('autocompleteInput', { static: true }) autocompleteInput!: ElementRef;
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
  placesMarkers: MarkerPosition[] = [];
  selectedCoffeeShop: CoffeeShop | null = null; 

  ProductTag = ProductTagEnum;

  constructor(
    private listCoffeeShopService : ListCoffeeShopService
  ){}

  ngOnInit() {
    this.getAllCoffeeShop();
  }

  ngAfterViewInit() {
    this.initializeAutocomplete();
  }

  addAdvancedMarker(lat: number, lng: number, coffee: CoffeeShop, isFromPlaces: boolean = false) {
    const markerPath = isFromPlaces 
      ? "../../../assets/images/marker-others.png" 
      : "../../../assets/images/marker.png";
  
    const imgTag = document.createElement("img");
    imgTag.src = markerPath;
  
    this.advancedMarkerPositions.push({
      lat: lat,
      lng: lng,
      content: imgTag,
      coffeeShopData: coffee
    });
  }

  clearSearch() {
    this.autocompleteInput.nativeElement.value = '';
    this.placesMarkers = [];
    this.updateAllMarkers();
    this.options.center = { lat: -30.03522036200517, lng: -51.22660642808879 };
    this.options.zoom = 12;
  }
  
  createMarkerIcon(isFromPlaces: boolean): HTMLElement {
    const marker = document.createElement('img');
    marker.src = isFromPlaces ? '../../../assets/images/marker-others.png' : '../../../assets/images/marker.png';
    return marker;
  }
  

  findNearbyCoffeeShops(location: { lat: number; lng: number }) {
    const service = new google.maps.places.PlacesService(document.createElement('div'));
  
    const request = {
      location: new google.maps.LatLng(location.lat, location.lng),
      radius: 2000,
      type: 'cafe',
    };
  
    this.placesMarkers = [];
  
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        results.forEach((place) => {
          if(place && place.geometry && place.geometry.location)
          this.placesMarkers.push({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            content: this.createMarkerIcon(true),
            coffeeShopData: { name: place.name, address: place.vicinity } as CoffeeShop,
          });
        });
  
        this.updateAllMarkers();
      }
    });
  }
  
  
  getAllCoffeeShop(tags?: ProductTagEnum[]) {
    this.loading = true;
    this.listCoffeeShopService.getAllCoffeeShop(tags).subscribe({
      next: (res: CoffeeShop[]) => {
        this.listCoffeeShop = res;
        this.updateAllMarkers();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      }
    });
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

  initializeAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.nativeElement,
      {
        types: ['geocode'],
        componentRestrictions: { country: 'BR' },
      }
    );
  
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
  
        this.options.center = location;
        this.options.zoom = 15;
  
        this.findNearbyCoffeeShops(location);
      }
    });
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

  updateAllMarkers() {
    this.advancedMarkerPositions = [
      ...this.listCoffeeShop.map(shop => ({
        lat: shop.latitude,
        lng: shop.longitude,
        content: this.createMarkerIcon(false),
        coffeeShopData: shop,
      })),
      ...this.placesMarkers
    ];
  }
}
