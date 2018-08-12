import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import PlaceElement from '../components/PlaceElement';

const styles = StyleSheet.create({
  image_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image_filter: {
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  place_image: {},
  place_name: {},
  place_description: {},
  place_adress: {},
});

export default class MarketScreen extends React.Component {
  render() {
    if (this.props.content.places.length === 0) {
      return (
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black'}}>
            Здесь пока ничего нет :(
          </Text>
        </View>
      );
    }

    return (
      <ParallaxScrollView
        backgroundColor="white"
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        renderBackground={() => (
          <View
            style={{
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: '100%', height: 300, position: 'absolute'}}
              defaultSource={require('../images/default.jpg')}
              source={{uri: this.props.content.icon}}
              blurRadius={1}
            />
            <View style={styles.image_filter} />
          </View>
        )}
        renderForeground={() => (
          <View
            style={{
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.image_text,
                {fontSize: 25, textAlign: 'center'},
              ]}>
              {this.props.content.name}
            </Text>
            <Text
              style={[
                styles.image_text,
                {fontWeight: '100', fontSize: 15, textAlign: 'center'},
              ]}>
              {this.props.content.adress}
            </Text>
          </View>
        )}>
        {this.props.content.places.map(place => (
          <PlaceElement
            key={place.id}
            content={place}
            parent={this.props.content}
            navigator={this.props.navigator}
          />
        ))}
      </ParallaxScrollView>
    );
  }
}
