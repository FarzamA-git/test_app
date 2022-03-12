import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        component: CourseListComponent,
      },
      {
        path: 'create',
        component: CourseCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
