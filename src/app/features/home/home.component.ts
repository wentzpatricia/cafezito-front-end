import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { 
  
  graosHome = '../../../assets/images/graoshome.png';
  cafezitoHomeUm = '../../../assets/images/cafezito-home-1.png';
  cafezitoHomeDois = '../../../assets/images/cafezito-home-2.png';
  cafezitoHomeTres = '../../../assets/images/cafezito-home-3.png';
  cafezitoHomeQuatro = '../../../assets/images/cafezito-home-4.png';
  cafezitoHomeCinco = '../../../assets/images/cafezito-home-5.png';
  placaCoffee = '../../../assets/images/placa-coffee.png';
  homemCafeteria = '../../../assets/images/homem-cafeteria1.png';
  aguaGas = '../../../assets/images/agua-gas-cafe.png';
  logo = '../../../assets/icones/logo-dark.png'

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }


}
