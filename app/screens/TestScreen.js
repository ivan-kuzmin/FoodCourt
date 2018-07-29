import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import MainElement from '../components/MainElement';
import PlaceElement from '../components/PlaceElement';

export default class TestScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const fair_id = navigation.getParam('id')
        // console.log(fairs)
        // return (
        //     <Text>{JSON.stringify(this.props.screenProps.fairs)}</Text>
        // )
        if (this.props.screenProps.fairs[fair_id].content.places.length == 0) {  // Возможно не работает
            return (
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{color: "black"}}>Здесь пока ничего нет :(</Text>
                </View>
            )
        }
        return (
            this.props.screenProps.fairs[fair_id].content.places.map(function(place){
                return (
                    <PlaceElement
                        key={place.id}
                        style={styles.whole_place}
                        content={place}
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
