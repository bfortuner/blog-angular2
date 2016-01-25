import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

interface Url {
  name: string;
  link: string;
}

interface Project {
  title: string;
  desc: string;
  urls: Url[];
  stack: string;
  created: string;
}

var PROJECTS: Project[] = [
  {
    'title': 'BigNeuron',
    'desc': `Fully-managed cloud service for generating 3D neuron reconstructions using auto-scaling, 
             MapReduce, and open-source imaging library, Vaa3D. A collaboration with researchers at 
             the Allen Institute for Brain Science in Seattle.`,
    'urls' : [
      {
        'name' : 'Console',
        'link' : 'http://vaa3d-website.s3-website-us-west-2.amazonaws.com'
      },
      {
        'name' : 'Github (Backend)',
        'link' : 'https://github.com/bfortuner/vaa3d-api'
      },
      {
        'name' : 'Github (Frontend)',
        'link' : 'https://github.com/bfortuner/vaa3d-website'
      },
      {
        'name' : 'BigNeuron Project',
        'link' : 'http://alleninstitute.org/bigneuron/about/'
      }
    ],
    'stack': 'Python, Angular, DynamoDB, Docker, AWS (Autoscaling, ECS, RDS, SQS, SES, S3)',
    'created': '2015'
  },
  {
    'title': 'Problee',
    'desc': `Learn to program without touching a keyboard! Mobile app designed to make learning 
             to code easy using drag-and-drop templates, word banks, and Pandora-style shuffling.`,
    'urls' : [
      {
        'name' : 'Website',
        'link' : 'http://www.problee.com'
      },
      {
        'name' : 'Github',
        'link' : 'http://github.com/bfortuner/probleeyo'
      }
    ],
    'stack': 'MongoDB, Express, AngularJS, Node.js',
    'created': '2014'
  },
  {
    'title': 'Milestone',
    'desc': `Won 1st place at Angel Hack Seattle building a mobile app "Search Engine For Your 
             Dream Job." Uses the LinkedIn API to return aggregate statistics about job roles, 
             universities, degrees, and geographies of employees holding a user's dream job.`,
    'urls' : [
      {
        'name' : 'Github',
        'link' : 'https://github.com/bfortuner/milestone'
      }
    ],
    'stack': 'Node.js, Express, JQuery',
    'created': '2014'
  },
  {
    'title': 'Jimini',
    'desc': `Won audience favorite at Startup Weekend Seattle. Jimini lets users wrap their 
            digital gifts (mp3s, videos) in origami designs they can deliver in person.`,
    'urls' : [
      {
        'name' : 'Github',
        'link' : 'https://github.com/bfortuner/jimini'
      }
    ],
    'stack': 'Python, Django',
    'created': '2013'
  },
  {
    'title': 'Eat My Words',
    'desc': `Won 2nd place at Startup Weekend Seattle making a vocabulary learning game 
            that kids liked with Unity.`,
    'urls' : [
      {
        'name' : 'Demo',
        'link' : 'http://thefunstudio.com/eatmywords/Web.html'
      }
    ],
    'stack': 'Unity, Photoshop',
    'created': '2012'
  },
  {
    'title': 'The Yellow Journal',
    'desc': `Relaunched University of Virgina's oldest humor publication, Ye Yellow Journal. 
            Originally founded in 1912 under the slogan "All The News That Is Unfit To Print," the Journal 
            was disbanded in 1934 by the University's Administrative Council citing material 
            they found "scurrilous and indecent in the extreme." Today the Journal is published 
            semesterly and features satirical news articles centered around student life at UVA.`,
    'urls' : [
      {
        'name' : 'Wikipedia',
        'link' : 'http://en.wikipedia.org/wiki/The_Yellow_Journal'
      },
      {
        'name' : 'Issue 1',
        'link' : './assets/img/issue1.pdf'
      },
      {
        'name' : 'Issue 2',
        'link' : './assets/img/issue2.pdf'
      },
      {
        'name' : 'Issue 3',
        'link' : './assets/img/issue3.pdf'
      }
    ],
    'stack': 'Pen, Paper',
    'created': '2012'
  }
];


// var project1: Project = {
//   id: 1,
//   title: 'My First Project',
//   desc: 'This is post is about blah and blah.',
//   created: '2016'
// };

// class ProjectList {
//   projects = [project1, project1, project1];
//   get(): Project[] {
//     return this.projects;
//   }
//   add(value: string): void {
//     this.projects.push(value);
//   }
// }

//var projectList = new ProjectList();

@Component({
  selector: 'projects',
  templateUrl: './projects/components/projects.html',
  styleUrls: ['./projects/components/projects.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProjectsCmp {
  // public project = project1;
  // public projectList = projectList;
  public projects = PROJECTS;
  //constructor(public projectsList: ProjectList) {}
}
