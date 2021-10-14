import React, {FunctionComponent, useState} from "react";
import {StyleSheet, FlatList, View, Text, ImageBackground, Button, TouchableOpacity} from "react-native";
import IManga, {MangasMock} from "../../model/manga";
import { Ionicons } from '@expo/vector-icons';
import MangaSimpleCard from "../card/manga/simple-card";

const ListEmptyComponent : FunctionComponent = () =>{
    return (
        <ImageBackground style={{flex : 1, alignItems : "center", justifyContent : "center" , width : "100%", height  : 300}} source={{uri : "https://oybcomics.net/wp-content/uploads/2021/07/logo-OYB-original_Plan-de-travail-1-bLUE2.png"}} >
            <Text style={{fontWeight : "bold", fontSize : 35}}>Liste vide</Text>
        </ImageBackground>
    )
}


const MangaListNormal : FunctionComponent<{header : string, mangaPressEventHandler : (manga : IManga) => void }> = ({header, mangaPressEventHandler}) =>{
    const [mangas, setMangas] = useState<IManga[]>(MangasMock)

    const renderItem = (manga: IManga) =>{
        return <MangaSimpleCard manga={manga} pressEventHandler={mangaPressEventHandler} />
    }

    return(
        <View style={styles.listContainer}>
            <Text style={styles.header}>
                {header}
            </Text>
            <FlatList

                keyExtractor={ manga => manga.id }
                data={mangas}
                renderItem={ ({item}) => renderItem(item)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={ <ListEmptyComponent/>}
            />
            <View style={styles.controlsZone}>
                <TouchableOpacity  style={[styles.controlButton, {left : 0}]} onPress={() => console.log("prevButton pressed")} >
                    {/*<FontAwesomeIcon icon="coffee" />*/}
                    <Ionicons style={styles.indicator} name="arrow-back-circle" />
                </TouchableOpacity>
                <TouchableOpacity  style={[styles.controlButton, {right : 5}]} onPress={() => console.log("prevButton pressed")} >
                    {/*<FontAwesomeIcon icon="coffee" />*/}
                    <Ionicons style={styles.indicator} name="arrow-forward-circle" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    listContainer: {
        // flex : 1,
        // flexDirection : "row",
        // flexWrap : "wrap",
        width : "100%",
        backgroundColor : "whitesmoke",
        marginVertical : 10,
        marginHorizontal : 10,
    },
    header:{
        fontWeight : "bold",
        fontSize : 20,
        padding : 10,

    },
    controlsZone : {
        position : "relative",
        top : -130,
    },
    controlButton : {
        // backgroundColor : "#000"
        position : "absolute",
    },

    indicator:{
        fontSize: 50,
        color : "rgb(22,156,254)",
        opacity : 0.9
    }
})
export default MangaListNormal