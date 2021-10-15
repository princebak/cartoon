
import React, {FunctionComponent} from "react";
import {StyleSheet, View, Text} from "react-native";

type props = {
    width? : number,
    height? : number,
    color? : string
}

export const Hr : FunctionComponent<props> = ({width = 95, height= 1, color= "rgb(22,156,254)"}) =>{

    return (
        <View style={{height : height, width : width + "%", backgroundColor : color, alignSelf  : "center"}}>

        </View>
    )
}

export const Br : FunctionComponent<props> = ({width = 100, height= 10, color= "rgb(22,156,254)"}) =>{

    return (
        <View style={{height : height, width : width + "%"}}>

        </View>
    )
}

const nada = () => {
    return (
        <></>
    )
}

export default nada