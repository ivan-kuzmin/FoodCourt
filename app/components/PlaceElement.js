import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableHighlight } from 'react-native';


export default class PlaceElement extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row', margin: 10}}>
                <View style={{flex: 1}}>
                    <Image
                        style={{width: 50, height: 80}}
                        source={this.props.icon}
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