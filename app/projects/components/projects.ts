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
    'title': 'BigNeuron API',
    'desc': `A fully managed cloud service for generating 3D reconstructions of single neurons.
             Built on top of the open-source 3D imaging library Vaa3D, the tool utilizes EC2 
             Autoscaling, Docker containers, and Map Reduce techniques to provide on-demand
             high performance compute at minimal cost. A collaboration with researchers at 
             the Allen Institute for Brain Science in Seattle.`,
    'urls' : [
      {
        'name' : 'Console',
        'link' : 'http://http://vaa3d-website.s3-website-us-west-2.amazonaws.com'
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
    'desc': `Programming practice problems on your phone! 
            Using drag-and-drop templates, dynamic word banks,
            and Pandora-style shuffling, Problee delivers an interactive, 
            mobile learning experience to help you stay sharp without 
            touching a keyboard.`,
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
    'title': 'Jimini',
    'desc': `Jimini lets users wrap their digital gifts in physical paper 
             designs they can deliver in person. Browse through 100s of designs, 
             make online purchase in Amazon or iTunes. Select a design. Jimini 
             creates a printable paper design with your message and a QR code 
             the recipient can use to redeem your gift.`,
    'urls' : [
      {
        'name' : 'Website',
        'link' : 'https://www.facebook.com/jimini.co'
      },
      {
        'name' : 'Github',
        'link' : 'https://github.com/Asimov4/jimini'
      }
    ],
    'stack': 'Python, Django',
    'created': '2013'
  },
  {
    'title': 'The Yellow Journal',
    'desc': `Relaunched University of Virgina's oldest humor publication, Ye Yellow Journal. 
            Originally founded in 1912 under the slogan "All The News That Is Unfit To Print," the Journal 
            was discontinued in 1934 when the University's Administrative Council set forth an 
            order forbidding "the publication or sale of any anonymous paper", citing material 
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
