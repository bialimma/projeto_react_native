import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect } from 'react';
import Label from '../componentes/Label';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../FirebaseConfig';
import {getAuth} from 'firebase/auth';
import {useAuth} from'../context/auth/useAuth';

export default function Inicial({ navigation }) {
  const {user, setUser} = useAuth();

  getAuth().onAuthStateChanged((user) =>{
    if(!user)
      navigation.reset({
        index:0,
        routes:[{name: 'Login'}]
    })
  });

  const handleLogout = async () => {
      auth.signOut()
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'green', flex: 1 }}>
      <Text>OLÁAAAAAAA</Text>
      <Text>{user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Label textoLabel="AAAAAAAAAAAAAAAAA" />
    </SafeAreaView>
  );
}
