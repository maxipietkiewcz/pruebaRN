import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contador: {count}</Text>
      <Button
        title="Incrementar contador"
        onPress={() => setCount(count + 1)}
      />
      <Button
        title="Ir a detalles"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
