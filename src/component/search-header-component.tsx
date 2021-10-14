import React, {FunctionComponent} from "react";
import {Dimensions, StyleSheet, View, TextInput} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const SearchHeaderComponent : FunctionComponent = () =>{

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={(text) => console.log("text-input value change : ", text)} />
            <Ionicons style={styles.icon} name="search" />
        </View>
    )
}

const dimensions = Dimensions.get("window");
const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        flexWrap : "wrap",
        alignItems : "center",
        backgroundColor : "#0099ff",
    },
    textInput : {
        padding : 5,
        width : dimensions.width - 20,
        backgroundColor : "#fff",
    },
    icon:{
        color : "rgb(22,156,254)",
    }
})
export default SearchHeaderComponent;