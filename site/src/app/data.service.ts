import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api";
  message:string

  constructor(private httpClient: HttpClient) { }

  setMessage(data){
    this.message=data;
  }

  public getOtherPlays(){
    return this.httpClient.get(`${this.REST_API_SERVER}/play/other/${this.message}`)
  }

  public getPlays(){
    return this.httpClient.get(`${this.REST_API_SERVER}/play/${this.message}`)
  }

  public postPlay(payload){
    let httpHeaders = new HttpHeaders({​​​​​'Content-Type' : 'application/json'}​​​​​);
    return this.httpClient.post(`${this.REST_API_SERVER}/play`, payload, {​​​​​headers: httpHeaders, observe: 'response'}​​​​​)
  }

  public postPlayer(payload){
    let httpHeaders = new HttpHeaders({​​​​​'Content-Type' : 'application/json'}​​​​​);
    return this.httpClient.post(`${this.REST_API_SERVER}/player`, payload, {​​​​​headers: httpHeaders, observe: 'response'}​​​​​)
  }
}
