import { Component, OnInit } from '@angular/core';
import { ITunesSearchService } from '../i-tunes-search.service';
import { ResultsEntity } from '../itunes';
import { SearchItem } from '../SearchItem';

@Component({
  selector: 'app-i-tunes-search',
  templateUrl: './i-tunes-search.component.html',
  styleUrls: ['./i-tunes-search.component.css']
})
export class ITunesSearchComponent implements OnInit {
  results:any[] = [];
  loading:boolean = false;
  term: string = "best"
  constructor(private iTunesService:ITunesSearchService) { 
    this.results = [];
    this.loading = false;
  }

  ngOnInit(): void {
  }
  
  search():void{
    this.loading = true;
    this.iTunesService.search(this.term).subscribe((response)=>{
      console.log(response);
      this.results = response.results;
      this.loading = false;
      console.log(this.results);
  });
}

  search2(item:string){
    this.iTunesService.search(item);
    console.log(this.results);
  }
}
