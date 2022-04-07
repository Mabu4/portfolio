import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintAndPrivacyComponent } from './imprint-and-privacy/imprint-and-privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintAndPrivacyComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      // Restore the last scroll position
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: "enabled",
    })
  ],
})
export class AppRoutingModule { }
