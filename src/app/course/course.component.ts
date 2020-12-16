import { Component, OnInit, Input } from '@angular/core';
import { courses } from '../courses';
import { ModalService } from '../modal.service';


// This lets me use jquery
// declare var $: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = courses
  netImage:any = "../assets/Python 安裝與工作環境 (1).png";

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
    private modalService: ModalService
    ) {}

  getCourse( gcourses ){
    this.modalService.getTabVal( gcourses )
  }

  ngOnInit(): void {

  }

}
