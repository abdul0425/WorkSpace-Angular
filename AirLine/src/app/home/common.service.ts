import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getRecentMatches() {
    let httpHeaders = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '23ea54bf89msh990d89af319f4e8p19c85ejsn488ab8d2819f'
      )
      .set('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com');
    return this.http.get(
      'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
      { headers: httpHeaders }
    );
  }
}
