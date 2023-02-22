import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import { styles } from '../components';

const WebScreen = ({route}) => {

    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: route.params?.url }} containerStyle={{width: '100%'}}/>
        </SafeAreaView>
    )
};

export default WebScreen;