import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ITunesSearchService {
  apiHost:string = 'https://itunes.apple.com/search';
  results:Object[]=[];
  constructor(private httpClient:HttpClient) { 

  }
  search(term:string):Observable<any>{
    let apiUrl = `${this.apiHost}?term=${term}`;
    return this.httpClient.get(apiUrl);
  }
}
