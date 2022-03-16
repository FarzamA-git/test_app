import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListRoutingModule } from './play-list-routing.module';
import { CreateVideoComponent } from './create-video/create-video.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { FormsModule } from '@angular/forms';
import { PlayListComponent } from './play-list.component';


@NgModule({
  declarations: [CreateVideoComponent, ListVideoComponent, PlayListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PlayListRoutingModule
  ]
})
export class PlayListModule { }
