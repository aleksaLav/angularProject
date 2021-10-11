import { Menu } from './../../menu';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services: MenuService) { }
  public menu:Menu[]=[];
  
  ngOnInit() {
    this.services.getMenu().subscribe(
     (data) => {
        this.menu = data as Menu[];
       // console.log(this.menu)
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    );
  }
}
