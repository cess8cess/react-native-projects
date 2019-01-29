import React, { Component } from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY({ x: 150, y: 0 });
    this.ballFall();
  }

  onBallClick() {
    console.log('this.position', this.position);
    Animated.timing(this.position, {
      toValue: { x: 150, y: 0 },
      duration: 500,
    }).start(() => this.ballFall());
  }

  ballFall() {
    Animated.timing(this.position, {
      toValue: { x: 150, y: 500 },
      duration: 2000,
    }).start();
  }

  render() {
    console.log(this.position.getLayout());
    return (
      <Animated.View style={this.position.getLayout()}>
        <TouchableWithoutFeedback onPress={() => this.onBallClick()}>
          <View style={styles.ball} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
};

export default Ball;
