//Aca contenemos las librerias de react
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native"; //Cada que implemento una nueva etiqueta debo de importarlo
import pythonImage from "./assets/py.png"; //en assets se guardan las img locales

//Aca contenemos la vista
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo!!!</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }} //imagenes que no son de internet lo defines import nameImage y la direccion es source={imgName}
        style={styles.image}
      />
      <Button
        onPress=""
        title="Ingrese"
        color="#222"
        accessibilityLabel="Esto es un boton"
      />
    </View>
  );
}

//Aca contenemos los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#fff",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100, //la mitad de la imagen pq no funcion %
  },
});
