import { Component, OnInit } from '@angular/core';
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
  constructor(private cuteLinkAPIService: CuteLinkAPIService) { }

  ngOnInit(): void {
  }
  cutify(){
    this.isLoading = true;
    this.cuteLinkAPIService.generateCutifiedLink(this.url).subscribe((response:APIResponse<CuteLink>) => {
      console.log('value', response);
      if(!response['error']['code']){
        this.cutifiedLink = response['result']['cutified_link'];
      }
      this.isLoading = false;
    })
  }
  copyLink(){
    navigator.clipboard.writeText(this.cutifiedLink);
  }
  reset(){
    this.cutifiedLink = '';
  }
}
