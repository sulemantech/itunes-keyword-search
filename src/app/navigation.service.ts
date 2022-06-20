import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history:string[] = [];
  constructor(private router:Router, private location:Location) { 

  }
  public startSaveHistory():void{
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        console.log(event.urlAfterRedirects);
        this.history.push(event.urlAfterRedirects);  
      }
    })
  }
  public getHistory():string[]{
    console.log(this.history);
    return this.history;
    
  }
  public goBack():void{
    console.log(this.history);
    this.history.pop();
    if(this.history.length>0){
      this.location.back();
    }
    else{
      this.router.navigateByUrl("/");
    }
  }
  public getPreviousUrl():string{
    if(this.history.length>0){
      return this.history[this.history.length-2];
    }
    return '';
  }

}
