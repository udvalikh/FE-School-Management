import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})


export class TeachersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  // constructor() { }
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
  

  getModal(content: any){
    this.modalService.open(content, { size: 'xl' })
    console.log("Hello world")
  }


}

