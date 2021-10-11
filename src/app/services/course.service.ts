import { Paths } from './../paths';
import { HttpClient, HttpParams, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { APIResponse, Course } from '../course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  constructor(private service:HttpClient) { 
  }
  getAllCourses(): Observable<APIResponse<Course>>{
    return this.service.get<APIResponse<Course>>(Paths.courses);
  }
  // getAllCourses(
  //   ordering: string,
  //   search?: string
  // ): Observable<APIResponse<Course>> {
  //   let params = new HttpParams().set('ordering', ordering);

  //   if (search) {
  //     params = new HttpParams().set('ordering', ordering).set('search', search);
  //   }

  //   return this.service.get<APIResponse<Course>>(`${Paths.courses}`, { //+"/courses"
  //     params: params,
  //   });
  // }
}
