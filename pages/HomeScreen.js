import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AdvancedCardCarousel from '../components/netflix-simple-carousel';
import PilotsRanking from '../components/PilotsRankingComponent';

const HomeScreen = () => (
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <AdvancedCardCarousel />
        <PilotsRanking />
        <PilotsRanking />
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;