/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Navigation} from 'react-native-navigation';
import registerScreens from './src/screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'FoodCourt.HomeScreen',
      icon: require('./src/icons/home.png'),
      // selectedIcon: require('./src/icons/home.png'),
      title: 'FoodCourt',
      iconInsets: {
        // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0, // optional, default is 0.
      },
      navigatorStyle: {
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black',
      },
    },
    {
      screen: 'FoodCourt.LocationScreen',
      icon: require('./src/icons/location.png'),
      // selectedIcon: require('./src/icons/location.png'),
      title: 'Location',
      iconInsets: {
        // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0, // optional, default is 0.
      },
      navigatorStyle: {
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black',
      },
    },
    {
      screen: 'FoodCourt.SearchScreen',
      icon: require('./src/icons/search.png'),
      // selectedIcon: require('./src/icons/search.png'),
      title: 'Search',
      iconInsets: {
        // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0, // optional, default is 0.
      },
      navigatorStyle: {
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black',
      },
    },
  ],
  drawer: {
    left: {
      screen: 'FoodCourt.Drawer',
    },
    disableOpenGesture: true,
  },
  tabsStyle: {
    tabBarHidden: false, // make the tab bar hidden
    tabBarButtonColor: 'gray', // change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: 'white', // change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: 'black', // change the background color of the tab bar
    tabBarTranslucent: false, // change the translucent of the tab bar to false
    tabBarHideShadow: true, // Remove default tab bar top shadow (hairline)
  },
  appStyle: {
    orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  },
});
