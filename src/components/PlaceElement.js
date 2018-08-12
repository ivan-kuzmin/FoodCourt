import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class PlaceElement extends React.Component {
  navigation() {
    this.props.navigator.push({
      screen: 'FoodCourt.PlaceScreen',
      title: 'Place',
      subtitle: undefined,
      passProps: {
        navigator: this.props.navigator,
        content: this.props.content,
        parent: this.props.parent,
      },
      animated: true,
      backButtonTitle: undefined,
      backButtonHidden: false,
      navigatorStyle: {
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black',
        navBarButtonColor: 'white',
      },
      navigatorButtons: {},
      previewView: undefined,
      previewHeight: undefined,
      previewCommit: true,
      previewActions: [
        {
          id: '',
          title: '',
          style: undefined,
          actions: [],
        },
      ],
    });
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={() => this.navigation()}>
        <View
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderColor: '#d3d3d3',
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{width: 65, height: 90}}
              defaultSource={require('../images/default.jpg')}
              source={{uri: this.props.content.icon}}
            />
          </View>
          <View
            style={{
              flex: 4,
              marginLeft: 15,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              {this.props.content.name}
            </Text>
            <Text style={{fontStyle: 'italic'}}>
              {this.props.content.description}
            </Text>
            <Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                ₽
              </Text>
              <Text style={{fontSize: 16, color: '#d3d3d3'}}>
                ₽
              </Text>
              <Text style={{fontSize: 16, color: '#d3d3d3'}}>
                ₽
              </Text>
              <Text style={{fontSize: 16, color: '#d3d3d3'}}>
                ₽
              </Text>
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
