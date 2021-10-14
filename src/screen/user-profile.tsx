import React, { FunctionComponent} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import IScreenGlobalProps from "../util/props/screen";


const UserProfileScreen : FunctionComponent<IScreenGlobalProps> = ({route, navigation}) =>{

    return(
        <View style={styles.container}>
            <Text>User Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default UserProfileScreen