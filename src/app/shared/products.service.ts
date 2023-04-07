import { Product } from 'src/app/interfaces/products.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   constructor(private http: HttpClient) { }
  getProducts() { 
    return this.http.get('http://localhost:3000/products')
      
}

getNameProducts(name: string) {
  return this.http.get<Object[]>('http://localhost:3000/products').pipe(
    map((products: Object[]) => {
      return products.find((p: any) => p.name === name);
    })
  );
}


 postProducts(newProduct: Product){
  this.http.post('http://localhost:3000/products', newProduct).subscribe();
 } 

 putProduct(id:any, data: any) {
  const url = `http://localhost:3000/products/${id}`;
  return this.http.put(url, data);
}

 deleteProducts(Product:any){
  this.http.delete<Product>('http://localhost:3000/products/'+Product).subscribe();
 }
}

