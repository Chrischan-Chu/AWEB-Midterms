import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  presentDate: Date = new Date(); 
  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  testObject: { name: string, age: number, food: string } = {
    name: 'Christian Ralph Tan ',
    age: 23,
    food: 'Kare - Kare'
  };  

  price: number = 1000;

  Fruits: string[] = ["Kare-Kare", "Sinigang", "Adobo", "Bulalo", "Siomai"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}
