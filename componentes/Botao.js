import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Botao({textoBotao, onPress}) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{textoBotao}</Text>
      </Pressable>
    </View>
  );
}
