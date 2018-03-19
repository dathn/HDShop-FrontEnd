import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


const imgurAPI = 'https://api.imgur.com/3/image';
const imgurClientID = 'Client-ID 8f82532267faaf5';

@Injectable()
export class UploadFileService {

  constructor(
    private _http: Http
  ) { }

  uploadImgur(string): Observable<any> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('Authorization', imgurClientID);
    let options = new RequestOptions({ headers: header });
    return this._http.post(imgurAPI, string, options).map(res => res.json());
  }
}
