import { BlogComponent } from './../blog.component';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, Course } from 'src/app/course';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
 
  public sort: number = 0;
  public search: string = "";
  @Input()  courses: Array<Course> = new Array<Course>();
  @Output() coursesCange = new EventEmitter<Array<Course>>();

  constructor(private service:CourseService) {}
    ngOnInit(): void {
      this.searchCourses(this.sort, this.search);
      this.coursesCange.emit(this.courses);
      console.log(this.courses)
      // for (const el of this.courses) {
      //   console.log(el.category)
      // }
    }
    onSubmit(form:NgForm){

      this.sort = form.value.sort;
      this.search =form.value.search; 
      console.log(this.sort)
      console.log(this.courses)
      this.searchCourses(this.sort, this.search);
      this.coursesCange.emit(this.courses);
     }
//pass by value, pass by reference
   searchCourses(sort: number, search?: string): void {
    console.log(sort)
    console.log(search)
    this.courses = [];
      this.service
        .getAllCourses()
        .subscribe((courseList:APIResponse<Course>) => {    
          for(let i=0; i<courseList.length; i++){
            this.courses.push(courseList[i]);
          }
          if(sort==0 && search){
            //this.courses= this.courses.filter(x=>x.nameCourse.toUpperCase().indexOf(search.toUpperCase())!=-1);
            this.test((x:any)=>x.nameCourse.toUpperCase().indexOf(search.toUpperCase())!=-1);
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            }
          else if(sort==0){
            console.log("nema filter");
          }
          else if(search){
            //this.courses= this.courses.filter(x=>x.category.id==sort && x.nameCourse.toUpperCase().indexOf(search.toUpperCase())!=-1);
            this.test((x:any)=>x.category.id==sort && x.nameCourse.toUpperCase().indexOf(search.toUpperCase())!=-1);
            console.log("ima pretraga");
          }
          else{
            //this.courses= this.courses.filter(x=>x.category==sort);  
            this.test((x:any) => x.category.id == sort);
            console.log("nema pretraga");
          }
          console.log(this.courses);
        },
        error => {
          console.log(error);
        }
        
        );
       
      
    } 


  private test(ex: any) {
    let filtered = this.courses.filter(ex);
    this.courses.splice(0, this.courses.length);
    filtered.forEach(el => {
      this.courses.push(el);
    });
  }
}
