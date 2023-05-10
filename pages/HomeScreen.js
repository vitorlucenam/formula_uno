import * as React from 'react';
import { View } from 'react-native';

import AdvancedCardCarousel from '../components/netflix-simple-carousel';
import PilotsRanking from '../components/PilotsRankingComponent';
import TeamRankingComponent from '../components/TeamRankingComponent';
import RssFeed from '../components/RssFeed';

const HomeScreen = () => (
    <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <AdvancedCardCarousel />
        <TeamRankingComponent />
        <PilotsRanking />
        <RssFeed />
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;