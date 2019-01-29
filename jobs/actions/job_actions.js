import axios from 'axios';
import qs from 'qs';

import { FETCH_JOBS, LIKE_JOB, CLEAR_FETCHED_JOBS, CLEAR_LIKED_JOBS } from './types';

import JOB_DATA from './IndeedJobData.json';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  console.log('fetchJobs');
  try {
    let zip = 38873;
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: JOB_DATA,
    });
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const likeJob = job => ({
  type: LIKE_JOB,
  payload: job,
});

export const clearFetchedJobs = () => ({
  type: CLEAR_FETCHED_JOBS,
});

export const clearLikedJobs = () => ({
  type: CLEAR_LIKED_JOBS,
});
