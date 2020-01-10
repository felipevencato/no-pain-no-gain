import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  watch(watch){
    this.youtube.openVideo(watch);
  }

}


