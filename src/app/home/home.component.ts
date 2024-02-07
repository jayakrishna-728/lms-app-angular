import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showContactForm: boolean = false;
  private subscription: Subscription;

  constructor(private sharedService: AppService) {
    this.subscription = this.sharedService.showContactForm$.subscribe(showContactForm => {
      this.showContactForm = showContactForm;
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
