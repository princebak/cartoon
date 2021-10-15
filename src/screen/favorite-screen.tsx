import React, {FunctionComponent, useState} from "react";
import {StyleSheet, View, Text, Image, FlatList, ScrollView} from "react-native";
import IScreenGlobalProps from "../util/props/screen";
import IManga, {MangasMock} from "../model/manga";
import MangaSimpleCard from "../component/card/manga/simple-card";
import MangaFavoriteCard from "../component/card/manga/favoryte-card";


const FavoritesScreen : FunctionComponent<IScreenGlobalProps> = ({route, navigation}) =>{
    const [mangas, setMangas] = useState<IManga[]>(MangasMock);

    const renderItem = (manga : IManga) =>{
        return <MangaFavoriteCard key={manga.id} manga={manga} />
    }
    return(

        <ScrollView >
            <Text style={styles.header}>
                <Text style={styles.nombre}> {mangas.length} </Text>
                 manga(s) favoris
            </Text>
            <View style={styles.container}>
                {mangas.map(manga => {
                    return renderItem(manga) // <Image source={{uri : manga.imageUrl}} style={{width : 200, height : 200, margin : 10}}/>
                })}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "center",
    },
    header : {
        padding : 15,
        fontSize : 20,
    },
    nombre :{
        fontWeight : "bold",
    },
})
export default FavoritesScreen