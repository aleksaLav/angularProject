import { ShowOneComponent } from './components/show-one/show-one.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"courses",
    component: BlogComponent
  },
  {
    path:"courses/:id",
    component: ShowOneComponent
  },
  {
    path : "**",
    redirectTo : ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
