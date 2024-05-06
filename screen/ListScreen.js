import React from "react";
import { View, Text, Button } from "react-native";
import PokemonList from "../components/PokemonList";

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Lista de pokemons</Text>
      <PokemonList />
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default ListScreen;
