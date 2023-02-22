import {
    View,
    Text,
    Image,
    Pressable,
} from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { Themes } from "../assets/Themes";
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Track = ({ navigation, info }) => {
    const {
        songTitle,
        songArtists,
        albumName,
        imageUrl,
        duration,
        previewUrl,
        externalUrl
    } = info;

    return (
        <Pressable onPress={() => navigation.navigate('details', {url: externalUrl, title: 'Song Details'})} style={styles.track}>
            <Pressable onPress={() => navigation.navigate('preview', {url: previewUrl, title: 'Song Preview'})} style={{paddingRight: 10}}>
                <Ionicons name="md-play-circle" size={20} color="green" />
            </Pressable>
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
        </Pressable>
    );
};

export default Track;