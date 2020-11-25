import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimacionBasicaComponent } from './animacion-basica/animacion-basica.component';
import { ModoAnimacionComponent } from './modo-animacion/modo-animacion.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacionBasicaComponent,
    ModoAnimacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
