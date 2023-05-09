import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';


type ItemProps = {
  title: string;
  pilotUrl: string;
};

const Item = ({title, pilotUrl}: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground
      source={{uri: pilotUrl}}
      style={{
        flex: 1,
        justifyContent: "center",
        width: '100%', // definir o tamanho da imagem
        height: '100%', // definir o tamanho da imagem
      }}
      imageStyle={{ borderRadius: 6}}
    >
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  </View>
);

const PilotsRanking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://v1.formula-1.api-sports.io/rankings/drivers',
          {
            params: {
              season: 2023,
            },
            headers: {
              'x-apisports-key': '0186eb79ec805c55c8a051b81003a8a3', // replace with your API key
            },
          },
        );
        setData(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item title={`${item.driver.abbr}`} pilotUrl={item.driver.image} />
        )}
        keyExtractor={item => item.driver.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'steelblue',
    marginVertical: 8,
    marginHorizontal: 8,
    width: 80,
    height: 80,
    borderRadius: 20,
    overflow: "hidden", // definir overflow para a imagem ficar dentro do container
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: "white", // definir a cor do texto para branco para contrastar com o fundo
  },
});

export default PilotsRanking;