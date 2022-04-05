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
    this.loadProjects(0, 4);
  }

  angular = 
  [
    {
      'name': 'Portfolio',
      'description': 'Personal Webpage',
      'image': 'man.jpg'
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
      'description': 'Jump and run game',
      'image': 'elpolloloco.png'
    },
    {
      'name': 'Quizapp',
      'description': 'Developer Quiz',
      'image': 'quizapp.png'
    }
  ];

  projects = this.angular.concat(this.javascript);

  projectsContainer = '';

  loadProjects(start, end){
    this.projectsContainer = '';
  
    for (let i = start; i < end; i++) {
      let project = this.projects[i];
      this.projectsContainer += 
      this.renderHTML(project);
    }
  }

  changeProjects(newStart, newEnd){
    let start = newStart;
    let end = newEnd;
    this.loadProjects(start, end);
  }

  renderHTML(project){
    return `
    <div class="project-element">
      <img src="../../assets/img/projects/${project['image']}">
      <div class="project-hover-overlay">
        <h3 class="paragraph color-primary padding-bottom-xs">${project['name']}</h3>
        <p class="paragraph padding-bottom-l">${project['description']}</p>
        <a class="button-red">Try out</a>
      </div>
    </div>
  `;
  }

}

