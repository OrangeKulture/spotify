import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MusicService} from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MusicService]

})
export class HomeComponent implements OnInit {
  searchTerm:string;
  searchResults: any[] = [];
  constructor(private musicService:MusicService) { }

  ngOnInit() {

  }

  searchMusic(){
    this.musicService.reqAccess()
    .subscribe(data => {
      this.musicService.getMusic(this.searchTerm, data.access_token)
      .subscribe(res => {
        this.searchResults = res.artists.items;
      })
    })
    
  }



}
