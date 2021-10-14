import React, {FunctionComponent, useState} from "react";
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import {IScreenMangaDetailsProps} from "../util/props/screen";
import IManga from "../model/manga";
import MangaEpisodeList from "../component/card/manga/episode";
import {MangaDetailsCard} from "../component/card/manga/detailed-card";

const MangaDetailsScreen : FunctionComponent<IScreenMangaDetailsProps> = ({navigation, route}) =>{

    const manga : IManga = route.params.manga

    return (
        <ScrollView style={styles.listContainer}>
            <View >
                <MangaDetailsCard manga={manga} />
                 {/*readButtonPressEventHandler={manga => console.log("press read button")} />*/}

                <View style={styles.actionsZone}>
                    <TouchableOpacity >
                        <Text style={[styles.actionControl, { width : 150, padding : 10 }]}> Lire maintenant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.actionControl, {width : 150, padding : 10 }]}> Partager</Text>
                    </TouchableOpacity>

                </View>
                <MangaEpisodeList episodes={manga.episodes} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    overlay : {
        width : 300 ,
        height : 300,
        position : "absolute",
        borderRadius : 20,
    },
    listContainer:{
        flex : 1,
        // overflow : "visible",
        paddingBottom: 50,
    },
    description :{

    },
    actionsZone : {
        // width : "100%",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "center",
    },
    actionControl:{
        margin : 10,
        backgroundColor : "rgb(22,156,254)",
        opacity : 0.9,
        fontSize: 15,
        color : "#fff",
        textAlign : "center",
    },

    indicator:{
    }

})

export default MangaDetailsScreen