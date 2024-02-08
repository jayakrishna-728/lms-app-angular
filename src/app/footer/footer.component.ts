import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  changeBackground:any=false;

  constructor( private activatedRoute: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    let currentRoute = this.router.url;
    console.log(currentRoute);
    if(currentRoute.includes("contact")){
      this.changeBackground=true;
    } else if(currentRoute.includes("about")){
      this.changeBackground=true;
    }
  

  }

}
