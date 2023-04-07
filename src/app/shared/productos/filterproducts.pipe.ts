import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/products.model';
@Pipe({
  name: 'filterproducts'
})
export class FilterproductsPipe implements PipeTransform {

  transform(value: Product[], buscaritem?: string): Product[] {
    if (!buscaritem) {
    return value;
  }
  return value.filter((product)=>{
    return product.name.toLocaleLowerCase().includes(buscaritem.toLocaleLowerCase())
  });
}
}