import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class LocationScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                {/* <StatusBar barStyle="light-content" /> */}
                {/* <Header /> */}
                {/* <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                <ScrollView style={{flex: 1}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>HomeScreen2</Text>
                </ScrollView>
                {/* <Footer /> */}
            </View>
        );
    }
}
