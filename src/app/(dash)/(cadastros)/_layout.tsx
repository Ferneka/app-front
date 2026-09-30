import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

export const unstable_settings = { initialRouteName: "clientes" };

export default function CadastrosLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#FDF2F6" },
        headerTintColor: "#D46A92",
        headerShadowVisible: false,
        drawerActiveTintColor: "#D46A92",
        drawerInactiveTintColor: "#A0718A",
        drawerActiveBackgroundColor: "#FBE3EC",
      }}
    >
      <Drawer.Screen
        name="clientes"
        options={{
          title: "Clientes",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="fotos"
        options={{
          title: "Fotos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}