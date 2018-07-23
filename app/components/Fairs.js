import semenovskaya from '../assets/images/semenovskaya.jpg';
import danilovskiy from '../assets/images/danilovskiy.jpg';
import usachevskiy from '../assets/images/usachevskiy.jpg';
import gastroferma from '../assets/images/gastroferma.jpg' ;
import rogozskiy from '../assets/images/rogozskiy.jpg';
import ekomarket from '../assets/images/ekomarket.jpg';
import cheremushkinskiy from '../assets/images/cheremushkinskiy.jpg';
import centralniy from '../assets/images/centralniy.jpg' ;

const fairs = [
    {
        id: 0,
        content: {
            name: 'Семеновская ярмарка',
            adress: 'Семеновская площадь, 4',
            icon: semenovskaya,
            coordinate: { latitude: 55.78089562, longitude: 37.71965405 },
            places: [
              {
                  icon: semenovskaya,
                  name:' Семеновская ярмарка Place 1',
                  description: 'Good place',
                  adress: 'Семеновская площадь, 4а'
              }
            ]
        }
    },
    {
        id: 1,
        content: {
            name: 'Даниловский рынок',
            adress: 'Мытная улица, 74',
            icon: danilovskiy,
            coordinate: { latitude: 55.7121779, longitude: 37.6206429 },
            places: {}
        }
    },
    {
        id: 2,
        content: {
            name: 'Усачевский рынок',
            adress: 'улица Усачева, 26',
            icon: usachevskiy,
            coordinate: { latitude: 55.7274819, longitude: 37.5678689 },
            places: {}
        }
    },
    {
        id: 3,
        content: {
            name: 'Гастроферма',
            adress: 'улица Нижняя Красносельская, 35, строение 59',
            icon: gastroferma,
            coordinate: { latitude: 55.77660849, longitude: 37.674848699999984 },
            places: {}
        }
    },
    {
        id: 4,
        content: {
            name: 'Рогожский рынок',
            adress: 'площадь Рогожская Застава, 1',
            icon: rogozskiy,
            coordinate: { latitude: 55.7443539, longitude: 37.679241 },
            places: {}
        }
    },
    {
        id: 5,
        content: {
            name: 'Экомаркет в Коньково',
            adress: 'Профсоюзная улица, 126, корпус 3',
            icon: ekomarket,
            coordinate: { latitude: 55.6305246, longitude: 37.51649169 },
            places: {}
        }
    },
    {
        id: 6,
        content: {
            name: 'Черемушкинский рынок',
            adress: 'улица Вавилова, 64/1, строение 1',
            icon: cheremushkinskiy,
            coordinate: { latitude: 55.683952, longitude: 37.5505828 },
            places: {}
        }
    },
    {
        id: 7,
        content: {
            name: 'Центральный рынок',
            adress: 'Рождественский бульвар, 1',
            icon: centralniy,
            coordinate: { latitude: 55.7668816, longitude: 37.6245211 },
            places: {}
        }
    }
];

export default fairs;
