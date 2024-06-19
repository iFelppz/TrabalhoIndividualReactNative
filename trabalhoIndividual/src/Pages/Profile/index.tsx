import React from 'react'
import { Alert, Text, View } from 'react-native'
import { batatinha } from './style';
import { ButtonComponents } from '../../Components/ButtonComponents';
import { useNavigation } from '@react-navigation/native';

export function Profile() {

  const navegando = useNavigation();

  const handleLogout = () =>{
    navegando.navigate("StackLogin", { name: "Login" })
  }

  return (
    <View style={batatinha.container}>
      <Text style={batatinha.title}>
        Estamos na pagina Profile!
      </Text>
      
      <ButtonComponents title='Sair' recebendoFuncao={handleLogout}/>
    </View>
  )
}