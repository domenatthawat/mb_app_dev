/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        // Home Screen
        <Stack.Screen name="Home" component={HomeScreen}/>
          {/* <SafeAreaView style={styles.container}>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
          </SafeAreaView> */}
        // About Screen
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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