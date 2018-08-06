import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableHighlight } from 'react-native';

export default class PlaceElement extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row', margin: 10}} onPress={this.props.func}>
                <View style={{flex: 1}}>
                    <Image
                        style={{width: 50, height: 80}}
                        source={{uri: this.props.content.icon}}
                    />
                </View>
                <View style={{flex: 4}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}} > {this.props.content.name} </Text>
                    <Text style={{fontStyle: 'italic'}}> {this.props.content.description} </Text>
                    <Text style={{fontWeight: 'bold'}}> {this.props.content.adress} </Text>
                </View>
            </View>
        )
    }
}
