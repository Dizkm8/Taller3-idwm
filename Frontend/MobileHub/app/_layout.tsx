import {SafeAreaProvider} from "react-native-safe-area-context";
import {PaperProvider, MD3LightTheme as Theme, Appbar} from "react-native-paper";
import {Slot} from "expo-router";

const theme = {
    ...Theme,
    backgroundColor: "#FFF",
    colors: {
        ...Theme.colors,
        primary: "#fcaf43",
        secondary: "#fcaf43"
    }
}

const HomeLayout = () => {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </PaperProvider>
    );
}

export default HomeLayout;