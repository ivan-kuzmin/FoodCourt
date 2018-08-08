import React from "react";
import { StyleSheet, View, ScrollView, Button, Text, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import MainElement from '../components/MainElement';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            isLoading: true,
			fairs: []
        };
	}
	componentDidMount() {
		return fetch("https://raw.githubusercontent.com/ivan-kuzmin/FoodCourt/master/db/db.json")
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						fairs: responseJson.shops
					},
					function() {}
				);
			})
			.catch(error => {
				return console.error(error);
			});
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20, backgroundColor: "black" }}>
					<ActivityIndicator style={{ flex: 1 }} />
				</View>
			);
		}
		return (
			<View style={{ flex: 1, backgroundColor: "gray" }}>
				<ScrollView style={{ flex: 1 }}>
                    {/* <Button title="Huy" onPress={this.props.screenProps.toggleSideMenu} /> */}
					{this.state.fairs.map(
						function(fair) {
							return (
								<MainElement
									key={fair.id}
									content={fair.content}
									navigator={this.props.navigator}
								/>
							);
						}.bind(this)
					)}
				</ScrollView>
			</View>
		);
	}
}
