import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from '../course/course.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CourseComponent, CourseCreateComponent, CourseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
