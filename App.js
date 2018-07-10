import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, Image, Alert, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>FoodCourt</Text>
            </View>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footer_menu}></View>
                <View style={styles.footer_menu}></View>
                <View style={styles.footer_menu}></View>
            </View>
        );
    }
}

const MainElement = (props) => {
    // _onPressButton() {
    //     Alert.alert('You tapped the button!')
    // }
    // render() {
        return (
            <TouchableHighlight underlayColor="white">
                <View style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
                    {/* <ImageBackground source={this.props.icon} style={styles.imagebackground}> */}
                    <Image
                        style={{width: '100%', height: '100%', position: 'absolute'}}
                        source={props.icon}
                        blurRadius={1} />
                    <View style={styles.image_filter} />
                    {/* <Button
                        title="Go to Details"
                        onPress={() => props.navigation.navigate('Details')}
                    /> */}
                    <Text style={[styles.header_text, {fontSize: 25, textAlign: 'center'}]}>{props.name}</Text>
                    <Text style={[styles.header_text, {fontWeight: '100', fontSize: 15, textAlign: 'center'}]}>{props.adress}</Text>
                    {/* </ImageBackground> */}
                </View>
            </TouchableHighlight>
        );
    // }
}

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <StatusBar barStyle="light-content" />
                <Header />
                {/* <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                <ScrollView style={{flex: 1}}>
                    <MainElement name="Семеновская ярмарка" adress="Семеновская площадь, 4" icon={require("./assets/images/semenovskaya.jpg")} />
                    <MainElement name="Даниловский рынок" adress="Мытная улица, 74" icon={require("./assets/images/danilovskiy.jpg")} />
                    <MainElement name="Усачевский рынок" adress="улица Усачева, 26" icon={require("./assets/images/usachevskiy.jpg")} />
                    <MainElement name="Гастроферма" adress="улица Нижняя Красносельская, 35, строение 59" icon={require("./assets/images/gastroferma.jpg")} />
                    <MainElement name="Рогожский рынок" adress="площадь Рогожская Застава, 1" icon={require("./assets/images/rogozskiy.jpg")} />
                    <MainElement name="Экомаркет в Коньково" adress="Профсоюзная улица, 126, корпус 3" icon={require("./assets/images/ekomarket.jpg")} />
                    <MainElement name="Черемушкинский рынок" adress="улица Вавилова, 64/1, строение 1" icon={require("./assets/images/cheremushkinskiy.jpg")} />
                    <MainElement name="Центральный рынок" adress="Рождественский бульвар, 1" icon={require("./assets/images/centralniy.jpg")} />
                </ScrollView>
                <Footer />
            </View>
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

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    header_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    image_filter: {
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    // imagebackground: {
    //     width: '100%',
    //     height: 200,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     opacity: 0.5
    // },
    footer: {
        flex: 0.1,
        flexDirection: 'row'
        // alignItems: 'center',
        // justifyContent: 'flex-end'
    },
    footer_menu: {
        flex: 1,
        backgroundColor: 'black'
    }
});
