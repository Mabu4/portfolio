import { Component, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadProjects(0, 6);
  }

  website = 
  [
    {
      'name': 'UMA',
      'description': 'Adventure Website',
      'image': 'uma.jpg',
      'url': '/projects/uma/index.html'
    },
    {
      'name': 'Jouline Cutner',
      'description': 'Artist Website',
      'image': 'jouline.jpg',
      'url': 'http://www.jouline-cutner.de'
    },
  ]

  angular = 
  [
    {
      'name': 'Portfolio',
      'description': 'Personal Webpage',
      'image': 'man.jpg',
      'url': '/projects/instakram/index.html'
      
    },
    {
      'name': 'Join',
      'description': 'Team Project',
      'image': 'team.jpg'
    }
  ];
  
  javascript = 
  [
    {
      'name': 'El-Pollo-Loco',
      'description': 'OOP-based JS game',
      'image': 'elpolloloco.png',
      'url': '/projects/el-pollo-loco/index.html'
    },
    {
      'name': 'Quizapp',
      'description': 'JS-App',
      'image': 'quizapp.jpg',
      'url': '/projects/quizapp/index.html'
    },
    {
      'name': 'Lieferblitz',
      'description': 'JS-App',
      'image': 'lieferblitz.jpg',
      'url': '/projects/lieferblitz/index.html'
    },
    {
      'name': 'Pokedex',
      'description': 'JS-App, using Pokémon API',
      'image': 'pokedex.jpg',
      'url': '/projects/pokedex/index.html'
    },
  ];

  projects = this.website.concat(this.javascript);

  projectsContainer = '';

  loadProjects(start, end){
    this.projectsContainer = '';
  
    for (let i = start; i < end; i++) {
      let project = this.projects[i];
      this.projectsContainer += 
      this.renderHTML(project, i);
    }
  }

  changeProjects(newStart, newEnd){
    let start = newStart;
    let end = newEnd;
    this.loadProjects(start, end);
  }

  renderHTML(project, i){
    return `
    <div class="project-element projects-element-${i}">
      <img src="../../assets/img/projects/${project['image']}">
      <div class="project-hover-overlay">
        <h3 class="paragraph color-primary padding-bottom-xs">${project['name']}</h3>
        <p class="paragraph padding-bottom-l">${project['description']}</p>
        <a class="button-red" target="_blank" href="${project['url']}">Try it out</a>
      </div>
    </div>
  `;
  }

}

