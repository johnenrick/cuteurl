// import the interface
import { createReducer, on } from '@ngrx/store';
import { CuteLink } from '@api-model/cute-link.model';
import { addCuteLink } from '../actions/cute-link.action';
import { CuteLinkAppState } from '../models/cute-link-app-state.model';
//create a dummy initial state
const cutelinksInitialState: CuteLinkAppState = {
  cuteLinks: []
};
export const cuteLinkReducer = createReducer(
  cutelinksInitialState,
  on(addCuteLink, (state: CuteLinkAppState, cuteLink: CuteLink) => {
    const newState = {
      cuteLinks: [...state.cuteLinks]
    }
    newState.cuteLinks.unshift(cuteLink);
    return {
      ...state,
      ...newState
    };
  })
)