
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from '../telas/Inicial';
import Lanches from '../telas/Lanches';
import Combos from '../telas/Combos';
import Pedidos from '../telas/Pedidos';
import DrawerTela1 from './DrawerTela1';

export default function BottomTabsTela1() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="DrawerTela1"
        component={DrawerTela1}
      />
     <Tab.Screen
        name="Lanches"
        component={Lanches}
      />
      <Tab.Screen
        name="Combos"
        component={Combos}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
})
