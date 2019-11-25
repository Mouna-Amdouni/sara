import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichageComponent } from './application/affichage/affichage.component';
import { DetailComponent } from './application/detail/detail.component';
import { AjoutComponent } from './application/ajout/ajout.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { ProduitsComponent } from './application/produits/produits.component';

import { ProduitComponent } from './application/produit/produit.component';
const routes: Routes = [
  {path:'affichage', component:AffichageComponent},
  {path:'ajout', component:AjoutComponent},
    {path:'detail', component:DetailComponent},
    {path:'produits', component:ProduitsComponent},
    {path:'produits/:id/:prix/:libelle', component:ProduitComponent},

    {path:'', redirectTo:'affichage', pathMatch:'full'},
    {path:'**', component:ErreurComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
