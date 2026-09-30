import { useEffect, useContext } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "../utils/AuthContext";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import ButtonFer from "@/components/ButtonFer";


export default function SairApp(){
    
    const router = useRouter();
    const auth = useContext(AuthContext);

    function handleLogout(){
        auth.logOut()
        router.replace("/login")
    }

    function handleCancel(){
        router.replace("/")
    }




    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Sair </Text>
            <Text style={styles.mensagem}>Deseja realmente sair?</Text>
            
        <ButtonFer titleButton="Sair" onFunctionButton={handleLogout} />

        <ButtonFer titleButton="Não" onFunctionButton={handleCancel} />
        

        </View>
    );

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
    marginBottom: 12,
  },
  mensagem: {
    fontSize: 17,
    color: "#6B4A5C",
    textAlign: "center",
    marginBottom: 36,
  },
  botaoSim: {
    width: "60%",
    backgroundColor: "#E8A0BF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#E8A0BF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    
  },
  textoBotaoSim: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  botaoNao: {
    width: "60%",
    borderWidth: 1.5,
    borderColor: "#E8A0BF",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  textoBotaoNao: {
    color: "#D46A92",
    fontSize: 16,
    fontWeight: "600",
  },
});