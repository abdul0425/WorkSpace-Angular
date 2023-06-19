import { ActionButtonComponent } from './action-button/action-button.component';
import { MatchListComponent } from './match-list/match-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [
  {
    path: 'matchList',
    component: MatchListComponent,
  },
  {
    path : 'action-button',
    component:ActionButtonComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
