
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../telas/Inicial';
import Sobre from '../telas/Lanches';
import Pedidos from '../telas/Pedidos';

export default function DrawerTela1() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='Inicial'>
        <Drawer.Screen name="Inicial" component={Inicial}/>
        <Drawer.Screen name="Pedidos" component={Pedidos}/>
    </Drawer.Navigator>
  );
}
