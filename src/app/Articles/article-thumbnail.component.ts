import { Component, Input } from "@angular/core";
import { IARTICLE } from './article';

@Component({
  selector: 'article-thumb',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleThumbnailComponent{
  @Input() articles: IARTICLE
}
