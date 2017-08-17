import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../album.model';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  id:string;
  album: Album[];

  constructor(private musicService: MusicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.musicService.reqAccess()
        .subscribe(data => {
          this.musicService.getAlbum(id, data.access_token)
          .subscribe(album => {
            this.album = album;
          })
        })
        
      })

  }

  getTrack(url:string){
    window.open(url);
  }

}
