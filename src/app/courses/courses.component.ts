import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courseList: Array<number> = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
