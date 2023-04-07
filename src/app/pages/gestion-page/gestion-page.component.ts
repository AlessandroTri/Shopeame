import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss'],
})
export class GestionPageComponent {
  productos: any = {
    id: null,
    name: '',
    price: null,
    description: '',
    stars: null,
    image: '',
  };

  datos: any;
  id: any;
  name: any = '';
  price: any;
  description: any;
  image: any;
  stars: any;
  productoEncontrado: any = {};
  nombre: any;

  constructor(private ProductosService: ProductsService) {}

  crearProduct() {
    this.ProductosService.postProducts(this.productos);
    console.log(this.productos);
  }

  buscarProducto() {
    this.ProductosService.getNameProducts(this.nombre).subscribe(
      (producto: any) => {
        if (producto) {
          this.productos = producto;
          this.id = this.productos.id;
          this.name = this.productos.name;
          this.price = this.productos.price;
          this.description = this.productos.description;
          this.image = this.productos.image;
          this.stars = this.productos.stars;
        } else {
          console.log('Producto no encontrado');
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  modificarProducto() {
    const productoModificado = {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image,
      stars: this.stars,
    };
     console.log(productoModificado);
     
    this.ProductosService.putProduct(this.id, productoModificado).subscribe(
      (response:any) => {
        console.log('Producto modificado exitosamente');
        location.reload();
      },
      (error:any) => {
        console.log('Producto no modificado. Error:', error);
      }
    );

    location.reload();
  }

  
}
