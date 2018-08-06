import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MapView from "react-native-maps";
import ParallaxScrollView from "react-native-parallax-scroll-view";

var shop = {
  id: 0,
  content: {
    name: "Семеновская ярмарка",
    adress: "Семеновская площадь, 4",
    icon:
      "https://github.com/ivan-kuzmin/FoodCourt/blob/master/app/assets/images/semenovskaya.jpg?raw=true",
    coordinate: {
      latitude: 55.78089562,
      longitude: 37.71965405
    }
  }
};

var place = {
  id: 0,
  icon:
    "https://github.com/ivan-kuzmin/FoodCourt/blob/master/app/assets/images/semenovskaya.jpg?raw=true",
  name: "Семеновская ярмарка Place 1",
  description: "Good place",
  adress: "Семеновская площадь, 4а",
  statios: "м.Семеновская",
  workHours: "23:00",
  averageCheck: "500",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
  phone: "8-988-888-88-88"
};
date = new Date();

// Getting current hour from Date object
var hour = String(date.getHours() + ":" + date.getMinutes());

export default class App extends React.Component {
  // Inside of a component's render() method:
  render() {
    return (
      <ParallaxScrollView
        backgroundColor="white"
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        renderBackground={() => (
          <View style={styles.place_image}>
            <Image
              style={{ width: "100%", height: "100%", position: "absolute" }}
              source={{ uri: place.icon }}
              blurRadius={1}
            />
            <View />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.place_name}>{place.name}</Text>
              <Text style={styles.place_description}>{place.description}</Text>
            </View>
            <View style={styles.place_section}>
              <View style={{ flexDirection: "row" }}>
                {/*<Text style={{color: "white"}}>{hour} </Text>*/}
                <Text style={{ color: "white" }}>
                  Работает до {place.workHours}
                </Text>
              </View>
              <View>
                <Text style={{ color: "white" }}>
                  до {place.averageCheck} ₽
                </Text>
              </View>
            </View>
          </View>
        )}
      >
        <View>
          <View style={{ width: "100%" }}>
            <Text numberOfLines={5} style={{ margin: 10 }}>
              {" "}
              {place.about}{" "}
            </Text>
          </View>

          <View style={styles.place_section}>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon name="phone" size={25} color="red" />
              <Text>Позвонить</Text>
              <Text>{place.phone}</Text>
            </View>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Icon name="map" size={25} color="red" />
              <Text>Проложить {"\n"} маршрут</Text>
            </View>
          </View>

          <View style={styles.place_section}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Подробное описание</Text>
              <Text style={{ fontStyle: "italic" }}>
                Время работы, Wi-fi, парковка
              </Text>
            </View>
            <View>
              <Icon name="chevron-small-right" size={25} color="black" />
            </View>
          </View>

          <View style={styles.place_section}>
            <View style={{ width: "70%" }}>
              <Text style={{ fontWeight: "bold" }}>{place.statios}</Text>
              <Text style={{ fontStyle: "italic" }}>{place.adress}</Text>
            </View>
            <View style={{ width: "30%" }}>
              <MapView
                style={styles.map}
                showsUserLocation
                initialRegion={{
                  latitude: shop.content.coordinate.latitude,
                  longitude: shop.content.coordinate.longitude,
                  latitudeDelta: 0.8,
                  longitudeDelta: 0.8
                }}
              >
                <MapView.Marker
                  coordinate={shop.content.coordinate}
                  title={shop.content.name}
                  description={shop.content.adress}
                />
              </MapView>
            </View>
          </View>

          <View />
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  place_name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  },
  place_description: {
    color: "white",
    fontStyle: "italic",
    marginTop: 20
  },
  place_image: {
    flexDirection: "column",
    height: 300,
    justifyContent: "space-between"
  },
  place_section: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
