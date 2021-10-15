import React, {FunctionComponent} from "react";
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Hr} from "./helper";


const DrawerContentStylerCard : FunctionComponent<{props : DrawerContentComponentProps}> = ({props}) =>{

    return(
            <ImageBackground style={styles.container} source={{uri : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-4-193x278.jpg"}} >

                <View style={styles.head}>

                </View>
                <Hr height={5} />
                <Text style={styles.text}>Let's see</Text>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 40,
    },
    head : {
        height : 200,
    },
    text : {

    }
})
export default DrawerContentStylerCard;