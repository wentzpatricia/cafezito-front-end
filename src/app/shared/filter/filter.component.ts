import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductTagEnum } from '../../features/coffe-shop/_models/coffee-shop.enum';

@Component({ selector: 'app-filter', templateUrl: './filter.component.html', styleUrl: './filter.component.scss' })
export class FilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<ProductTagEnum[]>();

  form: FormGroup;
  productTags = Object.entries(ProductTagEnum);

  constructor(private fb: FormBuilder) {
    const controls = this.productTags.reduce<{ [key in ProductTagEnum]?: boolean[] }>((acc, [key]) => {
      acc[key as ProductTagEnum] = [false];
      return acc;
    }, {});
  
    this.form = this.fb.group(controls);
  }
  
  ngOnInit(): void {
    this.form.valueChanges.subscribe(filters => {
      const activeFilters = Object.keys(filters)
        .filter(key => filters[key])
        .map(key => key as ProductTagEnum);

      this.filtersChanged.emit(activeFilters);
    });
  }
  
}
