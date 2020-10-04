import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ArticleService } from "../Articles/article.service";
import { map } from "rxjs/operators";

@Injectable()

export class ArticleListResolver implements Resolve <any> {

constructor (private articleService: ArticleService){} //This makes sure the page loads altogether before passsing it to the page

  resolve(){
    return this.articleService.getArticles().pipe(map(articles => articles))
  }
}
