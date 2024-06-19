import React, { useState } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import { TextInputComponent } from '../../Components/TextInput';
import { ButtonComponents } from '../../Components/ButtonComponents';
import { style } from './style';
import Vascao from '../../Assets/vascofundo2.jpg';
import { useNavigation } from '@react-navigation/native';


export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  const handleLogin = () => {
    if(email) {
      navegando.navigate("StackTabsPages", { name: "Login" })
    } else {
      Alert.alert("Credenciais invalidas!")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={style.container}>
      <Image style={style.logo} source={Vascao} alt="Banner tela login"/>
        <Text style={style.title}>Bem vindo, Vascão!</Text>

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Digite seu email..."
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Digite sua senha..."
          recebendoTipoDoInput={true}
        />

        <ButtonComponents title='Entrar' recebendoFuncao={handleLogin} />

      </View>
    </TouchableWithoutFeedback>
  )
}