import { Component } from '@angular/core';
import { Foodthings } from '../Services/food.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private product:Foodthings,private http:HttpClient ){}
  productarr:any[];
  ngOnInit()
  {
    this.getproducts();

  }

  addtocart(prodobj:any)
  {
    const url='http://localhost:3000/addtocartitems';
    this.http.post(url,prodobj).subscribe((res)=>
    {
      console.log(res);
    })

    
  }

  // anyoffer:``,
  // image:``,
  // category:"",
  // model:'',
  // mrp:0,
  // price:0,
  // star:0

  getproducts()
  {
    this.product.getproducts().subscribe((res)=>
    {
      this.productarr=res;
    })
  }

}
