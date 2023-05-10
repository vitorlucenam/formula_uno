import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AdvancedCardCarousel from '../components/netflix-simple-carousel';
import PilotsRanking from '../components/PilotsRankingComponent';

const HomeScreen = () => (
    <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <AdvancedCardCarousel />
        <PilotsRanking />
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;