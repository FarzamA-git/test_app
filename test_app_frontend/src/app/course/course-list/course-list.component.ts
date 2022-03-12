import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Model/course';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor(private apiServices: ApiService) {}

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {
    this.apiServices.getAllCourses().subscribe((res) => {
      console.log(res);
      this.courses = res['result'];
    });
  }

  deleteCourse(courseId: string) {
    this.apiServices.deleteCourse(courseId).subscribe((res) => {
      this.getCourseList();
    });
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    this.apiServices
      .updateCourse({ id: this.courseToBeUpdated.id, ...updateForm.value })
      .subscribe((res) => {
        this.getCourseList();
      });
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
