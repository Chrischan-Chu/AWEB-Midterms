import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client-prg';
  httpusers: any;

  constructor (private HttpclientList:HttpclientService) {
    this.HttpclientList.getUsersRemotely().subscribe((data:any) => {
      this.httpusers = data;
    })
  }
}
