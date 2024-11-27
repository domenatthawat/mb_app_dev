import React, { useState } from "react";
import { View, StyleSheet, Button, SafeAreaView } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
      setTasks([...tasks, taskText.trim()]);
  };

  return (
    <MainLayout>
        <SafeAreaView style={styles.container}>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />
          <Button title="Go to About" 
          onPress={() => navigation.navigate("About")} 
          />
      </SafeAreaView>
    </MainLayout>

  );
}

export default HomeScreen;
