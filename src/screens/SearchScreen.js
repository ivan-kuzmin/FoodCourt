import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/SearchScreenHeader';
import PlaceElement from '../components/PlaceElement';

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fairs: [],
    };
  }

  componentDidMount() {
    return fetch(
      'https://raw.githubusercontent.com/ivan-kuzmin/FoodCourt/master/db/db.json',
    )
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            fairs: responseJson.shops,
          },
        );
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20, backgroundColor: 'black'}}>
          <ActivityIndicator style={{flex: 1}} />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView style={{flex: 1}}>
          {this.state.fairs.map(fair => fair.content.places.map(place => (
            <PlaceElement
              key={place.id}
              content={place}
              parent={fair.content}
              navigator={this.props.navigator}
            />
          )))}
        </ScrollView>
      </View>
    );
  }
}
