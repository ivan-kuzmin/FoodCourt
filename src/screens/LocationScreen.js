import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fairs: [],
    };
  }

  componentDidMount() {
    return fetch(
      'https://raw.githubusercontent.com/ivan-kuzmin/FoodCourt/master/db/db.json',
    )
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            fairs: responseJson.shops,
          },
        );
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20, backgroundColor: 'black'}}>
          <ActivityIndicator style={{flex: 1}} />
        </View>
      );
    }
    return (
      <View style={{flex: 3}}>
        <MapView
          style={styles.map}
          showsUserLocation
          // followsUserLocation
          initialRegion={{
            latitude: 55.751244,
            longitude: 37.61842,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}>
          {this.state.fairs.map((fair, index) => (
            <MapView.Marker
              key={index}
              coordinate={fair.content.coordinate}
              title={fair.content.name}
              description={fair.content.adress}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
