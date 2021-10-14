import React, {FunctionComponent} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {Episode} from "../../../model/manga";
import {Br, Hr} from "../../helper";

export const MangaEpisodeCard : FunctionComponent<{episode : Episode}> = ({episode}) =>{

    return (
        <TouchableOpacity style={styles.episode}>
            <Image style={styles.image} source={require("../../../../assets/custom/bonjour.jpg")} />
            <View style={{justifyContent : "center"}}>
                <Text style={{fontWeight : "bold", marginVertical : 5}}>
                    {episode.title}
                </Text>
                <Text style={styles.releaseDate}>{episode.releaseDate}</Text>
            </View>
        </TouchableOpacity>
    )
}


type props={
    episodes : Episode[]
}
const MangaEpisodeList : FunctionComponent<props> = ({episodes}) =>{

    const renderItem = (episode : Episode) =>{
        return(
            <MangaEpisodeCard episode={episode} />
        )
    }
    return (
        <View >

            <Text style={styles.title}>
                Episode(s) : {episodes.length}
            </Text>
            <FlatList
                data={episodes}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={episode => episode.id}
            />

            {/*<Br height={40}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    episode : {
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomWidth : 1,
        borderBottomColor: "rgb(22,156,254)",
        marginHorizontal : 10,
        paddingVertical : 10,
    },
    listContainer: {
        flexDirection : "row",
        flexWrap : "wrap",
        height : 40,
        borderRadius : 10,
        margin : 10,
    },
    image : {
        width : 60,
        height : 60,
        resizeMode : "cover",
        marginRight : 10,
    },
    title : {
        marginLeft : 10,
        fontWeight : "bold",
        fontSize : 20,
        width : 400,
    },
    releaseDate : {

    }
})
export default MangaEpisodeList