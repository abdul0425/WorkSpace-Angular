import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './match-list/match-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { ActionButtonComponent } from './action-button/action-button.component';
import { MatchInfoComponent } from './match-info/match-info.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MatchListComponent, ActionButtonComponent, MatchInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    AgGridModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
