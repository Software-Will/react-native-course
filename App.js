//Aca contenemos las librerias de react
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; //libreria de react
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native"; //Cada que implemento una nueva etiqueta debo de importarlo
import pythonImage from "./assets/py.png"; //en assets se guardan las img locales
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

//Aca contenemos la vista
export default function App() {
  //SE DEFINE METODOS
  const [selectedImage, setSelectedImage] = useState(null); //Estado para cambiar la img de la vista

  //Funcion para pedir un permiso, asincrono
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync(); //Pide permiso a la galeria

    if (permissionResult.granted === false) {
      alert("Se requiere el acceso a su camara");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  //funcion para abrir la ventana de compartir
  const openShareDialog = async () => {
    //asincrono - esta condicion es para web
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        "La accion de compartir no se encuentra disponible en tu plataforma"
      );
      return;
    }

    //ventana de compartir
    await Sharing.shareAsync(selectedImage.localUri);
  };

  //RETORNA LA VISTA
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seleccione una imagen</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/200",
          }} //imagenes que no son de internet lo defines import nameImage y la direccion es source={imgName}
          style={styles.image}
        />
      </TouchableOpacity>

      {selectedImage ? ( //No aparece el boton para enviar hasta que seleccione otra imagen
        <TouchableOpacity style={styles.button} onPress={openShareDialog}>
          <Text style={styles.buttonText}>Compartir img</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
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
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100, //la mitad de la imagen pq no funcion %
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#2f4f4f",
    padding: 7,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

//https://react-hook-form.com/ - libreria de react para hacer formulario
