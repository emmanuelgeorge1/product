import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ProductList: Array<any> = [
    {
      product: 'Printer',
      price: 18000,
    },
    { product: 'Headphone', price: 1000 },
    { product: 'scanner', price: 11000 },
  ];
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      prices: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      total: [null, []],
    });
  }
  get f() {
    return this.productForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      const total =
        this.productForm.get('prices').value *
        this.productForm.get('quantity').value;
      this.productForm.patchValue({ total: total });
      console.log(total);
    }
  }
  prices: any;
  changeProducts(count) {
    let price = count.target.value;
    this.prices = this.ProductList.find((pro) => pro.product == price).price;
    this.productForm.patchValue({ prices: this.prices });
  }
  calculate() {}
}
