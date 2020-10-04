import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ArticleService } from "../Articles/article.service";


@Injectable()

export class ArticleRouteActivator implements CanActivate{
  constructor(private articleService: ArticleService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot){ //this activator is use when a heading doesnt exist, it migrate us to a 404 page
    const articleExists = !!this.articleService.getArticle(route.params['heading'])

    if (!articleExists)
    this.router.navigate(['/404'])

    return articleExists
  }
}
