import { Component, OnInit } from '@angular/core';
import {Video} from "../video";
import {VideoService} from "../video-service.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo : Video;

  private hideAddVideoForm : boolean = true;

  constructor(private _videoService : VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectedVideo(vid: any){
    this.selectedVideo = vid;
    this.hideAddVideoForm = true;
    console.log(this.selectedVideo);
  }

  onSubmitNewVideo(video: Video){

    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hideAddVideoForm = true;
        this.selectedVideo = resNewVideo;
      });
  }

  enableAddNewVideoForm(){
    this.hideAddVideoForm = false;
  }

  onUpdateVideoEvent(vid: any){
    this._videoService.updateVideo(vid).subscribe(resUpdatedVideo => vid = resUpdatedVideo);
    this.selectedVideo = null;
  }

  ondeleteVideoEvent(video: any){
    let videoArray = this.videos;
    this._videoService.deleteVideo(video).subscribe(resDeletedVideo => {
      for(let i=0; i < videoArray.length; i++){
        if(videoArray[i]._id === video._id){
          videoArray.splice(i,1);
        }
      }
    });
    this.selectedVideo = null;
  }

}
