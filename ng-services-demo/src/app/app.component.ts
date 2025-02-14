import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  } [] = [];

  public products: {
    id: string;
    productname: string;
    description: string;
    price: number;
  } [] = [];

  constructor (
    private _employeeService: EmployeeService, 
    private _productsService: ProductsService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}