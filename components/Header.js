import {
    View,
    Text,
    Image,
} from "react-native";
import { Images } from "../assets/Themes";

const Header = () => {
    return (
        <View
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2%",
            }}
        >
            <Image
                source={Images.spotify}
                style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <Text
                style={{
                    fontSize: 28,
                    color: "white",
                    fontFamily: "AvenirNext-Bold",
                }}
            >
                My Top Tracks
            </Text>
        </View>
    );
};

export default Header;