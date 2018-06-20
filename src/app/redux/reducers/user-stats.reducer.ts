import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  combineReducers,
  getSavingState,
  getSavedState,
  getSaveFailState,
  entityAdapterReducerFactory,
} from '../../common/redux/entity-adapter';
import { ActionWithPayload } from '../actions/common';
import { UserStatsActions } from '../actions/user-stats.action';
import { UserStats } from '../models/user.model';

export namespace UserStatsReducer {
  const actionTypes = UserStatsActions.ActionTypes;
  type EntityType = UserStats;

  export interface State extends EntityState<EntityType> {}

  export const adapter = createEntityAdapter<EntityType>();

  const initialState = adapter.getInitialState();

  const commonReducer = entityAdapterReducerFactory(
    adapter,
    actionTypes,
    initialState
  );

  const customReducer = (
    state: State = initialState,
    action: ActionWithPayload
  ) => {
    return state;
  };

  const combinedReducer = combineReducers(commonReducer, customReducer);

  export function reducer(state, action) {
    return combinedReducer(state, action);
  }
}