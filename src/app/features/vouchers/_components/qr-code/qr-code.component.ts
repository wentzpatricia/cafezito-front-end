import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})

export class QrCodeComponent implements OnInit {
  data: any;

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    // Acessando os dados passados para o dialog
    this.data = this.config.data;
    console.log(this.data);
  }
}
