import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fbToken');
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token,
    });
  } else {
    // Start up fb login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { token, type } = await Facebook.logInWithReadPermissionsAsync('288294565227605', {
    permissions: ['public_profile'],
  });

  if (type === 'cancel') {
    return dispatch({
      type: FACEBOOK_LOGIN_FAIL,
    });
  }

  await AsyncStorage.setItem('fbToken', token);

  return dispatch({
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: token,
  });
};

export const de = () => {};
