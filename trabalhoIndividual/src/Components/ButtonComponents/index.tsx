import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import Banner from '../../Assets/banner.webp';
import { batatinha } from './style';
import { PropsButton } from './type';

export function ButtonComponents({recebendoFuncao, title}: PropsButton) {

  return (
    <>
      <TouchableOpacity style={batatinha.button} onPress={recebendoFuncao}>
        <Text style={batatinha.textButton}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  )
}