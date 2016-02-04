import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

interface Url {
  name: string;
  link: string;
}

interface Post {
  title: string;
  desc: string;
  url: string;
  created: string;
}

var posts: Post[] = [
  {
    'title': 'Which Startup Industry Should I Join??',
    'desc': 'A short overview of the top startup industries by data from crunchbase.',
    'url' : '//medium.com/%40bfortuner/publications',
    'created': 'December 2015'
  },
  {
    'title': 'My Second Blog Entry',
    'desc': 'A short overview of the top startup industries by data from crunchbase.',
    'url' : '//medium.com/%40bfortuner/publications',
    'created': 'October 2015'
  },
  {
    'title': 'First Blog Entry Ever',
    'desc': 'A short overview of the top startup industries by data from crunchbase.',
    'url' : '//medium.com/%40bfortuner/publications',
    'created': 'September 2014'
  }
];

@Component({
  selector: 'posts',
  templateUrl: './posts/components/posts.html',
  styleUrls: ['./posts/components/posts.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PostsCmp {
  public posts = posts;
}
