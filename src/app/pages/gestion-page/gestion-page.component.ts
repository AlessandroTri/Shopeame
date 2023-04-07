import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/products.model';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent {
  productos: Product = {
    id: 0,
    name:"",
    price: 0,
    description: "",
    stars: 0,
    image:"",
      }
    
      datos: any;
      id: any;
      name: any = "";
      price: any;
      description: any;
      image: any;
      stars: any;
      
      constructor(private ProductosService: ProductsService){}
    
      crearProduct(){ 
      this.ProductosService.postProducts(this.productos)
      console.log(this.productos);
    
      }
    
        modificarProducto(){
          const productoModificado = {
            id:this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image,
            stars: this.stars
          };
      
          this.ProductosService.putProducts(this.name, productoModificado)
      
          this.resetForm()
        
        }
        resetForm() {
          this.id =""
          this.name = "";
          this.price = "";
          this.description = "";
          this.image = "";
          this.stars = "";
        }
      }
     
        

