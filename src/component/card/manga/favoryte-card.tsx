import React, {FunctionComponent} from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ImageBackground,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import IMangaCardProps from "../../../util/props/manga";
import IManga from "../../../model/manga";

const MangaFavoriteCard : FunctionComponent<IMangaCardProps> = ({manga, pressEventHandler = (manga : IManga) => console.log(manga)}) =>{

    return (
        <TouchableOpacity onPress={() => pressEventHandler(manga) }>
            <ImageBackground source={{uri : manga.imageUrl}} style={styles.card} imageStyle={styles.imageStyle}>
                <View style={styles.overlay}></View>
                <Text style={styles.title}> {manga.title} </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    card :{
        width : (dimensions.width / 2) - 20,
        height : 200,
        borderRadius : 10,
        margin : 5,
        alignItems : "center",
        justifyContent : "center",
    },
    imageStyle : {
        resizeMode : "cover",
    },
    overlay : {
        width : (dimensions.width / 2) - 20,
        height : 200,
        borderRadius : 10,
        position : "absolute",
        backgroundColor : "#000",
        opacity : 0.4,
    },
    title:{
        color : "#fff",
        fontSize : 18,
        fontWeight : "bold",
    }
})

export default MangaFavoriteCard;