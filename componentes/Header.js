import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native'; 
import Botao from './Botao'; 
import Label from './Label'; 
import Estilos from '../estilos/Estilos'; 
import {useAuth} from'../context/auth/useAuth';   

export default function Header(){    
    const {user, setUser} = useAuth();    
    
    return (         
        <View style={{
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 15,
            backgroundColor: 'transparent'
        }}>
            {/* Logo Container with Modern Styling */}
            <View style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 25,
                padding: 20,
                marginBottom: 15,
                shadowColor: '#8b5cf6',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                elevation: 15,
                borderWidth: 3,
                borderColor: 'rgba(255, 107, 157, 0.2)',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: 20,
                    padding: 15,
                    borderWidth: 2,
                    borderColor: 'rgba(139, 92, 246, 0.3)'
                }}>
                    <Image 
                        source={require('../assets/logo.png')} 
                        style={{ 
                            width: 120, 
                            height: 120,
                            borderRadius: 15
                        }}
                        resizeMode="contain"
                    />
                </View>
                
                {/* Decorative Elements */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 30,
                        height: 3,
                        backgroundColor: '#ff6b9d',
                        borderRadius: 2,
                        marginHorizontal: 5
                    }} />
                    <Text style={{
                        fontSize: 16,
                        color: '#8b5cf6',
                        fontWeight: 'bold'
                    }}>
                        🍔
                    </Text>
                    <View style={{
                        width: 30,
                        height: 3,
                        backgroundColor: '#c44569',
                        borderRadius: 2,
                        marginHorizontal: 5
                    }} />
                </View>
            </View>
            
            {/* User Info Container */}
            <View style={{
                backgroundColor: 'rgba(255, 107, 157, 0.1)',
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderWidth: 2,
                borderColor: 'rgba(255, 107, 157, 0.3)',
                shadowColor: '#ff6b9d',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 8,
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        marginRight: 8,
                        color: '#8b5cf6'
                    }}>
                        👤
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#c44569',
                        fontWeight: '600',
                        fontStyle: 'italic'
                    }}>
                        {user?.email || 'Usuário'}
                    </Text>
                </View>
                
                {/* Welcome Message */}
                <Text style={{
                    fontSize: 12,
                    color: '#8b5cf6',
                    marginTop: 5,
                    fontWeight: '500',
                    textAlign: 'center'
                }}>
                    ✨ Bem-vindo ao nosso sabor! ✨
                </Text>
            </View>
        </View>
    ); 
}