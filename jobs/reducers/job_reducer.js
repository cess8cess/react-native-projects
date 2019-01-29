import { FETCH_JOBS, CLEAR_FETCHED_JOBS } from '../actions/types';

const INITIAL_STATE = {
  results: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    case CLEAR_FETCHED_JOBS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
