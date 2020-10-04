import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IARTICLE, IComment } from '../Articles/article';
import { ArticleService } from '../Articles/article.service';

@Component({
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{
  pageTitle: string = 'Article Details'
  @Input () article: IARTICLE;
  addMode:boolean

  constructor (private articleService: ArticleService, private route: ActivatedRoute){}

  ngOnInit(){
     this.article = this.articleService.getArticle(this.route.snapshot.params['heading'])
  }

  addComment(){
    this.addMode = true
  }

  saveNewComment(comment: IComment){
    const newId = Math.max.apply(null, this.article.comments.map(c => c.id)); //assigning new comment id since it was set to undefined in CreateCommentComponent(saveComment)
    comment.id = newId + 1
    this.article.comments.push(comment)
    this.articleService.updateArticle(this.article) // update the article
    this.addMode = false
  }

  cancelAddComment(){
    this.addMode = false
  }
}
