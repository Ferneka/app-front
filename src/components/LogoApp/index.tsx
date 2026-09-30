import { Image, StyleSheet, View } from "react-native";

export default function LogoApp() {
  return (
    <View style={estilos.container}>
      <Image
        style={estilos.imagem}
        source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F5CADB",
    borderRadius: 30,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#E8A0BF",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  imagem: {
    width: 110,
    height: 110,
  },
});