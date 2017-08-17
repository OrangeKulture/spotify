import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/RX';

@Injectable()
export class MusicService {
  private url:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl:string;
  private token:string;
  private client_id:string = '4fcec777b950474f9919bfa97c1987d1';
  private client_secret:string = '15c85c7c3475494cb4f039a0b387bb23';
  private redirect_uri:string;

  constructor(private http:Http) { }

  reqAccess(){
    let url = 'https://accounts.spotify.com/api/token';
    let params = ('grant_type=client_credentials');
    let headers = new Headers({ 
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.client_id + ":" + this.client_secret),
    });
    let options = new RequestOptions({headers:headers,});
    return this.http.post(url,params,options)
      .map((res:Response) => res.json()).catch(this.handleError);
  }

  getMusic(searchTerm:string,token:string){
    let url = 'https://api.spotify.com/v1/search?q='+searchTerm+'&type=artist&limit=10'
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    })
    let options = new RequestOptions({headers:headers});
      return this.http.get(url,options)
        .map((res:Response) => res.json()).catch(this.handleError);
  }

  getArtist(id:string, token:string){
    let artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    })
    let options = new RequestOptions({headers:headers});
      return this.http.get(artistUrl,options)
        .map((res:Response) => res.json()).catch(this.handleError);
  }

  getAlbums(artistId:string, token:string){
    let albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    })
    let options = new RequestOptions({headers:headers});
      return this.http.get(albumsUrl,options)
        .map((res:Response) => res.json()).catch(this.handleError);
  }

  getAlbum(id:string, token:string){
    let albumUrl = 'https://api.spotify.com/v1/albums/'+id;
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    })
    let options = new RequestOptions({headers:headers});
      return this.http.get(albumUrl,options)
        .map(res => res.json()).catch(this.handleError);

  }

  private handleError(error:Response){
    return Observable.throw(error.statusText);
  }

}
