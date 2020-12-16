import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'modals/:id', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
