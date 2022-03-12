import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
      // canActivate: [AuthGuardService] 
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CourseModule),
      canActivate: [AuthGuardService] 
  },
  {
    path: 'paylist',
    loadChildren: () =>
      import('./play-list/play-list.module').then((m) => m.PlayListModule),
      canActivate: [AuthGuardService] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
