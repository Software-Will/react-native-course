//Aca contenemos las librerias de react
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Aca contenemos la vista
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Aca contenemos los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
});
