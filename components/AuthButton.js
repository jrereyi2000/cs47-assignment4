import {
    Text,
    Pressable,
    Image,
} from "react-native";
import { Images } from "../assets/Themes";
import styles from './styles';

const AuthButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.authButton}>
            <Image
                source={Images.spotify}
                style={{ width: 20, height: 20, marginRight: 6 }}
            />
            <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
    );
};

export default AuthButton;