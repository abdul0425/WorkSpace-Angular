import { ActionButtonComponent } from './../action-button/action-button.component';
import { CommonService } from './../common.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
})
export class MatchListComponent implements OnInit {
  public recentMatchesList: any;
  public selectedMatchList: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getRecentMatches();
  }

  public columnDefs: ColDef[] = [
    { field: 'matchFormat' },
    { field: 'seriesName' },
    { field: 'status' },
    {
      field: 'more',
      cellClass: 'ag-cell-ng-wrap',
      width: 130,
      minWidth: 120,
      maxWidth: 120,
      cellRendererFramework: ActionButtonComponent,
      pinned: 'right',
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  getSelectedMatchList(event: any) {
    console.log(event);
    if (event != null) {
      let selectedMatchType = event.value;
      let selectedMatchObj: any = this.recentMatchesList.filter((each: any) => {
        if (selectedMatchType === each['matchType']) {
          return each;
        }
      });
      console.log(selectedMatchObj);
      if (selectedMatchObj && selectedMatchObj.length > 0) {
        let seriesMatches = selectedMatchObj[0]['seriesMatches'];
        if (seriesMatches && seriesMatches.length > 0) {
          let matches = seriesMatches[0]['seriesAdWrapper']['matches'];
          console.log(matches);
          if (matches && matches.length > 0) {
            let matchArray: any = [];
            matches.forEach((element: any) => {
              matchArray.push(element['matchInfo']);
            });
            console.log(matchArray);
            this.selectedMatchList = matchArray;
          }
        }
      }
    }
  }

  getRecentMatches() {
    this.commonService.getRecentMatches().subscribe((response: any) => {
      console.log(response);
      this.recentMatchesList = response['typeMatches'];
    });
  }

  onRowClicked(event:any){
    console.log(event);
    
  }
}
