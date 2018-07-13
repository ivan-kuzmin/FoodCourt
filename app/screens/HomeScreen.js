import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import MainElement from '../components/MainElement'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                {/* <Header /> */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <ScrollView style={{flex: 1}}>
                    <MainElement name="Семеновская ярмарка" adress="Семеновская площадь, 4" icon={require("../assets/images/semenovskaya.jpg")} />
                    <MainElement name="Даниловский рынок" adress="Мытная улица, 74" icon={require("../assets/images/danilovskiy.jpg")} />
                    <MainElement name="Усачевский рынок" adress="улица Усачева, 26" icon={require("../assets/images/usachevskiy.jpg")} />
                    <MainElement name="Гастроферма" adress="улица Нижняя Красносельская, 35, строение 59" icon={require("../assets/images/gastroferma.jpg")} />
                    <MainElement name="Рогожский рынок" adress="площадь Рогожская Застава, 1" icon={require("../assets/images/rogozskiy.jpg")} />
                    <MainElement name="Экомаркет в Коньково" adress="Профсоюзная улица, 126, корпус 3" icon={require("../assets/images/ekomarket.jpg")} />
                    <MainElement name="Черемушкинский рынок" adress="улица Вавилова, 64/1, строение 1" icon={require("../assets/images/cheremushkinskiy.jpg")} />
                    <MainElement name="Центральный рынок" adress="Рождественский бульвар, 1" icon={require("../assets/images/centralniy.jpg")} />
                </ScrollView>
                {/* <Footer /> */}
            </View>
        );
    }
}
