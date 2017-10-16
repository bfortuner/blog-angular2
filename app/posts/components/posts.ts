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
    'title': 'Intro to threads and processes in python',
    'desc': 'Beginner\'s guide to parallel programming',
    'url' : '//medium.com/@bfortuner/python-multithreading-vs-multiprocessing-73072ce5600b',
    'created': 'August 2017'
  },
  {
    'title': 'Can neural networks solve any problem?',
    'desc': 'Visualizing the Universal Approximation Theorem',
    'url' : '//medium.com/towards-data-science/can-neural-networks-really-learn-any-function-65e106617fc6',
    'created': 'March 2017'
  },
  {
    'title': 'Linear algebra cheat sheet for deep learning',
    'desc': 'Beginner\'s guide to commonly used operations',
    'url' : '//medium.com/towards-data-science/linear-algebra-cheat-sheet-for-deep-learning-cd67aba4526c',
    'created': 'March 2017'
  },
  {
    'title': 'Building your own deep learning box',
    'desc': 'The bumpy road to my first deep learning rig',
    'url' : '//medium.com/towards-data-science/building-your-own-deep-learning-box-47b918aea1eb',
    'created': 'February 2017'
  },
  {
    'title': 'Fasting for five days',
    'desc': 'Learnings and impact on epileptic auras, weight, and mental focus.',
    'url' : '//medium.com/@bfortuner/how-i-survived-fasting-for-five-days-using-one-weird-trick-8629166bf2ad',
    'created': 'October 2016'
  },
  {
    'title': 'Python unit testing with Pytest and Mock',
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
