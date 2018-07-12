import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>FoodCourt</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    header_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
