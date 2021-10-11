import { Paths } from './../paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private service :HttpClient) { }

  getMenu(){
    let menu = this.service.get(Paths.menu);
    return menu;
  }
}
