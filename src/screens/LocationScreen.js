import React from "react";
import { StyleSheet, View, ScrollView, Button, Text, ActivityIndicator } from "react-native";
import MapView from 'react-native-maps';

export default class LocationScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            isLoading: true,
			fairs: []
        };
	}
	componentDidMount() {
		return fetch("https://raw.githubusercontent.com/ivan-kuzmin/FoodCourt/master/db.json")
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
			<View style={{flex:3}}>
				<MapView style={styles.map}
					showsUserLocation
					// followsUserLocation
					initialRegion={{
						latitude: 55.751244,
						longitude: 37.61842,
						latitudeDelta: 0.8,
						longitudeDelta: 0.8
					}}>
					{
						this.state.fairs.map(function(fair, index){
							return (
								<MapView.Marker
									key={index}
									coordinate={fair.content.coordinate}
									title={fair.content.name}
									description={fair.content.adress}
								/>
							)
						})
					}
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
