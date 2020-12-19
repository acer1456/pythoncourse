import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses } from '../courses';
import { ModalService } from '../modal.service';


// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  course;

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modalService.tabVal$.subscribe( res => {
        // this.course = courses[+params.get('id')];
        this.course = res;
      })
    });
  }
  showModal():void {
    $("#myModal").modal('show');
  }
  // sendModal(): void {
  //   this.hideModal();
  // }
  hideModal():void {
    // document.getElementById('close-modal').click();
    // $('.modal').ready(() => {
      $("#close-modal").click();
    //   $("#modal-body").html("");
    //   this.course = '';
    // });
    // $(".modal").on("hidden.bs.modal", function(){
    //   $("#modal-body").html("");
    //   this.course = '';
    // });
  }
}
