import React from "react";
import { StyleSheet, Text, View, Button, Image, Alert, TouchableHighlight } from "react-native";

export default class MainElement extends React.Component {
	navigation() {
		this.props.navigator.push({
			screen: 'FoodCourt.MarketScreen', // unique ID registered with Navigation.registerScreen
			title: 'Market', // navigation bar title of the pushed screen (optional)
			subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
			passProps: {
				navigator: this.props.navigator,
				content: this.props.content
			}, // Object that will be passed as props to the pushed screen (optional)
			animated: true, // does the push have transition animation or does it happen immediately (optional)
			backButtonTitle: undefined, // override the back button title (optional)
			backButtonHidden: false, // hide the back button altogether (optional)
			navigatorStyle: {
                statusBarTextColorSchemeSingleScreen: 'light',
                navBarTextColor: 'white',
                navBarBackgroundColor: 'black',
				navBarButtonColor: 'white'
            },
			navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
			// enable peek and pop - commited screen will have `isPreview` prop set as true.
			previewView: undefined, // react ref or node id (optional)
			previewHeight: undefined, // set preview height, defaults to full height (optional)
			previewCommit: true, // commit to push preview controller to the navigation stack (optional)
			previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
				id: '', // action id (required)
				title: '', // action title (required)
				style: undefined, // 'selected' or 'destructive' (optional)
				actions: [], // list of sub-actions
			}],
		});
	}
	render() {
		return (
			<TouchableHighlight underlayColor="white" onPress={() => this.navigation()}>
				<View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
					<Image
                        style={{ width: "100%", height: "100%", position: "absolute" }}
						defaultSource={require('../images/default.jpg')}
                        source={{ uri: this.props.content.icon }}
                        blurRadius={1}
                    />
					<View style={styles.image_filter} />
					<Text style={[styles.image_text, { fontSize: 25, textAlign: "center" }]}>{this.props.content.name}</Text>
					<Text style={[styles.image_text, { fontWeight: "100", fontSize: 15, textAlign: "center" }]}>{this.props.content.adress}</Text>
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
