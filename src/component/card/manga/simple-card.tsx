import React, {FunctionComponent, useEffect, useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Button,
    TouchableWithoutFeedback
} from "react-native";
import IMangaCardProps from "../../../util/props/manga";


const MangaSimpleCard : FunctionComponent<IMangaCardProps> = ({manga, pressEventHandler = (manga) => console.log("simple card manga pressed : ", manga)}) =>{

    return(
        <TouchableOpacity activeOpacity={0.92} onPress={() =>  pressEventHandler(manga)} >
            <ImageBackground imageStyle={styles.backgroundImage} style={styles.card} source={ {uri : manga.imageUrl } } >
                <View style={styles.overlay}></View>
                <Text style={styles.title}>
                    {manga.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card:{
        // marginHorizontal : 20,
        marginRight: 20,
        width : 150,
        height : 200,
        alignItems : "center",
        justifyContent : "center",
    },
    backgroundImage:{
        borderRadius : 20,
        resizeMode : "cover",
    },
    overlay:{
        borderRadius : 20,
        padding : 10,
        height: 200,
        width : 150,
        backgroundColor : "#000",
        opacity  : 0.5,
        position : "absolute",
    },
    title:{
        fontWeight : "bold",
        fontSize : 20,
        color: "#fff"
    },
    synopsis:{
        marginTop : 3,
        textAlign : "justify",
        color: "#fff"
    }
})

export default MangaSimpleCard;