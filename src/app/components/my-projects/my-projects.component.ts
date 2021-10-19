import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  happleImages: Array<object> = [{
    image: 'assets/images/happle/happle-welcome.png',
    thumbImage: 'assets/images/happle/happle-welcome.png',
    title: 'welcome page',
    order: 1
  }, {
    image: 'assets/images/happle/homepage.png', // Support base64 image
    thumbImage: 'assets/images/happle/homepage.png', // Support base64 image
    title: 'homepage', //Optional: You can use this key if want to show image with title
    order: 2
  }, {
    image: 'assets/images/happle/details.png',
    thumbImage: 'assets/images/happle/details.png',
    title: 'item details',
    order: 3
  }, {
    image: 'assets/images/happle/profile.png',
    thumbImage: 'assets/images/happle/profile.png',
    title: 'profile',
    order: 4
  }, {
    image: 'assets/images/happle/my-items.png',
    thumbImage: 'assets/images/happle/my-items.png',
    title: 'registered items',
    order: 5
  }, {
    image: 'assets/images/happle/new-item.png',
    thumbImage: 'assets/images/happle/new-item.png',
    title: 'register new item',
    order: 6
  }, {
    image: 'assets/images/happle/cards.png',
    thumbImage: 'assets/images/happle/cards.png',
    title: 'credit/debit cards on file',
    order: 7
  }, {
    image: 'assets/images/happle/new-card.png',
    thumbImage: 'assets/images/happle/new-card.png',
    title: 'add new credit/debit card',
    order: 8
  },
];

ssdiImages: Array<object> = [{
  image: 'assets/images/ssdi-project/acceptance-criteria-1.PNG',
  thumbImage: 'assets/images/ssdi-project/acceptance-criteria-1.PNG',
  title: 'Sprint 1 acceptance criteria',
  order: 1
}, {
  image: 'assets/images/ssdi-project/sprint-1.PNG', 
  thumbImage: 'assets/images/ssdi-project/sprint-1.PNG', 
  title: 'Sprint 1 task', 
  order: 2
}, {
  image: 'assets/images/ssdi-project/acceptance-criteria-2.PNG',
  thumbImage: 'assets/images/ssdi-project/acceptance-criteria-2.PNG',
  title: 'Sprint 2 acceptance criteria',
  order: 3
}, {
  image: 'assets/images/ssdi-project/sprint-2.PNG',
  thumbImage: 'assets/images/ssdi-project/sprint-2.PNG',
  title: 'Sprint 2 task',
  order: 4
}, {
  image: 'assets/images/ssdi-project/acceptance-criteria-3.PNG',
  thumbImage: 'assets/images/ssdi-project/acceptance-criteria-3.PNG',
  title: 'Sprint 3 acceptance criteria',
  order: 5
}, {
  image: 'assets/images/ssdi-project/sprint-3.PNG',
  thumbImage: 'assets/images/ssdi-project/sprint-3.PNG',
  title: 'Sprint 3 task',
  order: 6
},
];

}
