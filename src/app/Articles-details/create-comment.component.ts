import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IComment } from "../index";

@Component({
  selector: 'comment-root',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit{
  @Output() saveNewComment = new EventEmitter()
  @Output() cancelAddComment = new EventEmitter()

  newCommentForm: FormGroup
  name: FormControl
  email: FormControl
  abstract: FormControl

  ngOnInit(){
    this.name = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newCommentForm = new FormGroup ({
      name: this.name,
      email: this.email,
      abstract: this.abstract
    })
  }
  saveComment(formValues){
    let comment: IComment = {
      id: undefined,
      name: formValues.name,
      email: formValues.email,
      abstract: formValues.abstract
    }
    this.saveNewComment.emit(comment)
  }
  cancel(){
    this.cancelAddComment.emit()
  }
}
