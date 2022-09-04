import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCuteLink } from '@store/actions/cute-link.action';
import { CuteLinkAPIService } from '@api/cute-link-api.service';
import { CuteLink } from '@api-model/cute-link.model';
import { APIResponse } from '@core/api-controller/api-response.model';
@Component({
  selector: 'app-cutifier',
  templateUrl: './cutifier.component.html',
  styleUrls: ['./cutifier.component.scss']
})
export class CutifierComponent implements OnInit {
  isLoading = false;
  cutifiedLink = '';
  url = '';
  constructor(
    private cuteLinkAPIService: CuteLinkAPIService,
    private store: Store<{ cuteLinks: CuteLink[] }>
  ) { }

  ngOnInit(): void {
  }
  cutify(){
    this.isLoading = true;
    this.cuteLinkAPIService.generateCutifiedLink(this.url).subscribe((response:APIResponse<CuteLink>) => {
      if(!response['error']['code']){
        this.cutifiedLink = response['result']['cutified_link'];
        this.store.dispatch(addCuteLink(response['result']));
      }
      this.isLoading = false;
    })
  }
  copyLink(){
    navigator.clipboard.writeText(this.cutifiedLink);
  }
  reset(){
    this.url = '';
    this.cutifiedLink = '';
  }
}
