import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../utils/AuthContext";

export default function Index(){

    const router = useRouter();
    const auth = useContext(AuthContext);

   

    return(
        <View style = {styles.container}>
            <Text style={styles.titulo}> Dashboard </Text>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.valor}>Fernanda da Costa Aguiar</Text>
            <Text style={styles.label}>RA:</Text>
            <Text style={styles.valor}>0221432511004</Text>
            <Text style={styles.label}>Curso:</Text>
            <Text style={styles.valor}>AMS</Text>
            <Text style={styles.label}>Data avaliação::</Text>
            <Text style={styles.valor}>30-09-2026</Text>
            <Text style={styles.label}>Disciplina:</Text>
            <Text style={styles.valor}>Programação Multiplataforma</Text>

            
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF2F6",
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
   fontSize: 40,
    fontWeight: "300",
    color: "#D46A92",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 44,
  },
  label: {
    fontSize: 13,
    color: "#B08A9E",
    marginBottom: 2,
  },
  valor: {
    fontSize: 17,
    color: "#6B4A5C",
    fontWeight: "500",
    marginBottom: 16,
  },
 
});