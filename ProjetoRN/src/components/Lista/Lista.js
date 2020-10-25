import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>
            <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>

            <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>

            <Image style={estiloLista.itemFoto} source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>

        </View>
    );
}

export default Lista;