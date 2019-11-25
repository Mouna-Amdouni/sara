import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles.service';
import { Article} from 'src/app/Article';
import{Router} from'@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesProduits :Article[];
  image=['assets/im1.jpg','assets/im2.jpg',
'assets/im3.jpg','assets/im4.jpg','assets/im5.jpg'];

  constructor(private articlesService:ArticlesService, private router:Router) { }
  menu(){
  this.router.navigate(['/affichage']);
  }
ajout(){
  this.router.navigate(['/ajout']);
}
  ngOnInit() {
    this.lesProduits = this.articlesService.products;

  }

}
