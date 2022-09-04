import { createAction, props } from '@ngrx/store';
import { CuteLink } from '@api-model/cute-link.model';
export enum CuteLinkActionType {
  ADD = 'Add Cute Link',
}
export const addCuteLink = createAction('Add Cute Link', props<CuteLink>())