import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import MapView from 'react-native-maps';
// import fairs from '../components/Fairs';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import PlaceElement from '../components/PlaceElement';

export default class LocationScreen extends React.Component {
    // componentWillMount() {
    //   const fairs =
    // }
    render() {
        return (
            <ParallaxScrollView
                backgroundColor="white"
                contentBackgroundColor="white"
                parallaxHeaderHeight={300}
                fadeOutForeground={false}
                renderForeground={() => (
                    <MapView style={[styles.map, {height: 300}]}
                        showsUserLocation
                        initialRegion={{
                            latitude: 55.751244,
                            longitude: 37.61842,
                            latitudeDelta: 0.8,
                            longitudeDelta: 0.8
                        }}>
                        { this.props.screenProps.fairs.map(function(fair, index){
                            return (
                                <MapView.Marker
                                    key={index}
                                    coordinate={fair.content.coordinate}
                                    title={fair.content.name}
                                    description={fair.content.adress}
                                />
                            )
                          })
                        }
                    </MapView>
                )}
                >
                <View>
                    {
                        this.props.screenProps.fairs.map(function(fair){
                            return fair.content.places.map(function(place){
                                return (
                                    <PlaceElement
                                        key={place.id}
                                        style={styles.whole_place}
                                        content={place}
                                    />
                                )
                            })
                        })
                    }
                </View>
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
