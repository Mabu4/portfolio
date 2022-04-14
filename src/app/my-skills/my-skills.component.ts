import { Component, ViewEncapsulation, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MySkillsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'card-animation': '');
    //this.renderer.removeClass(target, visible ? 'inactive' : 'active');
}

  ngOnInit(): void {   
  }
  
  images = 
  [
    'java-script.svg', 
    'angular.png', 
    'html-css.svg',
    'scrum.svg',
    'git.svg',
    'design.svg',
    'api.svg',
    'test.svg',
    'database.svg'
  ];
  descriptions = 
  [
    'Java script',
    'Angular',
    'HTML / CSS',
    'SCRUM',
    'Git',
    'Design Thinking',
    'Rest API',
    'Test automation',
    'Databases'
  ];




  
  // window.onscroll = function(ev) {
  //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //         // you're at the bottom of the page
  //     }
  // };
  

}

