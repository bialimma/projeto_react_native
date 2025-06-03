import { StyleSheet, View, Image, Pressable} from 'react-native';


export default function Sair({handleLogout}){
  return (
        <View>

            <Pressable onPress={handleLogout}>
               <Image source={require('../assets/logout.png')} style={{ width: 20, height: 20}}/>
            </Pressable>

        </View>

  );
}