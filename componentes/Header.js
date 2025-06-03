import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native'; 
import Botao from './Botao'; 
import Label from './Label';  
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
            <View style={{
                backgroundColor: '#cb6ce6',
                borderRadius: 20,
                padding: 15,
                margin: 10,
                width: 1400,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image 
                    source={require('../assets/logo.png')} 
                    style={{ 
                        width: 220, 
                        height: 220,
                        borderRadius: 15
                    }}
                    resizeMode="contain"
                />
            </View>
            
            {/* Informações do usuário */}
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
                
                {/* Mensagem de boas vindas */}
                <Text style={{
                    fontSize: 12,
                    color: '#8b5cf6',
                    marginTop: 5,
                    fontWeight: '500',
                    textAlign: 'center'
                }}>
                    Bem vindx!
                </Text>
            </View>
        </View>
    ); 
}