import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { AffichageComponent } from './application/affichage/affichage.component';
import { AjoutComponent } from './application/ajout/ajout.component';
import { DetailComponent } from './application/detail/detail.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ProduitComponent } from './application/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    AffichageComponent,
    AjoutComponent,
    DetailComponent,
    ErreurComponent,
    MenuComponent,
    ProduitsComponent,
    ProduitComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
