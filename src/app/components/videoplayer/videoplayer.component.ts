import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Plyr from 'plyr';
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent implements AfterViewInit {
  @ViewChild('plyrPlayer') plyrPlayer!: ElementRef;

  player!: Plyr;

  ngAfterViewInit(): void {
    this.player = new Plyr(
      this.plyrPlayer.nativeElement.querySelector('video'),
      {
        controls: [
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'captions',
          'settings',
          'fullscreen',
          'quality',
        ],
        quality: {
          default: 720,
          options: [360, 720],
        },
      }
    );
  }

  changeQuality(quality: string) {
    const currentTime = this.player.currentTime;
    const isPaused = this.player.paused;

    this.player.source = {
      type: 'video',
      sources: [
        {
          src: `./../../../assets/videos/test-video${quality}.mp4`,
          type: 'video/mp4',
          size: +quality,
        },
      ],
    };

    this.player.currentTime = currentTime;
    if (!isPaused) {
      this.player.play();
    }
  }
}
