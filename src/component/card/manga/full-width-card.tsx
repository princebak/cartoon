import React, {FunctionComponent} from "react";
import {
    Dimensions,
    ImageBackground,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import IManga from "../../../model/manga";
import IMangaCardProps from "../../../util/props/manga";

const image = require("../../../../assets/custom/bonjour.jpg")


const MangaFullWidthCard  : FunctionComponent<IMangaCardProps> = ({manga, pressEventHandler}) =>{
    return (
        <TouchableOpacity activeOpacity={0.92} onPress={() => pressEventHandler ? pressEventHandler(manga) : null}>
            <ImageBackground  style={styles.card} imageStyle={styles.backgroundImage} source={{uri : manga.imageUrl}} >
                <View style={[styles.overlay, styles.overlay]}>
                    { /*empty view (don't have children), used to apply an overlay effect on the parent*/ }
                </View>
                <Text style={ styles.title}>
                    {manga.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
    card : {
        width : dimensions.width - 20 ,
        height : 300,
        marginHorizontal : 10,
        alignItems : "center",
        justifyContent : "center",
        alignContent : "center",
    },
    backgroundImage: {
        resizeMode : "cover",
        borderRadius : 20,
    },
    overlay : {
        width : dimensions.width - 20 ,
        height : 300,
        position : "absolute",
        borderRadius : 20,
        backgroundColor : "#000",
        opacity : 0.2,
    },
    title:{
        fontWeight : "bold",
        fontSize : 25,
        color : "#fff",
    }
})

export default MangaFullWidthCard