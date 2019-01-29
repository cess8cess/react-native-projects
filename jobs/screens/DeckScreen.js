import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import { likeJob } from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Jobs',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={30} color={tintColor} />,
  };

  renderCard(job) {
    const initialRegion = {
      latitude: job.latitude,
      longitude: job.longitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045,
    };
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            cacheEnabled={Platform.OS === 'android'}
            scrollEnabled={false}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<\/?b>/g, '')}</Text>
      </Card>
    );
  }

  renderNoMoreCards = () => (
    <Card title="No More Jobs">
      <Button
        title="Back to Map"
        large
        icon={{ name: 'my-location' }}
        backgroundColor="#03A9F4"
        onPress={() => this.props.navigation.navigate('map')}
      />
    </Card>
  );

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
};

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(
  mapStateToProps,
  { likeJob }
)(DeckScreen);