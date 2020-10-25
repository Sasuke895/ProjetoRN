import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloItems from './estiloItems';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Items({ navigation }) {

    const [items, setItems] = useState( [
        {
            id: '1',
            titulo: 'Wolfs Gravestone',
            autor: 'ATK+46(Flat)',
            anoPublicacao: 'ATK%',
            foto: require('../../../assets/itens/1.png'),
        },
        {
            id: '2',
            titulo: 'Prototype Aminus',
            autor: 'ATK+44(Flat)',
            anoPublicacao: 'ATK%',
            foto: require('../../../assets/itens/2.png'),
        },
        {
            id: '3',
            titulo: 'Debate Club',
            autor: 'ATK+39(Flat)',
            anoPublicacao: 'ATK%',
            foto: require('../../../assets/itens/3.png'),
        },
        {
            id: '4',
            titulo: 'Skyward Pride',
            autor: 'ATK+45(Flat)',
            anoPublicacao: 'Energy Recharge',
            foto: require('../../../assets/itens/4.png'),
        }
        ] );
        
        
    const voltar = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={estiloItems.container}>
          
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={items}
                renderItem={ ({item}) => <Lista data={item} />}
        />

        </View>
    )
}

export default Items;