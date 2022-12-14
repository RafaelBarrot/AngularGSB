import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import { Frais} from "./metier/Frais";
import {AjoutfichefraisComponent} from "./ajoutfichefrais/ajoutfichefrais.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";

const routes: Routes = [
  {path:'', redirectTo: '/connexion',pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'Listefichefrais',component:ListefichefraisComponent},
  {path:'modifierFrais/:id', component:FichefraisComponent},
  {path:'ajouterFrais', component:AjoutfichefraisComponent},
  {path:'accueil', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
