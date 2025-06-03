import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { DrawerItemList } from '@react-navigation/drawer';

export default function Pedidos({ navigation }) {
  const [itensCardapio, setItensCardapio] = useState([]);
  const [endereco, setEndereco] = useState('');
  const [itensPedido, setItensPedido] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const carregarCardapio = async () => {
    try {
      const colecoes = ['Lanches', 'Combos', 'Bebidas', 'Doces', 'Promoções'];
      let itensTotais = [];

      for (const nomeColecao of colecoes) {
        const snapshot = await getDocs(collection(db, nomeColecao));
        const itens = snapshot.docs.map(doc => ({
          id: doc.id,
          titulo: doc.titulo,
          preco: doc.preco,
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
    setItensPedido([...itensPedido, item]);
  };

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
      alert('Pedido salvo com sucesso!');
    } catch (error) {
      console.error("Erro ao adicionar pedido: ", error);
    }
  };

  const calcularTotal = () => {
    return itensPedido.reduce((total, item) => total + parseFloat(item.preco), 0).toFixed(2);
  };

  useEffect(() => {
    carregarCardapio();
  }, []);

  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#fff',
      background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'
    }}>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        margin: 20,
        borderRadius: 25,
        padding: 25,
        shadowColor: '#8b5cf6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 15,
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#8b5cf6',
          marginBottom: 20,
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
        }}>
          🛒 Fazer Pedido
        </Text>
        
        <TouchableOpacity 
          style={{
            backgroundColor: '#ff6b9d',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 25,
            shadowColor: '#ff6b9d',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 8,
            borderWidth: 2,
            borderColor: '#fff'
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Novo Pedido
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#fff',
          background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'
        }}>
          <ScrollView style={{ backgroundColor: 'transparent' }}>
            <View style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              margin: 15,
              borderRadius: 25,
              padding: 20,
              shadowColor: '#8b5cf6',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.25,
              shadowRadius: 15,
              elevation: 12
            }}>
              <Text style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#8b5cf6',
                textAlign: 'center',
                marginBottom: 20,
                textShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
              }}>
                🍔 Novo Pedido
              </Text>

              <View style={{
                backgroundColor: 'rgba(255, 107, 157, 0.1)',
                borderRadius: 15,
                padding: 15,
                marginBottom: 20,
                borderWidth: 2,
                borderColor: 'rgba(255, 107, 157, 0.3)'
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#c44569',
                  marginBottom: 10
                }}>
                  📍 Endereço de Entrega:
                </Text>
                <TextInput
                  placeholder="Digite seu endereço completo..."
                  value={endereco}
                  onChangeText={setEndereco}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    padding: 15,
                    borderWidth: 1,
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    fontSize: 16,
                    color: '#333',
                    shadowColor: '#8b5cf6',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3
                  }}
                  placeholderTextColor="rgba(139, 92, 246, 0.5)"
                />
              </View>

              <View style={{
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderRadius: 15,
                padding: 15,
                marginBottom: 20,
                borderWidth: 2,
                borderColor: 'rgba(139, 92, 246, 0.3)'
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                  marginBottom: 15,
                  textAlign: 'center'
                }}>
                  🍕 Cardápio Disponível:
                </Text>
                <FlatList
                  data={itensCardapio}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        padding: 12,
                        margin: 5,
                        alignItems: 'center',
                        shadowColor: '#ff6b9d',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        elevation: 6,
                        borderWidth: 1,
                        borderColor: 'rgba(255, 107, 157, 0.2)',
                        minHeight: 120
                      }}
                      onPress={() => adicionarItemAoPedido(item)}
                    >
                      <Image 
                        source={{ uri: item.imagem }} 
                        style={{ 
                          width: 60, 
                          height: 60,
                          borderRadius: 10,
                          marginBottom: 8,
                          borderWidth: 1,
                          borderColor: 'rgba(139, 92, 246, 0.2)'
                        }}
                      />
                      <Text style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#8b5cf6',
                        textAlign: 'center',
                        marginBottom: 4
                      }}>
                        {item.titulo}
                      </Text>
                      <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#c44569',
                        textAlign: 'center'
                      }}>
                        R$ {item.preco}
                      </Text>
                    </TouchableOpacity>
                  )}
                  numColumns={4}
                  columnWrapperStyle={{ justifyContent: 'space-around' }}
                />
              </View>

              <View style={{
                backgroundColor: 'rgba(196, 69, 105, 0.1)',
                borderRadius: 15,
                padding: 15,
                marginBottom: 20,
                borderWidth: 2,
                borderColor: 'rgba(196, 69, 105, 0.3)'
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#c44569',
                  marginBottom: 15,
                  textAlign: 'center'
                }}>
                  Itens Selecionados:
                </Text>
                <FlatList
                  data={itensPedido}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View style={{
                      backgroundColor: '#fff',
                      borderRadius: 12,
                      padding: 15,
                      marginBottom: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      shadowColor: '#c44569',
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.15,
                      shadowRadius: 6,
                      elevation: 5,
                      borderWidth: 1,
                      borderColor: 'rgba(196, 69, 105, 0.2)'
                    }}>
                      <View style={{ flex: 1 }}>
                        <Text style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: '#8b5cf6',
                          marginBottom: 2
                        }}>
                          {item.titulo}
                        </Text>
                        <Text style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: '#c44569'
                        }}>
                          R$ {item.preco}
                        </Text>
                      </View>
                      <TouchableOpacity 
                        style={{
                          backgroundColor: '#ff6b9d',
                          paddingVertical: 8,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                          shadowColor: '#ff6b9d',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.3,
                          shadowRadius: 4,
                          elevation: 4
                        }}
                        onPress={() => removerItem(index)}
                      >
                        <Text style={{
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 'bold'
                        }}>
                          Remover
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                  textAlign: 'right',
                  marginTop: 10
                }}>
                  Total: R$ {calcularTotal()}
                </Text>
              </View>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
              }}>
                <TouchableOpacity 
                  style={{
                    backgroundColor: '#8b5cf6',
                    paddingVertical: 15,
                    paddingHorizontal: 25,
                    borderRadius: 15,
                    flex: 1,
                    marginRight: 10,
                    shadowColor: '#8b5cf6',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8
                  }}
                  onPress={adicionarPedido}
                >
                  <Text style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    ✅ Salvar Pedido
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={{
                    backgroundColor: '#c44569',
                    paddingVertical: 15,
                    paddingHorizontal: 25,
                    borderRadius: 15,
                    flex: 1,
                    marginLeft: 10,
                    shadowColor: '#c44569',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    ❌ Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
