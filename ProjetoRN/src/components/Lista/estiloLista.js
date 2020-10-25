import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {
        flex:1,
        backgroundColor: '#f2f3f5',
    },
    itemTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        color: '#6825f7',
    },
    itemSubTitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#9b98a3',
    },
    itemFoto:{
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloLista;