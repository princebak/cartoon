import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import IManga, {MangasMock} from "../../../model/manga";
import {Ionicons} from "@expo/vector-icons";
import MangaFullWidthCard from "./full-width-card";

const MangaFullWidthList : FunctionComponent<{header? : string, mangaPressEventHandler? : (manga : IManga) => void }> = ({header = "Top Hot", mangaPressEventHandler= (manga : IManga) => console.log(manga)}) =>{
    const [mangas, setMangas] = useState<IManga[]>(MangasMock)
    const [currentIndex, setCurrentIndex] = useState<number >(-1);
    const viewabilityConfig = {
        waitForInteraction: true,
        // At least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required.
        // viewAreaCoveragePercentThreshold: 100,
        itemVisiblePercentThreshold: 100
    }

    useEffect(() => { setCurrentIndex(0)}, [])
    const displayedCardChangedEVentHandler = useCallback( (info) => {
        const displayedItem = info.viewableItems.find( (item: { isViewable: any; }) => { return item.isViewable })
        setCurrentIndex(-1)
        setCurrentIndex(displayedItem ? displayedItem.index : currentIndex)
    }, [])

    const renderItem = (manga: IManga) =>{
        // return <Text>{manga.title}</Text>
        return <MangaFullWidthCard manga={manga} pressEventHandler={ mangaPressEventHandler} />
    }
    return(
        <View style={{paddingTop : 20}}>
            <FlatList data={mangas}
                renderItem={ manga => renderItem(manga.item)}
                keyExtractor={manga => manga.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={displayedCardChangedEVentHandler}
            />

            <View style={styles.slidesIndicators}>
                {
                    mangas.map((manga, index) => {
                        return <Ionicons key={index} style={[styles.indicator, currentIndex == index ? styles.active : {}]} name="disc" />
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
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
    slidesIndicators:{
        flexDirection : "row",
        height : 50,
        alignItems : "center",
        justifyContent : "center",
        alignContent : "center",
    },
    indicator:{
        fontSize: 20,
        color : "silver",
        marginHorizontal : 5,
    },
    active : {
        color : "rgb(22,156,254)",
    },
})


export default MangaFullWidthList