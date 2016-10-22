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
    'title': 'Fasting For Five Days',
    'desc': 'Learnings and impact on epileptic auras, weight, and mental focus.',
    'url' : '//medium.com/@bfortuner/how-i-survived-fasting-for-five-days-using-one-weird-trick-8629166bf2ad',
    'created': 'October 2016'
  },
  {
    'title': 'Python Unit Testing with Pytest and Mock',
    'desc': 'An example-based tutorial on writing unit tests in Python with two helpful libraries',
    'url' : '//medium.com/@bfortuner/python-unit-testing-with-pytest-and-mock-197499c4623c',
    'created': 'January 2016'
  },
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
