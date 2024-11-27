import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '../../../shared/shared.module';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [MenubarModule, SharedModule],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss'
})
export class HeaderHomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'inicio',            
        },
        {
            label: 'sobre',            
        },
        {
            label: 'diferenciais',            
        },
        {
            label: 'quem somos',            
        },
        {
            label: 'Entrar',            
        }
    ];
}
}
  
    