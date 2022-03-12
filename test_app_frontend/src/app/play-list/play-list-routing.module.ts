import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideoComponent } from './list-video/list-video.component';
import { PlayListComponent } from './play-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlayListComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        component: ListVideoComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayListRoutingModule { }
