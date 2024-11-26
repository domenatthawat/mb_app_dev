/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});

export default App;