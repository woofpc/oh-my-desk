import { handleActions } from 'redux-actions';
import * as TYPES from 'actions/actionTypes';

const initialState = false;

const isAutoCheckUpdateReducer = handleActions({
  [TYPES.UPDATE_SET_AUTO_UPDATE]: (state, action) => action.payload.isAutoUpdate,
}, initialState);

export default isAutoCheckUpdateReducer;