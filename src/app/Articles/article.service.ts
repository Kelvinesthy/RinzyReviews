import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { IARTICLE } from './article';

@Injectable()
export class ArticleService{
  getArticles (): Observable <IARTICLE[]> {
    let subject = new Subject<IARTICLE[]> ()
    setTimeout(() => {subject.next(ARTICLES); subject.complete(); }, 200) //This delays the page for extra 200 seconds before its displayed on the page for the user
    return subject
  }

  getArticle( heading:string ):IARTICLE {
    return ARTICLES.find(article => article.heading === heading)
  }
  saveArticle(article){
    article.heading = "for you"
    article.comment = []
    ARTICLES.push(article) //this will add the new article to our article array
  }


  updateArticle(article){
    let index = ARTICLES.findIndex(x => x.heading = article.heading )
    ARTICLES[index] = article
  }




}
const ARTICLES: IARTICLE[] = [
  {
    heading: 'Adapt is not a way of life but just a movitiavtion to...',
    imageUrl: '../../assets/IMG-20200627-WA0023.jpg',
    date: '24 July, 2019',
    message: 'August 08, 2020 |  | leave a comment',
    comments: [
      {
        id: 1,
        name: 'Gachi',
        email: 'www.daddygachi@yahoo.com',
        abstract: 'Fantastic write up as always'
      }
    ]
  },
{
  imageUrl: '../../assets/IMG-20200723-WA0030.jpg',
  heading: 'LIFE IS SWEET',
  date: '30 June, 2019',
  message: 'june 04, 2020 | leave a comment',
  comments: [
    {
      id: 1,
      name: 'Gachi',
      email: 'www.daddygachi@yahoo.com',
      abstract: 'Fantastic write up as always'
    },
    {
      id: 2,
      name: 'Kelvin',
      email: 'www.kelvinesthy.com',
      abstract: 'This article is absolutly rubbish'
    }
  ],
},

{
  imageUrl: '../../assets/IMG-20200723-WA0034.jpg',
  heading: 'fuck all this station always',
  date: '2 May, 2019',
  message: 'December 9, 2020 | leave a comment',
  comments: [
    {
      id: 1,
      name: 'Gachi',
      email: 'www.daddygachi@yahoo.com',
      abstract: 'Fantastic write up as always'
    },
    {
      id: 2,
      name: 'Kelvin',
      email: 'www.kelvinesthy.com',
      abstract: 'This article is absolutly rubbish'
    },
    {
      id: 3,
      name: 'Whixxu',
      email: 'www.fuckboy.com',
      abstract: 'Fuck u rinzy'
    }
  ],
},
{
  imageUrl: '../../assets/IMG-20200723-WA0035.jpg',
  heading: 'Netflix is bad at the cinemaitic movie business as always',
  date: '13 Febuary, 2019',
  message: 'March 2, 2020 | leave a comment',
  comments: [
    {
      id: 1,
      name: 'Gachi',
      email: 'www.daddygachi@yahoo.com',
      abstract: 'Fantastic write up as always'
    }
  ],
},
{
  imageUrl: '../../assets/IMG-20200723-WA0043.jpg',
  heading: 'this is always life at its peak',
  date: '25 December, 2018',
  message: 'january 23, 2020 | leave a comment',
  comments: [],
}
]
