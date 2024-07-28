import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})


export class StudentsComponent implements OnInit {
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
