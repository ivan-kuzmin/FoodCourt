import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  image_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image_filter: {
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default class MainElement extends React.Component {
  navigation() {
    this.props.navigator.push({
      screen: 'FoodCourt.MarketScreen',
      title: 'Market',
      subtitle: undefined,
      passProps: {
        navigator: this.props.navigator,
        content: this.props.content,
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
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: '100%', height: '100%', position: 'absolute'}}
            defaultSource={require('../images/default.jpg')}
            source={{uri: this.props.content.icon}}
            blurRadius={1}
          />
          <View style={styles.image_filter} />
          <Text
            style={[styles.image_text, {fontSize: 25, textAlign: 'center'}]}>
            {this.props.content.name}
          </Text>
          <Text
            style={[
              styles.image_text,
              {fontWeight: '100', fontSize: 15, textAlign: 'center'},
            ]}>
            {this.props.content.adress}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
