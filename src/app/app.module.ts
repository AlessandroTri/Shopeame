import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductosComponent } from './shared/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterproductsPipe } from './shared/productos/filterproducts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GestionPageComponent,
    ProductosPageComponent,
    HomePageComponent,
    ProductosComponent,
    FilterproductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
