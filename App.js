import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const descreasCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.plus}>
          <Button title="Plus" color="blue" onPress={increaseCount} />
        </View>

        <Text style={styles.siffra}>{count}</Text>

        <View style={styles.minus}>
          <Button title="Minus" color="blue" onPress={descreasCount} />
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <Button title="Reset" color="red" onPress={resetCount} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    padding: 15,
    justifyContent: "center",
  },
  siffra: {
    justifyContent: "center",
    fontSize: 50,
    margin: 20,
    //borderWidth: 2,
    width: "auto",
    backgroundColor: "lightgreen",
  },
  minus: {
    padding: 15,
  },
  bottomWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  contentWrapper: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
