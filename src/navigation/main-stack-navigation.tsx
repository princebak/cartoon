import React, {FunctionComponent} from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HOME_SCREEN, MANGA_DETAILS_SCREEN} from "../util/constant/screens";
import HomeScreen from "../screen/home";
import MangaDetailsScreen from "../screen/manga-details";
import EmptyHeaderComponent from "../component/empty-header-component";


const MainStackNavigation : FunctionComponent = () =>{

    const StackNavigation = createNativeStackNavigator();
    return (
        <StackNavigation.Navigator screenOptions={{header : (props) => <EmptyHeaderComponent /> }}  >
            <StackNavigation.Screen name={HOME_SCREEN} component={HomeScreen}/>
            <StackNavigation.Screen name={MANGA_DETAILS_SCREEN} component={MangaDetailsScreen}/>
        </StackNavigation.Navigator>
    )
}

export default MainStackNavigation