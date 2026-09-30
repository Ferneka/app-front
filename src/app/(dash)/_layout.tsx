import Ionicons from "@expo/vector-icons/Ionicons";
import { Redirect, Tabs } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

export default function DashLayout() {
  const auth = useContext(AuthContext);

  if (!auth.isReading) {
    return null;
  }

  if (!auth.isLoggedIn) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#D46A92",
        tabBarInactiveTintColor: "#C9A9B8",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          height: 66,
          paddingTop: 6,
          paddingBottom: 10,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          shadowColor: "#E8A0BF",
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -3 },
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clientes"
        options={{
          title: "Clientes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sairApp"
        options={{
          title: "Sair",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
  name="(cadastros)"
  options={{
    title: "Cadastros",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="people-outline" size={size} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="perfil"
  options={{
    title: "Perfil",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person-outline" size={size} color={color} />
    ),
  }}
/>
    </Tabs>
  );
}