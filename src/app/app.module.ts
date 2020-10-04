import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  AppComponent,
  ArticleComponent,
  ArticleDetailsComponent,
  ArticleThumbnailComponent,
  ArticleCreateComponent,
  ArticleService,
  TOASTR_TOKEN,
  Toastr,
  ArticleRouteActivator,
  CreateCommentComponent,
  ArticleListResolver,
  AuthService,
  CommentListComponent,
  CategoryComponent,
  ArchiveComponent

} from "./index";
import { HeaderNavComponent } from './Header/header-nav.component';
import { Error404Component } from "./errors/404.component";


import {  } from "./user/user.module";
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';


declare let toastr: Toastr
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    ArticleThumbnailComponent,
    ArticleCreateComponent,
    CreateCommentComponent,
    Error404Component,
    CommentListComponent,
    CategoryComponent,
    ArchiveComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'articles/newarticles', component: ArticleCreateComponent, canDeactivate:['canDeactivateCreateArticle']},
      {path: 'articles', component: ArticleComponent, resolve: {articles: ArticleListResolver}},
      {path: 'articles/:heading', component: ArticleDetailsComponent, canActivate: [ArticleRouteActivator]},
      {path: 'articles/comment/new', component: CreateCommentComponent},
      {path: '404', component: Error404Component},
      {path: '', redirectTo: '/articles', pathMatch: 'full'},
      {path: 'user', loadChildren: './user/user.module#UserModule'}
    ])
  ],
  providers: [
    ArticleService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    ArticleRouteActivator,
    ArticleListResolver,
    AuthService, //this service can be used in all module, but its not the same for imports and delacrations
    {provide: 'canDeactivateCreateArticle', useValue: checkDirtyState},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(component: ArticleCreateComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this Article, do you really want to cancel?')
  return true
}
