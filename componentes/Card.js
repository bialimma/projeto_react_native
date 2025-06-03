import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import Botao from './Botao';
import Label from './Label';
import Estilos from '../estilos/Estilos';


export default function Card(props) {
  return (
     <TouchableHighlight style={Estilos.card} underlayColor="pink">
      <View>
        <Image source={props.caminho} style={{ resizeMode:'contain',margin: 30, width: props.largura, height: props.altura }} />
        <Text>Descrição: {props.descricao}</Text>
       
      </View>
    </TouchableHighlight>
  );
}