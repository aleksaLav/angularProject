import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Course } from 'src/app/course';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {

  course!: Course;
  id: any;
  constructor( private route: ActivatedRoute, private http:CourseService ) {}

    ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
        this.id = this.route.snapshot.params['id'];
      })
      this.http.getAllCourses().subscribe((data:APIResponse<Course>)=>{
        data.forEach((element: Course)  => {
          if(element.id== this.id){
            this.course = element;
          }
        });
      })
    }

}
