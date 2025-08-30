import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    CheckoutComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    CartsComponent,
    TestComponent,
    CartsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
