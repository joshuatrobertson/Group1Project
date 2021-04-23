import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api";
  private EFAN_ID = "http://localhost:3000/api/play/607344a09c88d4001c80ce45";

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(this.REST_API_SERVER)
  }

  public getPlays(){
    return this.httpClient.get(this.EFAN_ID)
  }

  public postPlay(payload){
    return this.httpClient.post(`${this.REST_API_SERVER}/plays`, payload)
  }

}
