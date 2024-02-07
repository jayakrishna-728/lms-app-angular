import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private showContactFormSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showContactForm$: Observable<boolean> = this.showContactFormSubject.asObservable();

  constructor() { }

  navigateContactForm() {
    this.showContactFormSubject.next(!this.showContactFormSubject.value);
  }

  navigateHome(){
    this.showContactFormSubject.next(false);
  }


}
