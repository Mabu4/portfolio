import { Component, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MySkillsComponent implements OnInit {

  constructor() { }

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

}

