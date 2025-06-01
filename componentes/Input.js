import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function Input({texto, bool}) {

  return (
    <View>
         <TextInput placeholder={texto} secureTextEntry={bool}/>
    </View>
  );
}
