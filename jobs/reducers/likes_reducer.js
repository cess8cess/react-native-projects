import _ from 'lodash';
import { REHYDRATE, PURGE } from 'redux-persist';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case REHYDRATE:
      return (action.payload && action.payload.likes) || [];
    case PURGE:
      return [];
    case LIKE_JOB:
      return _.uniqBy([...state, action.payload], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
