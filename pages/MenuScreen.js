import * as React from 'react';
import { Text, View } from 'react-native';


const MenuScreen = (navigation) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Menu do arquivooooo</Text>
    </View>
);

MenuScreen.navigationOptions = {
    title:'NewMenu',
}

export default MenuScreen;