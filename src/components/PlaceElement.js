import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableHighlight } from 'react-native';


export default class PlaceElement extends React.Component {
    navigation() {
		this.props.navigator.push({
			screen: 'FoodCourt.PlaceScreen', // unique ID registered with Navigation.registerScreen
			title: 'Place', // navigation bar title of the pushed screen (optional)
			subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
			passProps: {
				navigator: this.props.navigator,
				content: this.props.content,
                parent: this.props.parent
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
            <View style={{flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#d3d3d3"}}>
                <View style={{flex: 1}}>
                    <Image
                        style={{width: 65, height: 90}}
                        defaultSource={require('../images/default.jpg')}
                        source={{uri: this.props.content.icon}}
                    />
                </View>
                <View style={{flex: 4, marginLeft: 15, justifyContent: "space-between"}}>
                    <Text style={{fontFamily: 'Roboto-Medium', fontWeight: 'bold', fontSize: 25}}>{this.props.content.name}</Text>
                    <Text style={{fontStyle: 'italic'}}>{this.props.content.description}</Text>
                    <Text>
                      <Text style={{fontSize: 16, color: "black"}}>₽</Text>
                      <Text style={{fontSize: 16, color: "#d3d3d3"}}>₽</Text>
                      <Text style={{fontSize: 16, color: "#d3d3d3"}}>₽</Text>
                      <Text style={{fontSize: 16, color: "#d3d3d3"}}>₽</Text>
                    </Text>
                </View>
            </View>
            </TouchableHighlight>
        )
    }
}
