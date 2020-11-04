import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Placeholder} from '@angular/compiler/src/i18n/i18n_ast';
import {ApiListComponent} from '../views/home/api-list/api-list.component';

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

  public getPlaceholders(): Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }

  public postPlaceholder(ph: Placeholder): Observable<Placeholder>{
    return this.httpClient.post<any>(this.apiUrl, ph);
  }
}
