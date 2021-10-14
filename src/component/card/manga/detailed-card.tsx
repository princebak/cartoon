import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button} from "react-native";
import IManga from "../../../model/manga";
import UserProfileScreen from "../../../screen/user-profile";

const image = require("../../../../assets/custom/bonjour.jpg")

export const MangaDetailsCard : FunctionComponent<{manga : IManga}> = ({manga}) =>{


    return (
        <ImageBackground imageStyle={MangaDetailsCardStyles.imageBackgroundStyle} style={MangaDetailsCardStyles.listContainer} source={ {uri : manga.imageUrl }}>
            <Image style={MangaDetailsCardStyles.cover} source={ {uri : manga.imageUrl}} />
            <View style={MangaDetailsCardStyles.details}>
                <Text style={MangaDetailsCardStyles.title}>
                    {manga.title}
                </Text>
                <Text style={MangaDetailsCardStyles.category}>
                    {manga.category}
                </Text>
                <Text style={MangaDetailsCardStyles.category}>
                    par : {manga.author}
                </Text>

                <Text style={MangaDetailsCardStyles.synopsis}>
                    {manga.synopsis}
                </Text>
            </View>
            <Text style={MangaDetailsCardStyles.button}>
                button
            </Text>
        </ImageBackground>
    )
}

const MangaDetailsCardStyles = StyleSheet.create({
    listContainer: {
        // flex : 1,
        flexDirection: "row",
        width : "100%",
        height : 250,
    },
    imageBackgroundStyle:{
        resizeMode : "stretch",
    },
    cover : {
        width : "50%",
        height : "100%",
        opacity : 0.8,
    },
    details:{
        width : "50%",
        height :  "100%" ,
        padding : 10,
        // textAlign : "justify",
        backgroundColor : "#000",
        opacity : 0.8
    },
    title :{
        color : "#fff",
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 10,
    },
    category : {
        color : "#fff",
        fontSize : 15,
        fontWeight : "bold",
        borderRadius : 10,
    },
    synopsis : {
        textAlign : "justify",
        paddingTop : 20,
        color : "#fff"
    },
    button:{
        backgroundColor : "#000",
        padding : 10,
        color : "red",
    }
})

