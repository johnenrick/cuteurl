import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CuteLink } from '@api-model/cute-link.model';
import { CuteLinkAppState } from '@store/models/cute-link-app-state.model';

@Component({
  selector: 'app-cute-link-table',
  templateUrl: './cute-link-table.component.html',
  styleUrls: ['./cute-link-table.component.scss']
})
export class CuteLinkTableComponent implements OnInit {
  cuteLinks: CuteLink[] = [];
  constructor(store: Store<{ cuteLinks: CuteLinkAppState }>) {
    store.select('cuteLinks').subscribe((state) => {
      this.cuteLinks = state.cuteLinks;
    })
  }

  ngOnInit(): void {
  }

}
