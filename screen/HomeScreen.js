import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(0);

  const { username } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bienvenido {username}</Text>
      <Text>Contador: {count}</Text>
      <Button
        title="Incrementar contador"
        onPress={() => setCount(count + 1)}
      />
      <Button title="Ver lista" onPress={() => navigation.navigate("List")} />
    </View>
  );
}

export default HomeScreen;
