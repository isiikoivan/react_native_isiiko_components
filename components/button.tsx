import Icon from "@react-native-vector-icons/fontawesome6";

import { PropsWithChildren } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";



type ButtonProps = PropsWithChildren<{
    title: string;
    icon_set: boolean
}>;
function ApplicationButton({ children, title, icon_set = false }: ButtonProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    function onPress(): void {
        console.log("touchable opacity settings");
        // throw new Error("Function not implemented.");
    }

    return (
        <TouchableOpacity style={styles.button_css} onPress={onPress}>
            <View style={styles.button_css_alignment}>
                {/* {icon_set ? <Icon name="bars" color="#31C283" size={20} />:null} */}

                <Icon style={styles.icon_css} name="user" color="#31C283" size={20} />
                <Text style={styles.title_css}>{title}</Text>
            </View>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    button_css_alignment: {
        display: 'flex',
        flexDirection: 'row'
    },
    title_css: {
        fontSize: 20,
        fontWeight: '600',
        // fontVariant:'small-caps',
        color: 'white',
        alignSelf: 'center',
        alignItems: "center"

    },

    button_css: {
        // textAlign:"center",
        display: 'flex',
        backgroundColor: '#905283',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },

    icon_css: {
        marginRight: 10,
        color: 'white'
    }
});

export default ApplicationButton;