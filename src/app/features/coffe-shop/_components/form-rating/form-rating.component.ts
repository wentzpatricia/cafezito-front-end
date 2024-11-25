import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatingService } from '../../_services/rating.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({ selector: 'app-form-rating', templateUrl: './form-rating.component.html', styleUrl: './form-rating.component.scss' })
export class FormRatingComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<any>();

  coffeeShopId: string | null = null;
  form!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private ratingService : RatingService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.createForm();

    this.coffeeShopId = this.route.snapshot.paramMap.get('id');
  }

  createForm(){
    this.form = this.formBuilder.group({
      stars: ['',  Validators.required],
      feedback: ['', Validators.required],
    });
  }

  submitForm() {
    this.loading = true;

    if (this.coffeeShopId)
    this.ratingService.postCoffeeShopRating(this.form.value, this.coffeeShopId).subscribe({
      next: (res) => {
        this.onSubmit.emit(res);

        this.messageService.add({
          severity: 'success',
          summary: 'Successo',
          detail: 'Avaliação realizada!',
        });

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;

        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível realizar sua avaliação, tente novamente mais tarde.',
        });
        console.error(err)
      }
    });
  }


}
