import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  playlists: any[] = [];
  selectedpayListUrl = 'https://player.vimeo.com/video/76979871?h=8272103f6e';

  constructor(private apiServices: ApiService , private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getPaylistList();
  }

  getPaylistList() {
    this.apiServices.getAllPlayList().subscribe((res) => {
      console.log(res);
      this.playlists = res['result'];
    });
  }

  transform(url):any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
