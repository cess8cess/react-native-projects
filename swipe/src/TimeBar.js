import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class TimeBar extends Component {
  componentWillMount() {
    this.width = new Animated.Value(370);
    Animated.timing(this.width, {
      toValue: 0,
      duration: 10000,
    }).start();
  }

  render() {
    return <Animated.View style={[styles.bar, { width: this.width }]} />;
  }
}

const styles = {
  bar: {
    height: 10,
    backgroundColor: 'green',
  },
};

export default TimeBar;
