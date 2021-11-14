import { Component, OnInit } from '@angular/core';
import { Auto } from '../../model/auto';

import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css'],
})
export class AddAutoComponent implements OnInit {
  auto = new Auto();
  submitted = false;
  msgError = '';

  constructor(private autoService: AutoService) {
    // this.getDuenos();
  }

  ngOnInit(): void {}

  suaveAuto(): void {
    const data = {
      name: this.auto.name,
      miles_per_Gallon: this.auto.miles_per_Gallon,
      cylinders: this.auto.cylinders,
      displacement: this.auto.displacement,
      horsepower: this.auto.horsepower,
      weight_in_lbs: this.auto.weight_in_lbs,
      acceleration: this.auto.acceleration,
      year: this.auto.year,
      origin: this.auto.origin,
    };
    console.log('que contiene', this.auto.name);
    this.autoService.create(data).subscribe(
      (data) => {
        this.submitted = true;
        console.log(data);
      },
      (error) => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error);
      }
    );
  }

  // getDuenos() {
  //   this.duenioService.getAll().subscribe(
  //     (data) => {
  //       this.duenoSet = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  newAuto() {
    this.submitted = false;
    this.auto.name = '';
    this.auto.miles_per_Gallon = 0;
    this.auto.cylinders = 0;
    this.auto.displacement = 0;
    this.auto.horsepower = 0;
    this.auto.weight_in_lbs = 0;
    this.auto.acceleration = 0;
    this.auto.year;
    this.auto.origin = '';
  }
}
