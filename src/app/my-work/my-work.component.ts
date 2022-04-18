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
    {
      'name': 'The king is death',
      'description': 'Angular-based web-app with multiplayer function',
      'image': 'cards.jpg',
      'url': 'https://king-is-death.web-site24.de'
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

  changeProjects(type){

    if(type == 'all'){
      this.projects = [...this.website, ...this.angular, ...this.javascript];
    }
    if(type == 'html'){
      this.projects = this.website;
    }
    if(type == 'angular'){
      this.projects = this.angular;
    }
    if(type == 'javascript'){
      this.projects = this.javascript;
    }
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
    this.renderer.addClass(target, visible ? 'becomeVisible': 'inactive');
  }



}

