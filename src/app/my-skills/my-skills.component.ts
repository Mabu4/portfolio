import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadCards();
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

  cardContainer = '';

  loadCards(){
    for (let i = 0; i < this.images.length; i++) {
      let image = this.images[i];
      let description = this.descriptions[i];

      this.cardContainer += /*html*/`
      
      <div class="skill-card-element">
        <div class="skill-card-img-outer">
          <img src="../../assets/img/${image}" alt="">
        </div>
        <p class="paragraph">
          ${description}
        </p>
      </div>
      `;
    }

    

  }

}
