
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Inicial from '../telas/Inicial';
import Sobre from '../telas/Sobre';
import Pedidos from '../telas/Pedidos';

export default function BottomTabsTela1() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicial"
        component={Inicial}
      />
     <Tab.Screen
        name="Sobre"
        component={Sobre}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
})
