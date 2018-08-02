import React from "react";
import { StyleSheet, View, ScrollView, Button, Text } from "react-native";
import MainElement from "../components/MainElement";

export default class HomeScreen extends React.Component {
    navigateFunc(id) {
		this.props.navigation.navigate("Details", { id: id });
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: "gray" }}>
				<ScrollView style={{ flex: 1 }}>
                    <Button title="Huy" onPress={this.props.screenProps.toggleSideMenu} />
					{this.props.screenProps.fairs.map(
						function(fair) {
							return (
								<MainElement
									key={fair.id}
									func={this.navigateFunc.bind(this, fair.id)}
									content={fair.content}
								/>
							);
						}.bind(this)
					)}
				</ScrollView>
			</View>
		);
	}
}

{
	/*
<MainElement func={this.myfunc.bind(this, 'loshok')} name="Семеновская ярмарка" adress="Семеновская площадь, 4" icon={require("../assets/images/semenovskaya.jpg")} HelloainElement func={this.myfunc.bind(this)} name="Даниловский рынок" adress="Мытная улица, 74" icon={require("../assets/images/danilovskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Усачевский рынок" adress="улица Усачева, 26" icon={require("../assets/images/usachevskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Гастроферма" adress="улица Нижняя Красносельская, 35, строение 59" icon={require("../assets/images/gastroferma.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Рогожский рынок" adress="площадь Рогожская Застава, 1" icon={require("../assets/images/rogozskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Экомаркет в Коньково" adress="Профсоюзная улица, 126, корпус 3" icon={require("../assets/images/ekomarket.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Черемушкинский рынок" adress="улица Вавилова, 64/1, строение 1" icon={require("../assets/images/cheremushkinskiy.jpg")} />
<MainElement func={this.myfunc.bind(this)} name="Центральный рынок" adress="Рождественский бульвар, 1" icon={require("../assets/images/centralniy.jpg")} />
*/
}
