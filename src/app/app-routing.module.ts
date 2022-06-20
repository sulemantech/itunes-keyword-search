import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ITunesItemDetailComponent } from './i-tunes-item-detail/i-tunes-item-detail.component';
import { ITunesSearchComponent } from './i-tunes-search/i-tunes-search.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  { path: '', component: ITunesSearchComponent },
  { path: 'detail/:term/:index', component: ITunesItemDetailComponent },
  { path: 'second-component', component: ITunesSearchComponent },
  {
    path: "a",
    component: PageOneComponent,
  },
  {
    path: "b",
    component: PageTwoComponent,
  },
  {
    path: "c",
    component: PageThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
