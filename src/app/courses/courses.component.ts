import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_a7cab894f28c483eaf093590691bf2f5~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_a7cab894f28c483eaf093590691bf2f5~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Test',
      description: 'This is for testing',
      price: '$100',
      duration: '4 weeks'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
