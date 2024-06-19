import React from 'react'
import { FlatList, View, Text, Image, ImageSourcePropType } from 'react-native'
import { LoadRepos } from './Footer';
import { batatinha } from './style';
import { PropsApi } from '../../Pages/Home';

interface PropsReposMockado {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  id: string | number;
}

interface PropsApiComponent {
  isLoading: boolean;
  handleApi?: () => void;
  repoGit?: PropsApi[]
  repositorioMockado?: PropsReposMockado[];
  tipoDeArray?: boolean;
}

export function CardApi({ handleApi, isLoading, repoGit, repositorioMockado, tipoDeArray }: PropsApiComponent) {

  return (

    <>
      {tipoDeArray ? (
        <FlatList
          style={{ height: 300 }}
          horizontal={true}
          data={repositorioMockado}
          // keyExtractor={item => item.id.toString()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <View style={batatinha.boxArray}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={batatinha.titleArrayHorizontal}>{item.title}</Text>
                <Image style={batatinha.logo} source={item.image} alt="banner" />
              </View>

              <Text style={batatinha.subTitleArray}>{item.subTitle}</Text>
            </View>
          }
        />

      ) : (
        <FlatList
          style={{ width: '100%' }}
          data={repoGit}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          // keyExtractor={item => item.id.toString()}
          onEndReached={handleApi}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<LoadRepos recebendoLoading={isLoading} />}
          renderItem={({ item }) =>
            <View style={batatinha.boxArrayVertical}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={batatinha.titleArray}>{item.name}</Text>
                <Image style={batatinha.logo2} source={{ uri: item.owner.avatar_url }} alt="banner" />
              </View>
            </View>
          }
        />
      )}

    </>
  )
}