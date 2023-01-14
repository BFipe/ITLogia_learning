import {Component, HostListener} from '@angular/core';
import { Scroll } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Аренда автомобилей';

  priceForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZА-Я][a-zа-я]{2,}$|^[A-ZА-Я][a-zа-я]{2,}\s[A-ZА-Я][a-zа-я]{2,}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+*\d{12}$/)]),
    car: new FormControl('', Validators.required),
  });

  carsData = [
    {
      image : "1.png",
      name : "Lamborghini Huracan Spyder",
      gear : "Полный",
      engine : 5.2,
      seat: 2
    },
    {
      image : "2.png",
      name : "Chevrolet Corvette",
      gear : "Полный",
      engine : 6.2,
      seat: 2
    },
    {
      image : "3.png",
      name : "Ferrari California",
      gear : "Полный",
      engine : 3.9,
      seat: 4
    },
    {
      image : "4.png",
      name : "Lamborghini Urus",
      gear : "Полный",
      engine : 4.0,
      seat: 5
    },
    {
      image : "5.png",
      name : "Audi R8",
      gear : "Полный",
      engine : 5.2,
      seat: 2
    },
    {
      image : "6.png",
      name : "Chevrolet Camaro",
      gear : "Полный",
      engine : 2.0,
      seat: 4
    },
  ];

  onSubmit(){
    if(this.priceForm.valid){
      alert("Спасибо за заявку, с вами свяжутся в ближайшее время!");
      this.priceForm.reset();
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 30) + 'px,' + ((e.clientY * 0.3) / 30) + 'px,0px)'};
  }
  
  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }
}
