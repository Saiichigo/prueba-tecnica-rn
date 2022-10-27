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

export default function App() {
  const [data, setData] = useState([]);

  const peticion = async () => {
    const resp = await axios
      .get<RickAndMorty>("https://rickandmortyapi.com/api/character")
      .then((response) => response.data.results);

      for (const item of resp) {
        delete item.episode;
        delete item.location;
        delete item.origin;
      }  
    setData(resp);
  };

  useEffect(() => {
    peticion();

  
  }, []);
  

  const RenderItem = ({items}) => {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Image
              style={{
                height: 400,
                width: 400
              }}
              source={{
                uri: items.image,
              }}
            />
            <Text style={{textAlign: "center", color: 'black', fontSize: 22, fontWeight: "bold" , backgroundColor: "orange"}}>{`${items.id} ${items.name}`}</Text>
            {/* <Text>{items.name}</Text> */}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };


  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <RenderItem items={item} />}
        keyExtractor={(item) => item.id}
      />
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
