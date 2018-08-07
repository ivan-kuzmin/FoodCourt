import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, Button } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import PlaceScreenDescription from '../components/PlaceScreenDescription';

export default class PlaceScreen extends React.Component {
    render() {
        return (
            <ParallaxScrollView
                backgroundColor="white"
                contentBackgroundColor="white"
                parallaxHeaderHeight={250}
                renderBackground={() => (
                    <View style={{ height: 250, alignItems: "center", justifyContent: "center" }}>
                        <Image
                            style={{ width: "100%", height: 250, position: "absolute" }}
                            defaultSource={require('../images/default.jpg')}
                            source={{ uri: this.props.content.icon }}
                            blurRadius={1}
                        />
                        <View style={styles.image_filter} />
                    </View>
                )}
                renderForeground={() => (
                    <View style={styles.place_image}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.place_name}>{this.props.content.name}</Text>
                            <Text style={styles.place_description}>{this.props.content.description}</Text>
                        </View>
                        <View style={styles.place_section}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "white" }}>
                                    Работает до {this.props.content.workHours}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: "white" }}>
                                    до {this.props.content.averageCheck} ₽
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            >
                <PlaceScreenDescription
                    place={this.props.content}
                    shop={this.props.parent}
                />
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
    place_name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    place_description: {
        color: "white",
        fontStyle: "italic",
        marginTop: 20
    },
    place_image: {
        flexDirection: "column",
        height: 250,
        justifyContent: "space-between"
    },
    place_section: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image_filter: {
        backgroundColor: "black",
        opacity: 0.6,
        position: "absolute",
        width: "100%",
        height: "100%"
    }
});
