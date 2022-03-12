import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Model/course';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: any[] = [];

  studentToBeUpdated: any;

  isUpdateActivated = false;

  constructor(private apiServices: ApiService) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.apiServices.getAllStduent().subscribe((res) => {
      console.log(res);
      this.student = res['result'];
    });
  }


  showUpdateForm(stud: any) {
    this.studentToBeUpdated = { ...stud };
    this.isUpdateActivated = true;
  }

  updateStudent(updateForm) {
    this.apiServices
      .updateStudent(this.studentToBeUpdated)
      .subscribe((res) => {
        this.getUserList();
      });
    this.isUpdateActivated = false;
    this.studentToBeUpdated = null;
  }

}
