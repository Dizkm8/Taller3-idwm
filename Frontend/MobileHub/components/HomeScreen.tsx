import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native-paper";
import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  button: {
    width: "100%",
  },
  image: {
    width: 350,
    height: 350,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text variant="displayMedium">¡Bienvenid@!</Text>
      <Image
        source={require("../assets/images/MobileHub.png")}
        style={style.image}
      />
      <Link href="/auth/login" asChild>
        <Button
          mode="contained"
          style={style.button}
        >
          Iniciar Sesión
        </Button>
      </Link>
      <Button
        mode="outlined"
        style={style.button}
      >
        Regístrarme
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
