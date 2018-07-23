import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, Image, Alert, TouchableHighlight } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from './app/screens/HomeScreen'
import LocationScreen from './app/screens/LocationScreen'
import SearchScreen from './app/screens/SearchScreen'
import TestScreen from './app/screens/TestScreen'
import MainElement from './app/components/MainElement'


StatusBar.setBarStyle('light-content', true);
const commonNavigationOptions = {
    headerStyle: {
        backgroundColor: "black",
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: "white"
    },
    headerBackTitleStyle: {
        color: "white"
    },
    headerTintColor: "white"
}


export const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "FoodCourt"
        }
    },
    Details: {
        screen: TestScreen,
        navigationOptions: {
            title: "Test"
        }
    }
},
{
    navigationOptions: commonNavigationOptions,
});

export const LocationStack = createStackNavigator({
    Home: {
        screen: LocationScreen,
        navigationOptions: {
            title: "Location"
        }
    },
    Details: {
        screen: TestScreen,
        navigationOptions: {
            title: "Test"
        }
    }
},
{
    navigationOptions: commonNavigationOptions,
});

export const SearchStack = createStackNavigator({
    Home: {
        screen: SearchScreen,
        navigationOptions: {
            title: "Search"
        }
    },
    Details: {
        screen: TestScreen,
        navigationOptions: {
            title: "Test"
        }
    }
},
{
    navigationOptions: commonNavigationOptions,
});

export const Tabs = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: <Icon name="text-document" size={25} color="white" />
        }
    },
    LocationScreen: {
        screen: LocationStack,
        navigationOptions: {
            tabBarIcon: <Icon name="location-pin" size={25} color="white" />
        }
    },
    SearchScreen: {
        screen: SearchStack,
        navigationOptions: {
            tabBarIcon: <Icon name="magnifying-glass" size={25} color="white" />
        }
    }
},
{
    tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: "gray",
        labelStyle: {
            fontSize: 10,
        },
        style: {
            backgroundColor: 'black',
            borderTopWidth: 0
        },
    }
});

export default class App extends React.Component {
    render() {
        return (
            <Tabs />
        );
    }
}

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }
//
// const RootStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Details: DetailsScreen
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );
//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// const styles = StyleSheet.create({

    // imagebackground: {
    //     width: '100%',
    //     height: 200,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     opacity: 0.5
    // },
// });
