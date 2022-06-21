import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ITunesSearchService } from '../i-tunes-search.service';
import { ResultsEntity } from '../itunes';
import { SearchItem } from '../SearchItem';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-i-tunes-search',
  templateUrl: './i-tunes-search.component.html',
  styleUrls: ['./i-tunes-search.component.css']
})
export class ITunesSearchComponent implements OnInit {
 
  dtOptions: DataTables.Settings = {};
  results:any[] = [];
  loading:boolean = false;
  term: string = "best"
  constructor(private iTunesService:ITunesSearchService,
    public navigation: NavigationService, private activeRoute: ActivatedRoute,
    private location:Location) { 
      this.navigation.startSaveHistory();
      this.term = this.activeRoute.snapshot.params['term'];
      this.iTunesService.search(this.term).subscribe((response)=>{
        console.log(response);
        this.results = response.results;
        this.loading = false;
        console.log(this.results);
    });
    this.results = [];
    this.loading = false;
  }
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();


  searchItemObj:SearchItem = {
    name: "test",
                artist: "artist_test",
                link: "google.com",
                thumbnail: "this is the thumbnail",
                artistId: "1"
  };
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  
  updateSearchItemObj(){
    this.searchItemObj.name = this.term;
  }
  currentItem:string = "Here is the test deail for the child component";
  search():void{
    this.searchItemObj.name = this.term;
    this.loading = true;
    this.iTunesService.search(this.term).subscribe((response)=>{
      console.log(response);
      this.results = response.results;
      this.loading = false;
      console.log(this.results);
  });
  this.location.replaceState("/home/"+this.term);
}

  search2(item:string){
    this.iTunesService.search(item);
    console.log(this.results);

  }
}
