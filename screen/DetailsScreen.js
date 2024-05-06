import React from "react";
import { View, Text, Button } from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detalles de la pantalla</Text>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default DetailsScreen;
