import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../album.model';
import {Artist} from '../artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist: Artist[];
  albums: Album[];
  constructor(private musicService: MusicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.musicService.reqAccess()
          .subscribe(data => {
            this.musicService.getArtist(id, data.access_token)
            .subscribe(artist => {
              this.artist = artist;
            })
          this.musicService.getAlbums(id, data.access_token)
            .subscribe(albums => {
              this.albums = albums.items;
            })
        })
    })
  }

}
