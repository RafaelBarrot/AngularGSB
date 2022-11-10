import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import { Fichefrais} from "./metier/Fichefrais";
import {AjoutfichefraisComponent} from "./ajoutfichefrais/ajoutfichefrais.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes: Routes = [
  {path:'', redirectTo: '/connexion',pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'Listefichefrais',component:ListefichefraisComponent},
  {path:'modifierFrais/:id', component:Fichefrais},
  {path:'ajouterFrais', component:AjoutfichefraisComponent},
  {path:'accueil', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
