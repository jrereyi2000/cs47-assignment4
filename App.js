import {
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import {TopTracks} from './components';

export default function App() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

    return (
        <SafeAreaView style={styles.container}>
            {token ? (
                <TopTracks tracks={tracks} />
            ) : (
                <AuthButton onPress={getSpotifyAuth} />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});
