import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ITunesItemDetailComponent } from './i-tunes-item-detail/i-tunes-item-detail.component';
import { ITunesSearchComponent } from './i-tunes-search/i-tunes-search.component';

const routes: Routes = [
  { path: 'detail', component: ITunesItemDetailComponent },
  { path: 'second-component', component: ITunesSearchComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
