import React, {FunctionComponent, useEffect, useState} from "react";
import {StyleSheet, View, Text, Image, FlatList, Dimensions} from "react-native";
import IScreenGlobalProps from "../util/props/screen";
import IManga from "../model/manga";
import MangaSimpleCard from "../component/card/manga/simple-card";
import MangaExternalService from "../infra/mangaExternalService";
import {MANGA_DETAILS_SCREEN} from "../util/constant/screens";


const UserProfileScreen : FunctionComponent<IScreenGlobalProps> = ({route, navigation}) =>{

    const [mangas, setMangas] = useState<IManga[]>()

    useEffect( () => {
        setMangas(MangaExternalService.getLastReads());
    })
    const renderItem = (manga : IManga) =>{
        return <MangaSimpleCard manga={manga} pressEventHandler={ manga => navigation.navigate(MANGA_DETAILS_SCREEN, {manga})}/>
    }
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Image source={{uri : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-4-193x278.jpg"}} style={styles.image}/>
                <View style={styles.details}>
                    <Text> Nom complet</Text>
                    <Text> Lorem ipsum sit dolor amet consectetur adipisicing elLorem ipsum sit dolor amet consectetur adipisicing elLorem ipsum sit dolor amet consectetur adipisicing elLorem ipsum sit dolor amet consectetur adipisicing el</Text>
                </View>
            </View>
            <View style={{ marginTop : 10}}>
                <Text style={styles.list_title}>Lu recemment</Text>
                <FlatList
                    data={mangas} renderItem={({item}) => renderItem(item)}
                    keyExtractor={manga => manga.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const dimensions = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : "column",
        flexWrap: "wrap",
    },
    head : {
        flexDirection : "row",
        flexWrap : "wrap",
        height : 200,
        width : dimensions.width,
    },
    image : {
        width : "40%",
        height : "100%",
    },
    details : {
        padding : 10,
        width : "50%", // dimensions.width - 50,// - 30,
        flexDirection : "row",
        flexWrap : "wrap",
    },
    list_title : {
        marginLeft : 11,
        fontSize : 20,
        fontWeight : "bold",
    },
    flat_list : {
        // flexDirection : "column"
    },
})
export default UserProfileScreen