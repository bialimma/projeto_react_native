import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal, ScrollView,Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { DrawerItemList } from '@react-navigation/drawer';

export default function Pedidos({ navigation }) {
  const [itensCardapio,setItensCardapio] = useState([]);
  const [endereco, setEndereco] = useState('');
  const [itensPedido, setItensPedido] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  const carregarCardapio = async () => {
    try {
      const colecoes = ['Lanches', 'Combos', 'Bebidas', 'Doces','Promoções'];
      let itensTotais = [];

      for (const nomeColecao of colecoes) {
        const snapshot = await getDocs(collection(db, nomeColecao));
        const itens = snapshot.docs.map(doc => ({
          id: doc.id,
          titulo: doc.titulo,
          preco : doc.preco,
          imagem: doc.imagem,
          ...doc.data()
        }));
        itensTotais = [...itensTotais, ...itens];
      }

      setItensCardapio(itensTotais);
    } catch (error) {
      console.error('Erro ao carregar cardápio:', error);
    }
  };

  const adicionarItemAoPedido = (item) => {
    setItensPedido([...itensPedido,item]);
  }

  const removerItem = (index) => {
    const novaLista = [...itensPedido];
    novaLista.splice(index, 1);
    setItensPedido(novaLista);
  };



  const adicionarPedido = async () => {
    if (!endereco || itensPedido.length === 0) return;

    try {
      await addDoc(collection(db, 'Pedidos'), {
        endereco,
        itens: itensPedido,
      });
      setEndereco('');
      setItensPedido([]);
      setModalVisible(false);
      alert('Pedido salvo com sucesso!')
    } catch (error) {
      console.error("Erro ao adicionar pedido: ", error);
    }
  };

  useEffect(() => {
    carregarCardapio();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'green', flex: 1 }}>
      <ScrollView>
        <Button title="Novo Pedido" onPress={()=> setModalVisible(true)}/>
        <Modal visible={modalVisible} animationType="slide">
          <View>
            <Text>Novo Pedido</Text>
            <TextInput
              placeholder="Endereço"
              value={endereco}
              onChangeText={setEndereco}

            />
            
            <Text>Itens do Cardápio:</Text>
              <FlatList
                data={itensCardapio}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => adicionarItemAoPedido(item)}>
                    <Text>{item.titulo}</Text>
                    <Image source={{ uri: item.imagem }} style={{ width: 50, height: 50 }}/>
                    <Text>R$ {item.preco}</Text>
                  </TouchableOpacity>
                )}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
              />

            <Text>Itens Selecionados:</Text>
            <FlatList
              data={itensPedido}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View>
                  <Text>{item.nome} - R$ {item.preco}</Text>
                  <Button title="Remover" color="red" onPress={() => removerItem(index)} />
                </View>
              )}
            />

            <Button title="Salvar Pedido" onPress={adicionarPedido} />
            <Button title="Cancelar" color="gray" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
