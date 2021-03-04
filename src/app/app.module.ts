import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ModalComponent } from './modal/modal.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SafePipe } from './course-details/safepipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HtmlPipe } from './html.pipe';
import { NewlinePipe } from './newline.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    ModalComponent,
    CourseDetailsComponent,
    SafePipe,
    HtmlPipe,
    NewlinePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgxGraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
