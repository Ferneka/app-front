import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,  Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { AuthContext } from "./utils/AuthContext";
import ButtonFer from "@/components/ButtonFer";
import LogoApp from "@/components/LogoApp";




export default function Login(){
    
    //Pega os valores do login
    const [login, setLogin] = useState<string>("");
    //Pega os valores da senha 
    const [password, setPassword] = useState<string>(""); 

    //pega o objeto de navegação 
    const router = useRouter();
    //pega o contexto
    const auth = useContext(AuthContext);

    async function handleLogin(){
        console.log(login, password)
        const resultLogin = await auth.logIn(login, password)
        if(resultLogin){
            router.navigate("/")
        }
        else{
            Alert.alert("Login ou senha inválidos");
        }
    }

    return(
        <View style = {styles.container}>
            {/* <Image source={require("../../assets/images/logo.png")} style={{ width: 120, height: 120, alignSelf: "center", marginBottom: 20 }} /> */}
            <LogoApp />
            <Text style ={styles.titulo}>Login</Text>

            <Text style = {styles.inputText}>Login:</Text>
            <TextInput 
                style = {styles.input}
                onChangeText = {(value) =>
                {setLogin(value)}
                }
                maxLength={100}
                placeholder="Digite seu login"
            />

            <Text style = {styles.inputText}>Senha:</Text>
            <TextInput 
                style = {styles.input}
                secureTextEntry
                maxLength={15}
                onChangeText = {(value) =>
                {setPassword(value)}
                }
                placeholder="Digite sua senha"
            />
            
            <Text style={styles.subtitulo}>
                Caso não tenha uma conta {"\n"}
                <Link style={{ color: "#D46A92", fontWeight: "bold" }} href= {"/register"}>
                Crie aqui
                </Link>
            </Text>

            <ButtonFer titleButton="Acessar" onFunctionButton={handleLogin} />
            
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF2F6",
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "300",
    color: "#D46A92",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 44,
  },
  inputText: {
    fontSize: 14,
    color: "#A0718A",
    marginBottom: 6,
    marginLeft: 12,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F5CADB",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 13,
    fontSize: 15,
    color: "#6B4A5C",
    marginBottom: 22,
    shadowColor: "#E8A0BF",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  subtitulo: {
    textAlign: "center",
    color: "#B08A9E",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 28,
  },
  botao: {
    backgroundColor: "#E8A0BF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#E8A0BF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
