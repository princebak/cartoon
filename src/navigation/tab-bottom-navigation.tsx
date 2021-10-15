import React, {FunctionComponent} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MAIN_STACK_NAVIGATION} from "./navigations-names";
import MainStackNavigation from "./main-stack-navigation";
import {FAVORITES_SCREEN, SEARCH_SCREEN, USER_PROFILE_SCREEN} from "../util/constant/screens";
import SearchScreen from "../screen/search-screen";
import FavoritesScreen from "../screen/favorite-screen";
import UserProfileScreen from "../screen/user-profile";
import EmptyHeaderComponent from "../component/empty-header-component";
import{StyleSheet} from "react-native";
import TabBottomIcon from "../component/tab-bottom-icon";
import {useGlobalContext} from "../util/context/global";

const TabBottomNavigation : FunctionComponent = () =>{
    const bottomNavigation = createBottomTabNavigator();

    const {setIsSearchScreenFocused} = useGlobalContext()
    const stateChangeHandler = (e : any) =>{
        const currentScreenIndex = e.data.state.index ;
        setIsSearchScreenFocused( currentScreenIndex == 2)
    }
    return (
        <bottomNavigation.Navigator screenListeners={ {state  : (e) => stateChangeHandler(e) } } screenOptions={  {tabBarHideOnKeyboard : true, header : (props) => <EmptyHeaderComponent/>, title : "" }} >
            <bottomNavigation.Screen options={{tabBarIcon : (props) => <TabBottomIcon icon="home" focused={props.focused} /> }} name={MAIN_STACK_NAVIGATION} component={MainStackNavigation}/>
            <bottomNavigation.Screen options={{tabBarIcon : (props) => <TabBottomIcon icon="heart" focused={props.focused} /> }} name={FAVORITES_SCREEN} component={FavoritesScreen}/>
            <bottomNavigation.Screen options={{tabBarIcon : (props) => <TabBottomIcon icon="search" focused={props.focused} /> }} name={SEARCH_SCREEN} component={SearchScreen}/>
            <bottomNavigation.Screen options={{tabBarIcon : (props) => <TabBottomIcon icon="person-circle" focused={props.focused} /> }} name={USER_PROFILE_SCREEN} component={UserProfileScreen}/>
        </bottomNavigation.Navigator>
    )
}

const styles = StyleSheet.create({
    icon :{
        marginTop : 10,
        fontSize : 30,
    }
})
export default TabBottomNavigation;