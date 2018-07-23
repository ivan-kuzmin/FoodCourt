import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import MapView from 'react-native-maps';
import fairs from '../components/Fairs';

export default class LocationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fairs: fairs
        }
      }


    // componentWillMount() {
    //   const fairs = 
    // }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray', flexDirection: 'column'}}>
                <ScrollView style={{flex: 1}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>LocationScreen</Text>
                </ScrollView>

                <View style={{flex:3}}>
                    <MapView style={styles.map} 
                        showsUserLocation  
                        initialRegion={{
                            latitude: 55.751244, 
                            longitude: 37.61842,
                            latitudeDelta: 0.8,
                            longitudeDelta: 0.8
                        }}> 
                        { this.state.fairs.map(function(fair, index){
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
