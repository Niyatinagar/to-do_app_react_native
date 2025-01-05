import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Tasks from "./app/screens/Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [item, setItem] = useState([]);
  const handleTask = () => {
    Keyboard.dismiss();
    setItem([...item, task]);
    setTask(null);
  };
  const completes = (index) => {
    let copy = [...item];
    copy.splice(index, 1);
    setItem(copy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.header}>Today's Tasks</Text>
        <View style={styles.items}>
          {item.map((it, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completes(index)}>
                <Tasks text={it} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.write}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.add}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  task: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  write: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  add: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addtext: {},
});
