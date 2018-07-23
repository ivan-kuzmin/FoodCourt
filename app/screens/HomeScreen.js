import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import MainElement from '../components/MainElement'

var fairs = [
    {
        'name': 'Семеновская ярмарка',
        'adress': 'Семеновская площадь, 4',
        'icon': '../assets/images/semenovskaya.jpg'
    }, 
    {
        'name': 'Даниловский рынок',
        'adress': 'Мытная улица, 74',
        'icon': '../assets/images/danilovskiy.jpg' 
    }, 
    {
        'name': 'Усачевский рынок',
        'adress': 'улица Усачева, 26',
        'icon': '../assets/images/usachevskiy.jpg' 
    }, 
    {
        'name': 'Гастроферма',
        'adress': 'улица Нижняя Красносельская, 35, строение 59',
        'icon': '../assets/images/gastroferma.jpg' 
    }, 
    {
        'name': 'Рогожский рынок',
        'adress': 'площадь Рогожская Застава, 1',
        'icon': '../assets/images/rogozskiy.jpg' 
    }, 
    {
        'name': 'Экомаркет в Коньково',
        'adress': 'Профсоюзная улица, 126, корпус 3',
        'icon': '../assets/images/ekomarket.jpg' 
    }, 
    {
        'name': 'Черемушкинский рынок',
        'adress': 'улица Вавилова, 64/1, строение 1',
        'icon': '../assets/images/cheremushkinskiy.jpg' 
    }, 
    {
        'name': 'Центральный рынок',
        'adress': 'Рождественский бульвар, 1',
        'icon': '../assets/images/centralniy.jpg' 
    }
];

export default class HomeScreen extends React.Component {
    myfunc() {
        this.props.navigation.navigate('Details')
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <ScrollView style={{flex: 1}}>
                    <MainElement func={this.myfunc.bind(this)} name="Семеновская ярмарка" adress="Семеновская площадь, 4" icon={require("../assets/images/semenovskaya.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Даниловский рынок" adress="Мытная улица, 74" icon={require("../assets/images/danilovskiy.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Усачевский рынок" adress="улица Усачева, 26" icon={require("../assets/images/usachevskiy.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Гастроферма" adress="улица Нижняя Красносельская, 35, строение 59" icon={require("../assets/images/gastroferma.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Рогожский рынок" adress="площадь Рогожская Застава, 1" icon={require("../assets/images/rogozskiy.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Экомаркет в Коньково" adress="Профсоюзная улица, 126, корпус 3" icon={require("../assets/images/ekomarket.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Черемушкинский рынок" adress="улица Вавилова, 64/1, строение 1" icon={require("../assets/images/cheremushkinskiy.jpg")} />
                    <MainElement func={this.myfunc.bind(this)} name="Центральный рынок" adress="Рождественский бульвар, 1" icon={require("../assets/images/centralniy.jpg")} />
                </ScrollView>
            </View>
        );
    }
}
