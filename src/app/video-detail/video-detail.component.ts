import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {

  video: any;

  private editVideoDetail: boolean = false;

  private updateVideoEvent = new EventEmitter();

  private deleteVideoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editVideoDetail= false;
  }

  enableEditVideoDetail(){
    this.editVideoDetail= true;
  }

  updateVideoDetail(){
    this.editVideoDetail= true;
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideoDetail(){
    this.deleteVideoEvent.emit(this.video);
  }

}
