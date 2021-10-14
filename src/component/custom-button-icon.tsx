import React, {FunctionComponent} from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface props{
    iconName : string,
    onPressHandler? : () => void
}
const CustomIconButton : FunctionComponent<props>= ({iconName, onPressHandler}) => {

    return (
        <Ionicons style={styles.indicator} name={iconName} />
    )
}

const styles = StyleSheet.create({
    indicator : {

    }
    }
)

export default CustomIconButton