import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APIURI } from 'src/app/api-uri';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }

  public getList(params?: any) {
    return this.http.get<any>(APIURI.one, { params });
  }




}


