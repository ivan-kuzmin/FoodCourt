import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import MainElement from '../components/MainElement';
import PlaceElement from '../components/PlaceElement';
import fairs from '../components/Fairs';

export default class TestScreen extends React.Component {
    state = {
        fairs: fairs
    }

    render() {
        const { navigation } = this.props;
        const fair_id = navigation.getParam('fair_id')
        // console.log(fairs)
        return (
            this.state.fairs[fair_id].content.places.map(function(place, index){
                return (
                    <PlaceElement key={index} style={styles.whole_place}
                        name={place.name}
                        description={place.description}
                        adress={place.adress}
                        icon={place.icon}
                    />
                )
            })
        );
    };
};

const styles = StyleSheet.create({
    whole_place: {
        flexDirection: 'row',
        margin: 10
    },
    place_image: {

    },
    place_name: {

    },
    place_description: {

    },
    place_adress: {

    }
});
