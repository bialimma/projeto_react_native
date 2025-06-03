import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import Botao from './Botao';
import Label from './Label';
import Estilos from '../estilos/Estilos';
import {useAuth} from'../context/auth/useAuth';


export default function Header(){

  const {user, setUser} = useAuth();

  return (
        <View style={Estilos.header}>
            <Image source={require('../assets/logo.png')} style={{ width: 420, height: 420}}/>
            <Label textoLabel={user?.email}/>
        </View>

  );
}