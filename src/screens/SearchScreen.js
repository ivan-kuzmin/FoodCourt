import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Header from '../components/SearchScreenHeader'
import PlaceElement from "../components/PlaceElement";

export default class SearchScreen extends React.Component {
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
        return (
            <View style={{flex: 1}}>
                <Header />
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.fairs.map((fair) => {
                            return fair.content.places.map((place) => {
                                return (
                                    <PlaceElement
                                        key={place.id}
                                        content={place}
                                        parent={fair.content}
                                        navigator={this.props.navigator}
                                    />
                                )
                            })
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    place_image: {

    },
    place_name: {

    },
    place_description: {

    },
    place_adress: {

    }
});
