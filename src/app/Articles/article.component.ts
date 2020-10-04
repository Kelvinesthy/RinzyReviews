import { Component, OnInit } from "@angular/core";
import { IARTICLE } from "./article";
import { ArticleService } from './article.service';
import { ActivatedRoute } from "@angular/router";

declare let toastr: any
@Component({
  selector: 'article-root',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{
  article: IARTICLE[]

  constructor(private articleService: ArticleService, private route: ActivatedRoute){
  }

  ngOnInit(){
    this.article = this.route.snapshot.data['articles']
  }


}
