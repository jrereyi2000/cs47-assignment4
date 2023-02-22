import {StyleSheet} from 'react-native';
import { Themes } from '../assets/Themes';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    separator: {
        width: "100%",
        height: 10,
    },
    authButton: {
        backgroundColor: "#1DB954",
        borderRadius: "100%",
        display: "flex",
        flexDirection: "row",
        padding: 6,
        alignItems: "center",
    },
    text: {
        fontSize: 12,
        color: "white",
        fontFamily: "AvenirNext-Regular",
    },
    track: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2%",
        paddingRight: "4%",
    },
    flexContainer: {
        flex: 1,
        marginRight: "2%",
    },
});

export default styles;