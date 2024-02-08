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
    this.router.navigateByUrl('/contactus');
    this.isContactus=true;
    this.homeActive=false;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isTestimonials=false;
    this.mobileSubmenu=false;
  }


  navigateHome(){
    this.router.navigateByUrl('/home');
    this.isContactus=false;
    this.homeActive=true;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isTestimonials=false;
    this.mobileSubmenu=false;
  }

  navigateAboutus(){
    this.router.navigateByUrl('/about');
    this.isAboutUs=true;
    this.isContactus=false;
    this.homeActive=false;
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

  navigate(element: string){
    if(element =='courses'){
      this.isCourses=true;
      this.isAboutUs=false;
      this.homeActive=false;
      this.isTestimonials=false;
      this.isContactus=false;
    } else if(element == 'testimonials'){
      this.isTestimonials=true;
      this.isCourses=false;
      this.isAboutUs=false;
      this.homeActive=false;
      this.isContactus=false;
    }
    if(document.getElementById(element)!=null){
      document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
    }
  }
}
