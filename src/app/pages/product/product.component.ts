import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productForm = new FormGroup({
    name: new FormControl("Name",[Validators.required, Validators.max(10), Validators.min(3)]),
    description: new FormControl("",[Validators.required]),
    price: new FormControl(0,Validators.required)
  })

  submit(){
    //show overall status with validations in the form
    console.log(this.productForm);
    //create a json object with the product information
    console.log(this.productForm.value);
  }

}
