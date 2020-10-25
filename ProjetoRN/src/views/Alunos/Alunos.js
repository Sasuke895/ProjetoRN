import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import estiloAlunos from './estiloAlunos';
import Lista2 from '../../components/Lista2/Lista2';

function Alunos({ navigation }) {

    const [alunos, setAlunos] = useState( [
        {
            id: '5',
            titulo: 'Mateus Oliveira de Araujo',
            autor: '2DSB',
            anoPublicacao: 'B',
            foto: require('../../../assets/itens/5.jpg'),
        },
        {
            id: '6',
            titulo: 'Julia Araujo',
            autor: '2DSB',
            anoPublicacao: 'A',
            foto: require('../../../assets/itens/6.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial');
    }

    return (
        <View style={estiloAlunos.container}>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={alunos}
                renderItem={ ({item}) => <Lista2 data={item} />}
            />
        </View>
    )
}
export default Alunos;