import { View, FlatList } from "react-native";
import Header from './Header';
import Track from './Track';
import Separator from './Separator';

const TopTracks = ({ tracks, navigation }) => {
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <Header />
            <FlatList
                data={tracks}
                keyExtractor={(track) => track.externalUrl}
                renderItem={({ item }) => (
                    <Track key={item.externalUrl} navigation={navigation} info={item} />
                )}
                ItemSeparatorComponent={<Separator />}
            />
        </View>
    );
};

export default TopTracks;