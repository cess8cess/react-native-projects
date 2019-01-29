import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    const { data } = this.props;
    return data.map((slide, index) => (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  }

  renderLastSlide(index) {
    const { data, onComplete } = this.props;
    if (index === data.length - 1) {
      return (
        <Button title="Onwards!" raised buttonStyle={styles.buttonStyle} onPress={onComplete} />
      );
    }
    return null;
  }

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slide: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 30,
    margin: 20,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  },
};

export default Slides;
