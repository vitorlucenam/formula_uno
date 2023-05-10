import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';

import rankingDrivers from '../mock/rankingDrivers.json';



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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://v1.formula-1.api-sports.io/rankings/drivers',
  //         {
  //           params: {
  //             season: 2023,
  //           },
  //           headers: {
  //             'x-apisports-key': '', // replace with your API key
  //           },
  //         },
  //       );
  //       setData(response.data.response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    setData(rankingDrivers.response);
  }, []);

  return (
    <View style={styles.container}>
        <SafeAreaView>
        <FlatList
            data={data}
            renderItem={({item}) => (
            <Item title={`${item.driver.abbr}`} pilotUrl={item.driver.image} />
            )}
            keyExtractor={item => item.driver.id}
            horizontal={true}
        />
        </SafeAreaView>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    backgroundColor: 'black',
    marginTop:8,

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
