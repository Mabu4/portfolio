import { Component, ViewEncapsulation, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MySkillsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  onIntersection({ target, visible }: { target: Element; visible: boolean }, i: number): void {
    if(i === 0 || i === 1 || i === 2) {
      this.renderer.addClass(target, visible ? 'flyInLeft': 'inactive');
    } else if (i === 3 || i === 4 || i === 5){
      this.renderer.addClass(target, visible ? 'flyInRight': 'inactive');
    } else if (i === 6 || i === 7 || i === 8){
      this.renderer.addClass(target, visible ? 'flyInLeft': 'inactive');
    }
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

