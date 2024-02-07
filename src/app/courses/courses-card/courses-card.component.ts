import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})
export class CoursesCardComponent implements OnInit {
  @Input() courseData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
