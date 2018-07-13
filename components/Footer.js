import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footer_menu}>
                    <Icon name="text-document" size={25} color="white" />
                </View>
                <View style={styles.footer_menu}>
                    <Icon name="location-pin" size={25} color="white" />
                </View>
                <View style={styles.footer_menu}>
                    <Icon name="magnifying-glass" size={25} color="white" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        flexDirection: 'row'
    },
    footer_menu: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
