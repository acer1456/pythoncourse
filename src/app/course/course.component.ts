import { Component, OnInit, Renderer2 } from '@angular/core';
import { courses } from '../courses';
import { ModalService } from '../modal.service';
import { Observable,Subscription, interval  } from 'rxjs';

declare var jquery:any; // 這邊用 var
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private updateSubscription: Subscription;

  courses = courses
  netImage:any = "assets/done.png";

  // onDragEnded(event) {
  //   let element = event.source.getRootElement();
  //   let boundingClientRect = element.getBoundingClientRect();
  //   let parentPosition = this.getPosition(element);
  //   console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
  // }

  // getPosition(el) {
  //   let x = 0;
  //   let y = 0;
  //   while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     x += el.offsetLeft - el.scrollLeft;
  //     y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  //   return { top: y, left: x };
  // }

  constructor(
    private modalService: ModalService,
    // private renderer: Renderer2
    ) {

    }

  getCourse( gcourses ){
    this.modalService.getTabVal( gcourses )
  }

  // ngAfterContentInit(): void {
  //   $('img[usemap]').rwdImageMaps();
  // }

  // ngOnChanges(): void {
  //   $('img[usemap]').rwdImageMaps();
  // }

  ngOnInit(): void {
      this.updateSubscription = interval(100).subscribe(
        (val) => {
          $('img[usemap]').ready(() => {
            $('img[usemap]').rwdImageMaps();
          });
        });
  }

}
