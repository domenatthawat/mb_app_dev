import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    }
  });

  export default ToDoList;