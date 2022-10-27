import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { RickAndMorty } from "./interfaces/RickAndMorty-interfaces";

// 1. La ruta de la api es esta : https://rickandmortyapi.com/api/character
// 2. Usar postman para probar la api
// 3. crear la interfaces para la petición, si demoras más de dos 2 minutos en crearla usa la que viene en la importaciones,
//   si lo haces en menos de 2 minutos puntos extras o no?
// 4. Antes de asignar el SetData debes eliminar de la manera que consideres más
//    apropiada las propiedades del objeto que está dentro de results: episode, location, origin.
// 5. Debes usar un FlatList para mostrar las imágenes con el id y el texto concatenado. (recuerda crear el render antes de usar el flatlist).
// 6. El estilo del texto debe ser en línea con estos valores:
//    {textAlign: "center", color: 'black', fontSize: 22, fontWeight: "bold" , backgroundColor: "orange"}.
// 7. Por último intenta usar todos los componentes que están dentro de la importación de react-native
//    aunque si tienes el mismo resultado de otra manera también es válido.
// 8. puntos extras si no tienes errores del lado de typescript
//                    No olvides de preguntar lo que necesites, si tienes duda que para eso estamos.
// Suerte.

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // llamar a la peticion
  }, []);

  const RenderItem = ({ items }) => {
    return <></>;
  };

  return (
    // No toques este View
    <View style={styles.container}>

      
      {/* INICIO:  borrar*/}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", backgroundColor: "orange" }}>
          Suerte!!!
        </Text>
      </View>

      {/* FIN:  borrar */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
