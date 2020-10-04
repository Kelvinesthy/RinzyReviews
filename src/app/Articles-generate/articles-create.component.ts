import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../user/auth.service";
import { ArticleService } from '../Articles/article.service';

@Component ({
  templateUrl: './articles-create.component.html',
  styles: [`
  em {float:right; color:#e04c65; padding-left: 10px}
  .error ::-webkit-input-placeholder {color: #999;}
  .error input {background-color: #e3c3c5;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
`]
})
export class ArticleCreateComponent{
  newArticle
  isDirty:boolean=true
  constructor(private router: Router, public auth: AuthService, private articleService: ArticleService ){}

  saveArticle(formValues){
    this.articleService.saveArticle(formValues)
    this.isDirty = false
    this.router.navigate(['/articles'])
  }

  cancel (){
    this.router.navigate(['/articles'])
  }



}
