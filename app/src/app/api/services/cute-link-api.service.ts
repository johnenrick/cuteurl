import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIController } from '@core-api/api-controller';
import { CuteLink } from '@api-model/cute-link.model';
import { APIResponse } from '@core/api-controller/api-response.model';
@Injectable({
  providedIn: 'root'
})
export class CuteLinkAPIService extends APIController {
  constructor(http: HttpClient) { 
    super(http);
  }
  generateCutifiedLink(url: string): Observable<APIResponse<CuteLink>>{
    return this.post<CuteLink>('generateCutifiedLink', {
      url: url
    });
  }
}
