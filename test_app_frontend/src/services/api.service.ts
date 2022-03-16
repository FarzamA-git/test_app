import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Course } from 'src/Model/course';
import { Student } from 'src/Model/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Environment: any = environment;

  constructor(public http: HttpClient) {
  }

  getAllStduent(): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:8000/api/show`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`http://localhost:8000/api/create`, student);
  }

  deleteStudent(studentId: string): Observable<any> {
    return this.http.delete(`http://localhost:8000/api/delete/` + studentId);
  }

  updateStudent(changes: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/update/` + changes.id, changes);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:8000/api/showCourse`);
  }

  createCourse(course: Course): Observable<Course> {
    debugger;
    return this.http.post<Course>(`http://localhost:8000/api/add`, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`http://localhost:8000/api/deleteCourse/` + courseId);
  }

  updateCourse(course): Observable<any> {
    return this.http.post(`http://localhost:8000/api/updateCourse/${course.id}` , course);
  }

  login(data): Observable<any> {
    return this.http.post(`http://localhost:8000/api/login` , data);
  }

  getAllPlayList(): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:8000/api/showVideo`);
  }


}
