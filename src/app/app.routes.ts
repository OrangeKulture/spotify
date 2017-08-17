import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';


export const appRoutes:Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'artist/:id', component:ArtistComponent},
    {path: 'album/:id', component:AlbumDetailsComponent}
]