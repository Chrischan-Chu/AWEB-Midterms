import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NewCmpComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NG Services';
  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService) {
    this.todaydate = this.myservice.showTodayDate()
    this.componentproperty = this.myservice.serviceproperty;
  }
}
