import React, {FunctionComponent} from "react";
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";
import IMangaCardProps from "../../../util/props/manga";
import {Ionicons} from "@expo/vector-icons";

const MangaSearchResultCard : FunctionComponent<IMangaCardProps> = ({manga, pressEventHandler}) =>{

    return (
        <TouchableOpacity style={styles.card} onPress={() => pressEventHandler(manga)}>
            <Image style={styles.image} source={{uri: manga.imageUrl}} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{manga.title}</Text>
                <Text style={styles.synopsis}>{manga.synopsis}</Text>
                <Text style={{ justifyContent : "center", alignContent : "center", alignItems : "center", alignSelf : "center"}} >
                    <Ionicons name="ios-hand-left-sharp" style={styles.icon}/>
                    <Text style={styles.author}> {manga.author} </Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    card : {
        flexDirection : "row",
        flexWrap : "wrap",
        width : dimensions.width - 20 ,
        height : 200,
        margin : 10,
        borderRadius : 10,
    },
    image : {
        width : dimensions.width / 2  - 30,
        height : 200,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
    },
    overlay : {
        width : dimensions.width / 2 + 8,
        height : 200,
        padding : 15,
        flexDirection : "row",
        flexWrap : "wrap",
        backgroundColor : "rgb(22,156,254)",
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
    },
    title:{
        fontWeight : "bold",
        fontSize : 25,
        color : "#fff",
    },
    synopsis : {
        paddingVertical : 10,
        color : "#fff",
        fontSize : 15,
    },
    author : {
        fontWeight : "bold",
        color : "#000"
    },
    icon : {
        fontSize : 30,
        color : "#fff",
    },
})

export default MangaSearchResultCard;