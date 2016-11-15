import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Configuration } from '../../app/app.constants';
import { Task } from '../models/task';

@Injectable()
export class DataService {
  private baseUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
    this.baseUrl = _configuration.ApiUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public GetAllTasks = (): Observable<any> => {
    let url = this.baseUrl + "tasks";
    return this._http.get(url)
      .map((response: Response) => <Task[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}