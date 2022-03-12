import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  courses: any[] = [ ];
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {
    this.api.getAllCourses().subscribe((res) => {
      this.courses = res['result'];
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }


  console.log(submittedForm.value);
    this.api.createStudent(submittedForm.value).subscribe(res => console.log(res));
    // this.store.dispatch(createCourse({course}));

  }

}
