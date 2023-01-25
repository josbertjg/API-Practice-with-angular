import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTS
import { LoginComponent } from './login/login.component';
//MODULES
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//SERVICES
import { AccessService } from './services/access.service';
import { PeliculasService } from "../app/services/peliculas.service";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LanguajesPipe } from './pipes/languajes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductoComponent,
    LanguajesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AccessService,PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
