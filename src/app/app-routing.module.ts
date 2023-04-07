import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'gestion',
    component: GestionPageComponent,
  },
  {
    path: 'products',
    component: ProductosPageComponent,
  },
  {
    path: 'products/:id',
    component: ProductosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
