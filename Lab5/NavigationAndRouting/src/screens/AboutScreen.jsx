import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const appName = "My To-Do List App";
  const developerName = "Your Name";
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.text}>Developer: {developerName}</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default AboutScreen;
