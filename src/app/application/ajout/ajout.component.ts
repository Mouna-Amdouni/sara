import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(private router:Router) { }
menu(){
  this.router.navigate(['/affichage']);
}
  ngOnInit() {
  }

}
