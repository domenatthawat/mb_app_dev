import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text>{task}</Text>
        </View>
      ))}
    </ScrollView>
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