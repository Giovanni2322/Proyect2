import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SONGS_LIST} from '../../mocks/songs/songs.mock';
import {Song} from '../../modelos/songs/songs.interface';
import { SongService } from '../../providers/provider/provider';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songs: Song[];

  constructor(public navCtrl: NavController, public songService: SongService) {
    this.songService.getSongs().subscribe((data: Song[]) =>{this.songs = data;})
  }

}

