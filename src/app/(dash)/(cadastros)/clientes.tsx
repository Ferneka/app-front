import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as api from "@/api/apiClientes";

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

export default function Clientes() {
  const [lista, setLista] = useState<Cliente[]>([]);

  useEffect(() => {
    async function carregar() {
      const response = await api.get();
      if (response?.message === "Success") setLista(response.data);
    }
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum cliente cadastrado.</Text>}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>{item.email}</Text>
            <Text style={styles.info}>{item.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF2F6", padding: 20 },
  cartao: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F5CADB",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  nome: { fontSize: 17, fontWeight: "600", color: "#6B4A5C", marginBottom: 4 },
  info: { fontSize: 14, color: "#A0718A" },
  vazio: { textAlign: "center", color: "#B08A9E", marginTop: 40 },
});