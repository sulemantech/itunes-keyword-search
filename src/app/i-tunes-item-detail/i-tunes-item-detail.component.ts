import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITunesSearchService } from '../i-tunes-search.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-i-tunes-item-detail',
  templateUrl: './i-tunes-item-detail.component.html',
  styleUrls: ['./i-tunes-item-detail.component.css']
})
export class ITunesItemDetailComponent implements OnInit {

  term:string|null="";
  index:string|null="";
  results:any[] = [];
  termObj:any;

  constructor(private route: ActivatedRoute, private iTunesService:ITunesSearchService,
    public navigation: NavigationService) { 
    
    this.term = route.snapshot.paramMap.get('term');
    this.index = route.snapshot.paramMap.get('index');
    this.iTunesService.search(this.term!).subscribe((response)=>{
      console.log(response);
      this.results = response.results;
      this.termObj = this.results[Number(this.index!)];
      console.log(this.termObj);
      
  });
  }

  @Input() searchObj:any;
  
  ngOnInit(): void {
  }

}
