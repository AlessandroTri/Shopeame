import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.model';
import { ProductsService } from 'src/app/shared/products.service';


@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent implements OnInit {

  productos!: any;
  datos: any;
  datosFiltrados: Product[] = []
  dataBase: any;
  numeroProductos: number = 0;
  filtro: any;
  buscaritem: string =""



constructor(private servis: ProductsService) {}

ngOnInit(): void {
  this.servis.getProducts().subscribe((res: any) => {
    this.productos = res;
    this.datos = res;
    this.dataBase = res;
    this.filterproductos();
    console.log(res);
  })
}


filterproductos() {
  if (this.filtro === '') {
    this.datos = this.dataBase;
  } else {
    this.datos = this.dataBase.filter((producto: any) => {
      return producto.name.toLowerCase().includes(this.filtro.toLowerCase());
    });
  }
  this.numeroProductos = this.datos.length;
}
}
