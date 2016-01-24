import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {PostsCmp} from '../../posts/components/posts';
import {ProjectsCmp} from '../../projects/components/projects';
import {AboutCmp} from '../../about/components/about';
import {BioCmp} from '../../bio/components/bio';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './app/components/app.html',
  styleUrls: ['./app/components/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: PostsCmp, as: 'Posts' },
  { path: '/projects', component: ProjectsCmp, as: 'Projects' },
  { path: '/bio', component: BioCmp, as: 'Bio' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {}
