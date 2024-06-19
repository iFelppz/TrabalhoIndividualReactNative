import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { styles } from './style';
import leoj from '../../Assets/Leo-J.png';
import pumita from '../../Assets/Puma.png';
import maicon from '../../Assets/Maicon.png';
import leo from '../../Assets/Leo-4.png';
import lucas from '../../Assets/Piton.png';
import galdames from '../../Assets/Galdames.png';
import sforza from '../../Assets/Sforza.png';
import matheus from '../../Assets/Matheus-C.png';
import payet from '../../Assets/Payet.png';
import david from '../../Assets/David.png';
import vegetti from '../../Assets/Vegetti.png';
import jair from '../../Assets/jairHd.jpg';
import pauli from '../../Assets/paulin.jpg';
import coutin from '../../Assets/coutin.jpg';
import payethd from '../../Assets/payethd.jpg';
// import { ArrayMocado } from '../../Mock/ArrayMocado';
// import { ArrayMocado2 } from '../../Mock/ArrayMocado';

export function Home() {

const [data, setData] = useState([]);

const arrayMocado = [
  {
    "id": 1,
    "name": "Léo Jardim",
    "subTitle": "Goleiro",
    image: leoj
  },
  {
    "id": 2,
    "name": "Pumita",
    "subTitle": "Lateral Direito",
    image: pumita
  },
  {
    "id": 3,
    "name": "Maicon",
    "subTitle": "Zagueiro",
    image: maicon
  },
  {
    "id": 4,
    "name": "Léo",
    "subTitle": "Zagueiro",
    image: leo
  },
  {
    "id": 5,
    "name": "Lucas Piton",
    "subTitle": "Lateral Esquerdo",
    image: lucas
  },
  {
    "id": 6,
    "name": "Matheus Cocão",
    "subTitle": "Volante",
    image: matheus
  },
  {
    "id": 7,
    "name": "Sforza",
    "subTitle": "Volante",
    image: sforza
  },
  {
    "id": 8,
    "name": "Galdmaes",
    "subTitle": "Meio-campista",
    image: galdames
  },
  {
    "id": 9,
    "name": "Payet",
    "subTitle": "Meio-campista",
    image: payet
  },
  {
    "id": 10,
    "name": "Vegetti",
    "subTitle": "Atacante",
    image: vegetti
  },
  {
    "id": 11,
    "name": "David",
    "subTitle": "Atacante",
    image: david
  },
]


const arrayMocado2 = [
  {
    "id": 1,
    "name": "Paulinho",
    "subTitle": "Volante",
    image: pauli
  },
  {
    "id": 2,
    "name": "Jair",
    "subTitle": "Meio-campista",
    image: jair
  },
  {
    "id": 3,
    "name": "Payet",
    "subTitle": "Meio-campista",
    image: payethd
  },
  {
    "id": 4,
    "name": "Coutinho",
    "subTitle": "Atacante",
    image: coutin
  },


]  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elenco Atual!</Text>

      <FlatList
        style={{ height: 400 }}
        horizontal={true}
        data={arrayMocado}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.boxArray}>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.nameArray}>{item.name}</Text>
              <Image style={styles.foto} source={item.image} alt="foto" />
              <Text style={styles.subTitleArray}>{item.subTitle}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.title}>Meio Campo dos sonhos!</Text>
      <FlatList
        style={{ width: "100%" }}
        data={arrayMocado2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.boxArrayVertical}>
            <View style={{ flexDirection: "column" }}>
              <Image style={styles.foto2} source={item.image} alt="foto" />
            </View>
          </View>
        )}
      />
    </View>
  );
}