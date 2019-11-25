import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
identifiant:number;
prixx:number;
libel:string;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.prixx = this.activatedRoute.snapshot.params['prix'];
this.libel=this.activatedRoute.snapshot.params['libelle'];
    this.identifiant = this.activatedRoute.snapshot.params['id'];

  }

}
