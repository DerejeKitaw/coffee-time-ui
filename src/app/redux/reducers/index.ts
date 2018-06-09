import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import * as fromTeams from './teams';
import * as fromApplication from './application';
export interface State {
  router: any;
  teams: fromTeams.State;
  application: fromApplication.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  teams: fromTeams.reducer,
  application: fromApplication.reducer,
};

export const metaReducers: MetaReducer<State>[] = environment.production
  ? []
  : [logger, storeFreeze];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// Teams
export const getTeamsState = (state: State) => state.teams;
// export const getTeamsEntitySelectors = fromTeams.adapter.getSelectors(
//   getTeamsState
// );

//Application
export const getApplicationState = (state: State) => state.application;
