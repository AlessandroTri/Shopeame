import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   constructor(private http: HttpClient) { }
  getProducts() { 
    return this.http.get('http://localhost:3000/products')
      
}

 postProducts(newProduct: Product){
  this.http.post('http://localhost:3000/products', newProduct).subscribe();
 } 

 putProducts(id:number, modific: Product){
this.http.put<Product>('http://localhost:3000/products/'+id, modific).subscribe();
 }

 deleteProducts(Product:any){
  this.http.delete<Product>('http://localhost:3000/products/'+Product).subscribe();
 }
}

