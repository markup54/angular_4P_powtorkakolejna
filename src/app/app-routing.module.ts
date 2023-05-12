import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalkulatorNwdComponent } from './kalkulator-nwd/kalkulator-nwd.component';
import { ListaObiektowComponent } from './lista-obiektow/lista-obiektow.component';
import { FormularzComponent } from './formularz/formularz.component';

const routes: Routes = [
  {path:'nwd',component:KalkulatorNwdComponent},
  {path:'lista',component:ListaObiektowComponent},
  {path:'formularz',component:FormularzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
