import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight } from "react-native";
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/CircleSnail';

export default class MainElement extends React.Component {
	state = {
		isLoading: true
	}
	render() {
		return (
			<TouchableHighlight underlayColor="white" onPress={this.props.func}>
				<View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
					<Image
                        style={{ width: "100%", height: "100%", position: "absolute" }}
                        source={{ uri: this.props.content.icon }}
						indicator={Progress}
						indicatorProps={{ color: "white" }}
						onLoad={() => {this.setState({isLoading: false})}}
                        blurRadius={1}
                    />
					<View style={[this.state.isLoading ? styles.hidden : {}, styles.image_filter]} />
					<Text style={[this.state.isLoading ? styles.hidden : {}, styles.image_text, { fontSize: 25, textAlign: "center" }]}>{this.props.content.name}</Text>
					<Text style={[this.state.isLoading ? styles.hidden : {}, styles.image_text, { fontWeight: "100", fontSize: 15, textAlign: "center" }]}>{this.props.content.adress}</Text>
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
	},
	hidden: {
		width: 0,
		height: 0
	}
});
