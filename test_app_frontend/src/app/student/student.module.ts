import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from '../student/student.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentComponent,
    StudentCreateComponent,
    StudentListComponent,
  ],
  imports: [CommonModule, FormsModule, StudentRoutingModule],
})
export class StudentModule {}
