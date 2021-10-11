
import {  Course } from './../../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 public blogCourses: Array<Course> = new Array<Course>();
  
  constructor() {}

    ngOnInit(): void {
      
    }
  neka(data:Array<Course> ){
    console.log(data)
    this.blogCourses=data;
    console.log(this.blogCourses)
  }

}
