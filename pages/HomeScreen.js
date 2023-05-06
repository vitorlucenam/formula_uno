import * as React from 'react';
import { Text, View } from 'react-native';


const HomeScreen = (navigation) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nova home no arquivo!</Text>
    </View>
);

HomeScreen.navigationOptions = {
    title:'NewHome',
}

export default HomeScreen;