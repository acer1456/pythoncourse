import { Component, OnInit, Input, AfterViewInit, OnChanges, Renderer2 } from '@angular/core';
import { courses } from '../courses';
import { ModalService } from '../modal.service';

declare var jquery:any; // 這邊用 var
declare let $:any; // 當然 let 也可以
// This lets me use jquery
// declare var $: any;
// declare let $: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = courses
  // netImage:any = "../assets/Python 安裝與工作環境.png";
  netImage:any = "../assets/done.png";


  onDragEnded(event) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
  }

  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  constructor(
    private modalService: ModalService,
    // private renderer: Renderer2
    ) {
    }

  getCourse( gcourses ){
    this.modalService.getTabVal( gcourses )
  }

  // ngAfterViewInit(): void {
  //   $('img[usemap]').rwdImageMaps();
  // }

  // ngOnChanges(): void {
  //   $('img[usemap]').rwdImageMaps();
  // }

  ngOnInit(): void {
    // const script = this.renderer.createElement('script');
    // script.src = `http://mattstow.com/experiment/responsive-image-maps/jquery.rwdImageMaps.min.js`;
    // this.renderer.appendChild(document.head, script);
    // $(document).ready(function(e) {
      $('img[usemap]').rwdImageMaps();
    // });
  }

}
