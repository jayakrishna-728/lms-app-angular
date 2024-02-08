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

  ngOnInit(): void {
  }


  openContactForm(){
    this.sharedService.navigateContactForm();
  }

  navigateHome(){
    this.sharedService.navigateHome();
  }

  navigate(element: string){
    if(document.getElementById(element)!=null){
      document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
    }
  }
}
