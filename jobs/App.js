import { Notifications } from 'expo';
import React from 'react';
import { View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from './navigator';
import { persistor, store } from './store';
import registerForNotifications from './services/push_notifications';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
};

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener(notification => {
      const {
        data: { text },
        origin,
      } = notification;
      if (origin === 'received' && text) {
        Alert.alert('New push notification', text, [{ text: 'Ok.' }]);
      }
    });
  }

  render() {
    console.log('store', store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
