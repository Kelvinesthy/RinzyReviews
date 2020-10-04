import { Component, Input } from "@angular/core";
import { IComment } from '../Articles/article';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styles: [`
    .well h4{
      color: brown;
      margin-bottom: 20px;
    }
    .well h6{
      color: rgba(0, 0, 0, 0.8);
      margin-left: 8vh;
    }
    .sect{border: solid black 1px;}
  `]
})
export class CommentListComponent {
  @Input () comments:IComment
}
