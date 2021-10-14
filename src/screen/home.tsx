import React, {FunctionComponent} from "react"
import MangaListNormal from "../component/flatlist/manga-list-normal";
import {ScrollView} from "react-native";
import IScreenGlobalProps from "../util/props/screen";
import IManga from "../model/manga";
import {MANGA_DETAILS_SCREEN} from "../util/constant/screens";
import MangaFullWidthList from "../component/card/manga/full-width-list";

const HomeScreen : FunctionComponent<IScreenGlobalProps> = ({navigation}) =>{

    const mangaCardPressedEventHandler = (manga : IManga) =>{
        navigation.navigate(MANGA_DETAILS_SCREEN, {manga})
    }

    return (
        <ScrollView>
            <MangaFullWidthList header="Plus visites" mangaPressEventHandler={mangaCardPressedEventHandler} />
            <MangaListNormal header="Nouveautes" mangaPressEventHandler={mangaCardPressedEventHandler} />
            <MangaListNormal header="Tendances" mangaPressEventHandler={mangaCardPressedEventHandler}/>
            <MangaListNormal header="Actions" mangaPressEventHandler={mangaCardPressedEventHandler}/>
        </ScrollView>
    )
}

export default HomeScreen;