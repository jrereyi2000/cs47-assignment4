import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Themes } from "./assets/Themes";
import { HomeScreen, WebScreen } from "./screens";

const Stack = createStackNavigator();

const getOptions = (title) => ({
    title,
    headerBackTitle: "Back",
    headerStyle: {
        backgroundColor: Themes.colors.background,
    },
    headerTitleStyle: {
        color: "white",
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="main"
                    options={{ headerShown: false }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="details"
                    component={WebScreen}
                    options={getOptions('Song Details')}
                />
                <Stack.Screen
                    name="preview"
                    component={WebScreen}
                    options={getOptions('Song Preview')}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
