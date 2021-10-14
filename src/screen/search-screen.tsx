import React, {FunctionComponent, useEffect, useState} from "react";
import {StyleSheet, View, Text, Image, FlatList, Keyboard} from "react-native";
import IScreenGlobalProps from "../util/props/screen";
import IManga, {MangasMock} from "../model/manga";
import MangaSearchResultCard from "../component/card/manga/search-result-card";
import {MANGA_DETAILS_SCREEN} from "../util/constant/screens";
import {useGlobalContext} from "../util/context/global";
import MangaExternalService from "../infra/mangaExternalService";


const SearchScreen : FunctionComponent<IScreenGlobalProps> = ({route, navigation}) =>{
    const [mangas, setMangas] = useState<IManga[]>(MangasMock);
    const {text} = useGlobalContext()

    useEffect( () => {
        setMangas(MangaExternalService.getMangas(text))
    }, [text])

    const onPressEventHandler = (manga : IManga) =>{
        console.log("manga pressed on search screen : ", manga);
        navigation.navigate(MANGA_DETAILS_SCREEN, {manga});
    }

    const renderItem = (manga : IManga) =>{
        return <MangaSearchResultCard manga={manga} pressEventHandler={onPressEventHandler}/>
    }
    return(
        <View style={styles.container}>

            <FlatList
                ListHeaderComponent={ <Text style={styles.header}>
                    Resultats : <Text style={styles.nombre}> {mangas.length} </Text>
                </Text> }
                data={mangas}
                renderItem={ ({item}) => renderItem(item)}
                keyExtractor={manga => manga.id}
                onScroll={ Keyboard.dismiss}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingBottom : 10,
    },
    header : {
        paddingHorizontal : 15,
        fontSize : 20,
    },
    nombre :{
        fontWeight : "bold",
    },
})
export default SearchScreen