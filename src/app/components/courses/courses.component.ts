import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

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
