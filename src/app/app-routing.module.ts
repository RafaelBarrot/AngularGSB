import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";

const routes: Routes = [
  {path:'', redirectTo: '/connexion',pathMatch:'full'},
  {path:'Listefichefrais',component:ListefichefraisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
