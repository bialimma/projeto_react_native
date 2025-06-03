import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import Botao from './Botao';
import Label from './Label';
import Estilos from '../estilos/Estilos';


export default function CardItem({titulo, descricao, preco, uri}) {
  return (
    <TouchableHighlight style={Estilos.cardItem} onPress={() => alert("Card")} underlayColor="pink">
        <View>
            <Image source={{ uri: uri }} style={{ width: 220, height: 220 }}/>
            <Text>Título: {titulo}</Text>
            <Text>Descrição: {descricao}</Text>
            <Text>Preço: {preco}</Text>
        </View>
    </TouchableHighlight>
  );
}