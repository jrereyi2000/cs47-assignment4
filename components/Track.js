import {
    View,
    Text,
    Image,
} from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { Themes } from "../assets/Themes";
import styles from './styles';

const Track = ({ idx, info }) => {
    const {
        songTitle,
        songArtists,
        albumName,
        imageUrl,
        duration,
    } = info;

    return (
        <View style={styles.track}>
            <Text
                style={{ color: Themes.colors.gray, width: 20, fontSize: 12 }}
            >
                {idx + 1}
            </Text>
            <Image
                style={{ width: 50, height: 50, marginRight: "2%" }}
                source={{ uri: imageUrl }}
            />
            <View style={styles.flexContainer}>
                <Text
                    numberOfLines={1}
                    style={[styles.text, { marginBottom: 1 }]}
                >
                    {songTitle}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{ color: Themes.colors.gray, fontSize: 11 }}
                >
                    {songArtists.map((artist) => artist.name).join(", ")}
                </Text>
            </View>
            <View style={styles.flexContainer}>
                <Text numberOfLines={1} style={styles.text}>
                    {albumName}
                </Text>
            </View>
            <Text style={styles.text}>
                {millisToMinutesAndSeconds(duration)}
            </Text>
        </View>
    );
};

export default Track;