import { Component } from '@angular/core';
import { AuthService } from './user';
import { IARTICLE, ArticleService } from './Articles/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RinzyReviews';
  searchTerm: string = "";
  characters = [
    'Ant-man',
    'Aquaman',
    'The Avengers',
    'Batgirl',
    'batwoman',

  ]
  constructor(public auth: AuthService, private articleService: ArticleService){}


}
