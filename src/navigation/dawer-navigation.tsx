import React, {FunctionComponent} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabBottomNavigation from "./tab-bottom-navigation";
import AboutUsScreen from "../screen/about-us-screen";
import {TAB_BOTTOM_NAVIGATION} from "./navigations-names";
import {ABOUT_US_SCREEN, CONNEXION_SCREEN} from "../util/constant/screens";
import HeaderComponent from "../component/header-component";
import EmptyHeaderComponent from "../component/empty-header-component";

const DrawerNavigation : FunctionComponent = () =>{
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{header : (props) => <HeaderComponent props={props} />, title : "Accueil" }} name={TAB_BOTTOM_NAVIGATION} component={TabBottomNavigation}/>
            <Drawer.Screen options={{header : (props) => <EmptyHeaderComponent />, title : "Apropos de YBC" }}  name={ABOUT_US_SCREEN} component={AboutUsScreen}/>
            <Drawer.Screen options={{header : (props) => <EmptyHeaderComponent />, title : "connexion" }}  name={CONNEXION_SCREEN} component={AboutUsScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;