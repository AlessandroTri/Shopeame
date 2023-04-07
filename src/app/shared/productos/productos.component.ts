import { Component, Input, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from 'src/app/interfaces/products.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  @Input() product!: Product;
  http = inject(HttpClient);
  @Input() estrellas: any;
  
  
  
  constructor(private servicio: ProductsService) {}
  
  ngOnInit(): void {
    this.estrellas = this.calcularEstrellas(this.product.stars);
  }



calcularEstrellas(stars: number): string {
  let starRating = '';
  for (let i = 0; i < stars; i++) {
    starRating += '★';
  }
  return starRating;
}

  eliminarProducto() {
    console.log(this.product.id);
    this.servicio.deleteProducts(this.product.id)
    location.reload();
  }
}

