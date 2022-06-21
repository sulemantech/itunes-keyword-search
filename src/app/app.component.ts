import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ITunesSearchService } from './i-tunes-search.service';
import { NavigationService } from './navigation.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  term:string= "";
  results:[]=[];
  title = 'itunes-keyword-search';
  constructor(private iTunesService:ITunesSearchService,
    public navigation: NavigationService, private activeRoute: ActivatedRoute, private location:Location) { 
      this.navigation.startSaveHistory();
      this.term = this.activeRoute.snapshot.params['term'];
      this.iTunesService.search(this.term).subscribe((response)=>{
        console.log(response);
        this.results = response.results;
        console.log(this.results);
    });
  }
  back():void{
    this.location.back();
  }
  search():void{
    //this.searchItemObj.name = this.term;
    //this.loading = true;
    this.iTunesService.search(this.term).subscribe((response)=>{
      console.log(response);
      this.results = response.results;
      //this.loading = false;
      console.log(this.results);
  });
}
  
}
