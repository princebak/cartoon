import React, {FunctionComponent, useEffect, useState} from 'react';
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";


const TabBottomIcon : FunctionComponent<{icon: string, focused : boolean}> = ({icon, focused}) =>{

    const getIcon = () => {
        switch (icon) {
            case "home": return <Ionicons name={icon} style={[styles.icon, focused ? styles.active : {}]} />
            case "heart": return <Ionicons name={icon} style={[styles.icon, focused ? styles.active : {}]} />
            case "search" : return <Ionicons name={icon} style={[styles.icon, focused ? styles.active : {}]} />
            case "person-circle": return <Ionicons name={icon} style={[styles.icon, focused ? styles.active : {}]} />
        }
    }
    return(
        <>
            {getIcon()}
        </>
    )
}

const styles = StyleSheet.create({
    icon :{
        marginTop : 5,
        fontSize : 30,
    },
    active:{
      color : "rgb(22,156,254)",
    },
})


export default TabBottomIcon;