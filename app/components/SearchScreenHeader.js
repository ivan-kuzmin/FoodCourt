import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Header extends React.Component {
    state = {
        text1: "",
        text2: ""
    }
    render() {
        return (
            <View style={{ backgroundColor: "black", paddingVertical: 10 }}>
                <View style={styles.inputview}>
                    <Icon style={styles.icon} name="magnifying-glass" size={15} color="black" />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Название, кухня, блюдо или услуга"
                        placeholderTextColor="gray"
                        onChangeText={(text1) => this.setState({text1})}
                        value={this.state.text1}
                    />
                </View>
                <View style={styles.inputview}>
                    <Icon style={styles.icon} name="location-pin" size={15} color="black" />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Станция метро"
                        placeholderTextColor="gray"
                        onChangeText={(text2) => this.setState({text2})}
                        value={this.state.text2}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputview: {
        backgroundColor: "lightgray",
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderRadius: 5,
        flexDirection: "row"
        // fontSize: 15
    },
    icon: {
        flex: 0.11,
        textAlign: "center"
    },
    textinput: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 12
    }
});
