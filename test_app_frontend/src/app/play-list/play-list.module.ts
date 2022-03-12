import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListRoutingModule } from './play-list-routing.module';
import { CreateVideoComponent } from './create-video/create-video.component';
import { ListVideoComponent } from './list-video/list-video.component';


@NgModule({
  declarations: [CreateVideoComponent, ListVideoComponent],
  imports: [
    CommonModule,
    PlayListRoutingModule
  ]
})
export class PlayListModule { }
