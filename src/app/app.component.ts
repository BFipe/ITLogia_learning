import {Component, HostListener} from '@angular/core';
import { Scroll } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Аренда автомобилей';

constructor(private appService: AppService){
}
  priceForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZА-Я][a-zа-я]{2,}$|^[A-ZА-Я][a-zа-я]{2,}\s[A-ZА-Я][a-zа-я]{2,}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+*\d{12}$/)]),
    car: new FormControl('', Validators.required),
  });


  carsData : any;

  ngOnInit(){
    this.appService.getCarsData().subscribe(data => this.carsData = data);
  }

  onSubmit(){
    if(this.priceForm.valid){
    this.appService.sendQuery(this.priceForm.value).subscribe(
      {
        next: (response : any) => {
          alert(response.message);
          this.priceForm.reset();
        },
        error: (responce) => {
          alert(responce.error.message);
        }
      });
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
