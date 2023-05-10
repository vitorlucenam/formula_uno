import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AdvancedCardCarousel from '../components/netflix-simple-carousel';
import PilotsRanking from '../components/PilotsRankingComponent';
import TeamRankingComponent from '../components/TeamRankingComponent';

const HomeScreen = () => (
    <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <AdvancedCardCarousel />
        <PilotsRanking />
        <TeamRankingComponent />
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;