//Imports 

import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { AuthContext } from "./utils/AuthContext";
import { AuthRegister } from "../api/authApi";
import ButtonFer from "@/components/ButtonFer";
import LogoApp from "@/components/LogoApp";

export default function Register(){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");

    const router = useRouter();

  async function handleRegister() {
  console.log(fullname, login, password);
  if (!fullname || !login || !password) {
    Alert.alert("Preencha todos os campos");
    return;
  }
  const response = await AuthRegister({ name: fullname, login, password });
  if (response?.message === "Success") {
    Alert.alert("Conta criada! Faça login.");
    router.replace("/login");
  } else {
    Alert.alert(response?.message ?? "Erro ao registrar");
  }
}

    return(
        <View style={styles.container}>
            {/* <Image source={require("../../assets/images/logo.png")} style={{ width: 120, height: 120, alignSelf: "center", marginBottom: 20 }} /> */}
            <LogoApp />
            <Text style={styles.titulo}>Registro</Text>

            <Text style={styles.inputText}>Nome completo:</Text>
            <TextInput 
                style = {styles.input}
                onChangeText={(value) => {setFullname(value)}}
                placeholder="Digite seu nome complete"
                maxLength = {100}
            />

            <Text style={styles.inputText}>Login:</Text>
            <TextInput
                style = {styles.input}
                onChangeText = {(value) => {setLogin(value)}}
                placeholder="Digite seu login"
                maxLength={100}
            />


            <Text style={styles.inputText}>Password:</Text>
            <TextInput
                style = {styles.input}
                onChangeText = {(value) => {setPassword(value)}}
                secureTextEntry
                maxLength={15}
                placeholder="Digite sua senha"
            />

            <Text style={styles.subtitulo}>
                Já possui registro?  {"\n"}
                <Link style={{ color: "#D46A92", fontWeight: "bold" }} href={"/login"} >
                    Volte para o login
                </Link>    
            </Text>

            <ButtonFer titleButton="Registrar" onFunctionButton={handleRegister} />

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
    marginBottom: 40,
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
    marginBottom: 20,
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