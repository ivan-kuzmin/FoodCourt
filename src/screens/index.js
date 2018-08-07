import { Navigation } from 'react-native-navigation';

import Drawer from './Drawer';
import HomeScreen from './HomeScreen';
import LocationScreen from './LocationScreen';
import SearchScreen from './SearchScreen';
import MarketScreen from './MarketScreen';
import PlaceScreen from './PlaceScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('FoodCourt.Drawer', () => Drawer);
    Navigation.registerComponent('FoodCourt.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('FoodCourt.LocationScreen', () => LocationScreen);
    Navigation.registerComponent('FoodCourt.SearchScreen', () => SearchScreen);
    Navigation.registerComponent('FoodCourt.MarketScreen', () => MarketScreen);
    Navigation.registerComponent('FoodCourt.PlaceScreen', () => PlaceScreen);
}
