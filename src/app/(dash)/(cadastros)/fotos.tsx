import ButtonFer from "@/components/ButtonFer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Fotos() {
  const [imagem, setImagem] = useState<string | null>(null);

  async function handleCamera() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert("Permita o acesso à câmera.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, aspect: [1, 1], quality: 1 });
    if (!result.canceled) setImagem(result.assets[0].uri);
  }

  async function handleGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ["images"], allowsEditing: true, aspect: [1, 1], quality: 1 });
    if (!result.canceled) setImagem(result.assets[0].uri);
  }

  return (
    <View style={styles.container}>
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}

        <ButtonFer titleButton="Tirar Foto" onFunctionButton={handleCamera} />
      

        <ButtonFer titleButton="Escolher da galeria" onFunctionButton={handleGaleria} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF2F6", alignItems: "center", justifyContent: "center", padding: 32 },
  imagem: { width: 220, height: 220, borderRadius: 25, marginBottom: 30 },
  botao: { width: "80%", backgroundColor: "#E8A0BF", borderRadius: 30, paddingVertical: 15, alignItems: "center", marginBottom: 14 },
  textoBotao: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  botaoContorno: { width: "80%", borderWidth: 1.5, borderColor: "#E8A0BF", borderRadius: 30, paddingVertical: 14, alignItems: "center" },
  textoContorno: { color: "#D46A92", fontSize: 16, fontWeight: "600" },
});