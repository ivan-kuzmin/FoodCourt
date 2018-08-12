import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  place_section: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={{width: '100%'}}>
          <Text
            numberOfLines={5}
            style={{margin: 10}}>
            {this.props.place.about}
          </Text>
        </View>
        <View style={styles.place_section}>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Icon name="phone" size={25} color="red" />
            <Text>
              Позвонить
            </Text>
            <Text>
              {this.props.place.phone}
            </Text>
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Icon name="map" size={25} color="red" />
            <Text>
              Проложить
            </Text>
            <Text>
              маршрут
            </Text>
          </View>
        </View>
        <View style={styles.place_section}>
          <View>
            <Text style={{fontWeight: 'bold'}}>
              Подробное описание
            </Text>
            <Text style={{fontStyle: 'italic'}}>
              Время работы, Wi-fi, парковка
            </Text>
          </View>
          <View>
            <Icon name="chevron-small-right" size={25} color="black" />
          </View>
        </View>
        <View style={styles.place_section}>
          <View style={{width: '70%'}}>
            <Text style={{fontWeight: 'bold'}}>
              {this.props.place.statios}
            </Text>
            <Text style={{fontStyle: 'italic'}}>
              {this.props.place.adress}
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <MapView
              style={styles.map}
              showsUserLocation
              initialRegion={{
                latitude: this.props.shop.coordinate.latitude,
                longitude: this.props.shop.coordinate.longitude,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
              }}>
              <MapView.Marker
                coordinate={this.props.shop.coordinate}
                title={this.props.shop.name}
                description={this.props.shop.adress}
              />
            </MapView>
          </View>
        </View>
      </View>
    );
  }
}
