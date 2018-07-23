import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import MainElement from '../components/MainElement';

{/*
var places = [
    {
        'icon': '../assets/images/semenovskaya.jpg',
        'name':' Place 1',
        'description': 'Good place',
        'adress': 'Semenovskaya, 1'
    }, 
    {
        'icon': '../assets/images/danilovskiy.jpg',
        'name': 'Place 2',
        'description': 'Nice place',
        'adress': 'Danilovskaya, 2'

    },
    {
        'icon': '../assets/images/usachevskiy.jpg',
        'name': 'Place 3',
        'description': 'Awful place',
        'adress': 'Usachevskaya, 3'
    } 
]; 
*/}


class PlaceElement extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row', margin: 10}}>
                <View style={{flex: 1}}>
                    <Image
                        style={{width: 50, height: 80}}
                        // source={ 'require(\'' + this.props.icon + '\')'}
                        source = {require('../assets/images/semenovskaya.jpg')}
                    />
                </View>
                <View style={{flex: 4}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}} > {this.props.name} </Text>
                    <Text style={{fontStyle: 'italic'}}> {this.props.description} </Text>
                    <Text style={{fontWeight: 'bold'}}> {this.props.adress} </Text>
                </View>
            </View>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            places.map(function(place, index){
                return (
                    <PlaceElement key={index} style={styles.whole_place}
                        name={place.name}
                        description={place.description}
                        adress={place.adress}
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

