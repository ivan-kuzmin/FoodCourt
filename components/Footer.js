import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footer_menu}></View>
                <View style={styles.footer_menu}></View>
                <View style={styles.footer_menu}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        flexDirection: 'row'
        // alignItems: 'center',
        // justifyContent: 'flex-end'
    },
    footer_menu: {
        flex: 1,
        backgroundColor: 'black'
    }
});
