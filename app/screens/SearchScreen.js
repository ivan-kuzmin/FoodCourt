import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Header from '../components/SearchScreenHeader'
import PlaceElement from "../components/PlaceElement";

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Here should be json object, includes all places in order" // very important
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <ScrollView style={{flex: 1}}>
                    {
                        this.props.screenProps.fairs.map(function(fair){
                            return fair.content.places.map(function(place){
                                return (
                                    <PlaceElement
                                        key={place.id}
                                        style={styles.whole_place}
                                        content={place}
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
    whole_place: {
        flexDirection: 'row',
        margin: 10
    },
    place_image: {

    },
    place_name: {

    },
    place_description: {

    },
    place_adress: {

    }
});
