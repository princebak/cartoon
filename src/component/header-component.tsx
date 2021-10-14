import React, {FunctionComponent, useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity, TextInput, Dimensions} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {DrawerHeaderProps} from "@react-navigation/drawer";
import {GlobalContext, useGlobalContext} from "../util/context/global";
import {SEARCH_SCREEN} from "../util/constant/screens";

const HeaderComponent : FunctionComponent<{props : DrawerHeaderProps}> = ({props}) =>{

    const [isSearchVisible, setSearchVisible] = useState<boolean>(false)
    const {setText} = useGlobalContext()

    const onBergerButtonPressHandler = () =>{
        props.navigation.openDrawer();
    }
    return(
        <View style={styles.container}>
            {!isSearchVisible?
                <>
                    <TouchableOpacity style={styles.bergerButton} onPress={onBergerButtonPressHandler}>
                        <Ionicons style={styles.icon} name="apps" />
                    </TouchableOpacity>

                    <Image style={styles.logo} source={{uri : "https://oybcomics.net/wp-content/uploads/2021/07/logo-OYB-original_Plan-de-travail-1-bLUE2.png"}} />
                </>
                :
                <TextInput
                    style={styles.textInput}
                    autoFocus
                    onChangeText={text => setText(text)}
                />
            }
            <TouchableOpacity style={styles.searchButton} onPress={ () => { setSearchVisible(!isSearchVisible); if(!isSearchVisible) props.navigation.navigate(SEARCH_SCREEN); else props.navigation.goBack() ; }}>
                <Ionicons style={[styles.icon, isSearchVisible ?  {color : "silver", fontSize : 35, right : 12} : {color : "#fff"} ]} name={isSearchVisible ? "close-circle" : "ios-search-circle-sharp"} />
            </TouchableOpacity>
            {/*<Image source={require("../../assets/custom/bonjour.jpg")} style={styles.logo} />*/}
        </View>
    )
}

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap : "wrap",
        alignItems : "center",
        // alignContent : "center",
        // justifyContent : "center",
        backgroundColor : "#0099ff",
        paddingVertical : 25,
        paddingHorizontal : 15,
        height : 90,
        overflow : "hidden",
    },
    logo: {
        width : 80,
        height : 80,
        borderRadius : 40,
        position : "absolute",
        top : 14,
        left : dimensions.width / 2 - 45,
    },
    bergerButton:{
        position : "absolute",
        left : 10,
        bottom : 18,
    },
    searchButton : {
        position : "absolute",
        right : 10,
        bottom : 18,

    },
    icon:{
      color : "#fff",
      fontSize : 40,
    },
    textInput : {
        backgroundColor : "#fff",
        width : dimensions.width - 20,
        height : 50,
        paddingLeft : 10,
        position : "absolute",
        top : 30,
        left : 10
    }
})

export default HeaderComponent;