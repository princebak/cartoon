import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import DrawerNavigation from "./src/navigation/dawer-navigation";

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import GlobalContextProvider from "./src/util/context/global";

export default function App() {


    return(
        <GlobalContextProvider>
            <NavigationContainer>
                <DrawerNavigation />
            </NavigationContainer>
        </GlobalContextProvider>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
