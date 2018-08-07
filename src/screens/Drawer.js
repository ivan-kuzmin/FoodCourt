import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, Image } from "react-native";

export default class Drawer extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "green" }}>
                <Text style={{ color: 'white' }}>Drawer</Text>
            </View>
        );
    }
}
