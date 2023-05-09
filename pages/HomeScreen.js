import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SimpleCardCarousel from '../components/netflix-simple-carousel';

const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SimpleCardCarousel />
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;