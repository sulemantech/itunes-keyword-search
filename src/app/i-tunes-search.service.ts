import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ITunesSearchService {
  apiHost:string = 'https://itunes.apple.com/search';
  results:Object[]=[];
  constructor() { }
}
