import { Component, ViewEncapsulation, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MyWorkComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

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
      'description': 'Angular based Webpage',
      'image': 'portfolio.jpg',
      'url': 'www.web-site24.de'
    },
    /*
    {
      'name': 'Ring of Fire',
      'description': 'Angular-based web-app with multiplayer function',
      'image': 'cards.jpg',
      'url': '/projects/ring-of-fire/index.html'
    }
    */
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
      'name': 'Lieferblitz',
      'description': 'small copy of Lieferando Frontend with HTML, CSS, JS',
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

  projects = [...this.website, ...this.angular, ...this.javascript];

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


  changeButton(type){
    this.resetButtons(type);
    if(type == 'all'){
      document.getElementById('button-1').classList.add('button-red-active');
    }
    if(type == 'html'){
      document.getElementById('button-2').classList.add('button-red-active');
    }
    if(type == 'angular'){
      document.getElementById('button-3').classList.add('button-red-active');
    }
    if(type == 'javascript'){
      document.getElementById('button-4').classList.add('button-red-active');
    }
  }


  resetButtons(type){
    if(type == 'all'){
      document.getElementById('button-2').classList.remove('button-red-active');
      document.getElementById('button-3').classList.remove('button-red-active');
      document.getElementById('button-4').classList.remove('button-red-active');
    }
    if(type == 'html'){
      document.getElementById('button-1').classList.remove('button-red-active');
      document.getElementById('button-3').classList.remove('button-red-active');
      document.getElementById('button-4').classList.remove('button-red-active');
    }
    if(type == 'angular'){
      document.getElementById('button-1').classList.remove('button-red-active');
      document.getElementById('button-2').classList.remove('button-red-active');
      document.getElementById('button-4').classList.remove('button-red-active');
    }
    if(type == 'javascript'){
      document.getElementById('button-1').classList.remove('button-red-active');
      document.getElementById('button-2').classList.remove('button-red-active');
      document.getElementById('button-3').classList.remove('button-red-active');
    }
  }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'becomeVisible': '');
  }

  onIntersectionButton({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'buttonsBecomeVisible': '');
  }

  renderHTML(project, i){
    return /*html*/`
    <div class="project-element projects-element-${i}" inViewport [inViewportOptions]="{ threshold: [0] }" (inViewportAction)="onIntersection($event)">
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

