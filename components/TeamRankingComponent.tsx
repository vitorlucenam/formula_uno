import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';

import rankingTeams from '../mock/rankingTeams.json';


type ItemProps = {
  title: string;
  teamUrl: string;
};

const Item = ({title, teamUrl}: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground
      source={{uri: teamUrl}}
      style={{
        flex: 1,
        justifyContent: "center",
        width: '100%', // definir o tamanho da imagem
        height: '100%', // definir o tamanho da imagem
      }}
      imageStyle={{ borderRadius: 6}}
    >
    </ImageBackground>
  </View>
);

const TeamRankingComponent = () => {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://v1.formula-1.api-sports.io/rankings/teams',
//           {
//             params: {
//               season: 2023,
//             },
//             headers: {
//               'x-apisports-key': '0186eb79ec805c55c8a051b81003a8a3', // replace with your API key
//             },
//           },
//         );
//         setData(response.data.response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

useEffect(() => {
    setData(rankingTeams.response);
  }, []);
  
  return (
    <View style={styles.container}>
        <SafeAreaView>
        <FlatList
            data={data}
            renderItem={({item}) => (
            <Item title={`${item.team.name}`} teamUrl={item.team.logo} />
            )}
            keyExtractor={item => item.team.id}
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
    backgroundColor: '#CFD8DC',
    
  },
  item: {
    backgroundColor: '#ECEFF1',
    marginVertical: 8,
    marginHorizontal: 8,
    width: 172,
    height: 100,
    borderRadius: 24,
    overflow: "hidden", // definir overflow para a imagem ficar dentro do container
    borderWidth: 0.1,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: "white", // definir a cor do texto para branco para contrastar com o fundo
  },
});

export default TeamRankingComponent;
