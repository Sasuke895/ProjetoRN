import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista2 from './estiloLista2';

const Lista2 = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista2.areaItens}>
            <Text style={estiloLista2.itemTitulo}> {item.titulo} </Text>

            <Text style={estiloLista2.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>

            <Image style={estiloLista2.itemFoto} source={item.foto} style={estiloLista2.itemFoto} resizeMode='contain'/>

        </View>
    );
}

export default Lista2;