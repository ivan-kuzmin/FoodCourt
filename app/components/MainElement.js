import React from "react";
import { StyleSheet, Text, View, Button, Image, Alert, TouchableHighlight } from "react-native";

export default class MainElement extends React.Component {
	render() {
		return (
			<TouchableHighlight underlayColor="white" onPress={this.props.func}>
				<View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
					<Image
                        style={{ width: "100%", height: "100%", position: "absolute" }}
                        source={{uri: this.props.icon}} 
                        blurRadius={1}
                    />
					<View style={styles.image_filter} />
					<Text style={[styles.image_text, { fontSize: 25, textAlign: "center" }]}>{this.props.name}</Text>
					<Text style={[styles.image_text, { fontWeight: "100", fontSize: 15, textAlign: "center" }]}>{this.props.adress}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	image_text: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20
	},
	image_filter: {
		backgroundColor: "black",
		opacity: 0.6,
		position: "absolute",
		width: "100%",
		height: "100%"
	}
});
