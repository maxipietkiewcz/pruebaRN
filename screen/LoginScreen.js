import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      alert("Correo electrónico no válido");
      return;
    }

    if (username.length < 3 || username.length > 15) {
      alert(
        "Nombre de usuario demasiado corto o demasiado largo (3-15 caracteres)"
      );
      return;
    }

    if (password.length < 6 || password.length > 15) {
      alert("La contraseña debe tener al menos 6 caracteres y un maximo de 15");
      return;
    }

    navigation.navigate("Home", { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default LoginScreen;
