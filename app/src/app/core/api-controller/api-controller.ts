import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from './api-response.model';
import { environment } from '../../../environments/environment';
interface GetParameter {
  [key: string]: string | number | boolean
}

export class APIController {
  private http: HttpClient;
  baseUrl = environment.APIBaseURL;
  resourceUrl = 'cute-link';
  constructor(http: HttpClient) { 
    this.http = http;
  }
  get<T>(endPoint: string, getParameter: GetParameter): Observable<APIResponse<T>>{
    const param = new HttpParams();
    param.appendAll(getParameter)
    return this.http.get<APIResponse<T>>(`${this.baseUrl}/${this.resourceUrl}/${endPoint}`);
  }
  post<T>(endPoint: string, parameter: GetParameter = {}): Observable<APIResponse<T>>{
    return this.http.post<APIResponse<T>>(`${this.baseUrl}/${this.resourceUrl}/${endPoint}`, parameter);
  }

}