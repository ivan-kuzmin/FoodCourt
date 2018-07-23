import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import MainElement from '../components/MainElement';
import fairs from '../components/Fairs';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fairs: fairs
        }
    }

    myfunc(arg) {
        this.props.navigation.navigate('Details', {
            fair_id: arg
        })
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <ScrollView style={{flex: 1}}>
                    {
                        fairs.map(function(fair, index){
                            return (
                                <MainElement
                                    key={index}
                                    func={this.myfunc.bind(this, index)}
                                    name={fair.content.name}
                                    adress={fair.content.adress}
                                    icon={fair.content.icon} />
                            )
                        }.bind(this))
                    }
                </ScrollView>
            </View>
        );
    }
}


{
/*
<MainElement func={this.myfunc.bind(this, 'loshok')} name="Семеновская ярмарка" adress="Семеновская площадь, 4" icon={require("../assets/images/semenovskaya.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Даниловский рынок" adress="Мытная улица, 74" icon={require("../assets/images/danilovskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Усачевский рынок" adress="улица Усачева, 26" icon={require("../assets/images/usachevskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Гастроферма" adress="улица Нижняя Красносельская, 35, строение 59" icon={require("../assets/images/gastroferma.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Рогожский рынок" adress="площадь Рогожская Застава, 1" icon={require("../assets/images/rogozskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Экомаркет в Коньково" adress="Профсоюзная улица, 126, корпус 3" icon={require("../assets/images/ekomarket.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Черемушкинский рынок" adress="улица Вавилова, 64/1, строение 1" icon={require("../assets/images/cheremushkinskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Центральный рынок" adress="Рождественский бульвар, 1" icon={require("../assets/images/centralniy.jpg")} />
*/
}
