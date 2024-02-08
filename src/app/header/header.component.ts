import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private sharedService: AppService) { }

  homeActive:any=false;
  isAboutUs:any=false;
  isCourses:any=false;
  isTestimonials:any=false;
  isContactus:any=false;
  mobileSubmenu:any=false;

  ngOnInit(): void {
    this.homeActive=true;
  }


  openContactForm(){
    this.sharedService.navigateContactForm();
    this.isContactus=true;
    this.homeActive=false;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isTestimonials=false;
    this.mobileSubmenu=false;
  }


  navigateHome(){
    this.sharedService.navigateHome();
    this.isContactus=false;
    this.homeActive=true;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isTestimonials=false;
    this.mobileSubmenu=false;
  }


  openSubmenu(){
    this.mobileSubmenu=true;
  }
  closeSubMenu(){
    this.mobileSubmenu=false;
  }
}
