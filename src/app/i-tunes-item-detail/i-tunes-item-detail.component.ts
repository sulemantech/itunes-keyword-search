import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-tunes-item-detail',
  templateUrl: './i-tunes-item-detail.component.html',
  styleUrls: ['./i-tunes-item-detail.component.css']
})
export class ITunesItemDetailComponent implements OnInit {

  constructor() { }

  @Input() searchObj:any;
  
  ngOnInit(): void {
  }

}
