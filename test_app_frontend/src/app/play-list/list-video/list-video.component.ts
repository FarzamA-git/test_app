import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css'],
})
export class ListVideoComponent implements OnInit {
  playlists: any[] = [];
  selectedpayListUrl = 'https://player.vimeo.com/video/76979871?h=8272103f6e';

  constructor(
    private apiServices: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getPaylistList();
  }

  getPaylistList() {
    this.apiServices.getAllPlayList().subscribe((res) => {
      console.log(res);
      this.playlists = res['result'];
    });
  }

  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  selectionOnViemo(url: string) {
    this.selectedpayListUrl = url;
  }
}
