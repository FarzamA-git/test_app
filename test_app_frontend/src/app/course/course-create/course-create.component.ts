import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Model/course';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    if (submittedForm.invalid) {
      return;
    }


    const course: Course = { name: submittedForm.value.name, description: submittedForm.value.description};
    this.api.createCourse(course).subscribe(res => console.log(res));
    // this.store.dispatch(createCourse({course}));

  }
}
