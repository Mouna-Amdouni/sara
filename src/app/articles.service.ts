import { Injectable } from '@angular/core';
import { Article } from "./Article";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

 products =[
    new Article(156, 320,"Robe Rouge "),
    new Article(157, 420,"Robe Jaune"),
    new Article(158, 230,"Robe Beige "),
    new Article(159, 150,"Robe Blanc Salé "),
    new Article(160,500 ,"Robe Blanche "),

  ]
  constructor() { }
}
