import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KalkulatorNwdComponent } from './kalkulator-nwd/kalkulator-nwd.component';
import { ListaObiektowComponent } from './lista-obiektow/lista-obiektow.component';
import { FormularzComponent } from './formularz/formularz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KalkulatorNwdComponent,
    ListaObiektowComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
