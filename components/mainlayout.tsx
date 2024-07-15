import { PropsWithChildren } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



type AppViewBalanceProps = PropsWithChildren<{
    children: any
}>

function ApplicationViewBalance({ children }: AppViewBalanceProps): React.JSX.Element {

    return (
        <View style={styles.app_view_css}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    app_view_css: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',


    }
});
export default ApplicationViewBalance;