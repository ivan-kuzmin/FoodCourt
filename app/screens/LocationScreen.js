import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import MapView from 'react-native-maps';


var places = [
  {
    coordinate: {
      latitude: 55.78089562, 
      longitude: 37.71965405
    },
    title: 'Семеноская ярмарка',
    description: ''
  }, 
  {
    coordinate: {
      latitude: 55.7121779, 
      longitude: 37.6206429
    },
    title: 'Даниловский рынок',
    description: ''
  },{
    coordinate: {
      latitude: 55.7274819, 
      longitude: 37.5678689
    },
    title: 'Усачевский рынок',
    description: ''
  },{
    coordinate: {
      latitude: 55.77660849, 
      longitude: 37.674848699999984
    },
    title: 'Гастроферма',
    description: ''
  },{
    coordinate: {
      latitude: 55.7443539, 
      longitude: 37.679241
    },
    title: 'Рогожский рынок',
    description: ''
  },{
    coordinate: {
      latitude: 55.6305246, 
      longitude: 37.51649169
    },
    title: 'Экомаркет в Коньково',
    description: ''
  },{
    coordinate: {
      latitude: 55.683952, 
      longitude: 37.5505828
    },
    title: 'Черемушкинский рынок',
    description: ''
  },{
    coordinate: {
      latitude: 55.7668816, 
      longitude: 37.6245211
    },
    title: 'Центральный рынок',
    description: ''
  }
]

export default class LocationScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray', flexDirection: 'column'}}>
                {/* <StatusBar barStyle="light-content" /> */}
                {/* <Header /> */}
                {/* <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                <ScrollView style={{flex: 1}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>LocationScreen</Text>
                </ScrollView>
                {/* <Footer /> */}

                <View style={{flex:3}}>
                    <MapView style={styles.map} 
                        showsUserLocation  
                        // followsUserLocation
                        initialRegion={{
                            latitude: 55.751244, 
                            longitude: 37.61842,
                            latitudeDelta: 0.8,
                            longitudeDelta: 0.8
                        }}> 
                        {places.map(function(place, index){
                            return (
                                <MapView.Marker
                                    key={index}
                                    coordinate={place.coordinate}
                                    title={place.title}
                                    description={place.description}
                                />
                            )
                        })}
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
