import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image
} from "react-native";
import MainElement from "../components/MainElement";
import PlaceElement from "../components/PlaceElement";

export default class TestScreen extends React.Component {
  // navigateFunc(place_id) {
  //   // this.props.navigation.navigate("Details", { id: id });       //Places is PlaceScreen
  // }
  goClick() {
    console.log('bibola')
  }

  render() {
    const { navigation } = this.props;
    const fair_id = navigation.getParam("id");
    // console.log(fairs)
    // return (
    //     <Text>{JSON.stringify(this.props.screenProps.fairs)}</Text>
    // )
    if (this.props.screenProps.fairs[fair_id].content.places.length == 0) {
      // Возможно не работает
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "black" }}>Здесь пока ничего нет :(</Text>
        </View>
      );
    }
    return (
      <View>                //should be scrollable
        <MainElement
          content={this.props.screenProps.fairs[fair_id].content}
        >

        </MainElement>
        <ScrollView>
          {this.props.screenProps.fairs[fair_id].content.places.map(function(place) {
            return (
              <PlaceElement
                key={place.id}
                style={styles.whole_place}
                content={place}
                func={this.goCLick}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whole_place: {
    flexDirection: "row",
    margin: 10
  },
  place_image: {},
  place_name: {},
  place_description: {},
  place_adress: {}
});
