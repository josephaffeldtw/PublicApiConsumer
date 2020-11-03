import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPlaceholders(){
    return this.httpClient.get(this.apiUrl);
  }
}
