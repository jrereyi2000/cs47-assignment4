import {
    SafeAreaView,
} from "react-native";
import { useSpotifyAuth } from "../utils";
import {AuthButton, TopTracks, styles} from '../components';

const HomeScreen = ({navigation}) => {
    const { tracks, token, getSpotifyAuth } = useSpotifyAuth();

    return (
        <SafeAreaView style={styles.container}>
            { token ? (
                <TopTracks tracks={tracks} navigation={navigation} />
            ) : (
                <AuthButton onPress={getSpotifyAuth} />
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;