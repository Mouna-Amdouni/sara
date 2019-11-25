import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles.service';
import { Article} from 'src/app/Article';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lesProduits :Article[];
  constructor(private articlesService:ArticlesService) { }
recherche(){
for(let i=0;i<this.lesProduits.length;i++){
  if(this.lesProduits[i].prix<200){
    return this.lesProduits[i].prix;

  }
  
}  
}


  ngOnInit() {
    this.lesProduits = this.articlesService.products;

  }

}
