import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { MapView } from 'expo';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
      />
    ),
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 },
  });

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime, url } = job;
      const initialRegion = {
        latitude: job.latitude,
        longitude: job.longitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045,
      };
      return (
        <Card key={job.jobkey} title={job.jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
          </View>
          <View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => {
                Linking.openURL(url);
              }}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic',
  },
};

function mapStateToProps({ likes }) {
  console.log('likes', likes);
  return { likedJobs: likes };
}

export default connect(mapStateToProps)(ReviewScreen);
