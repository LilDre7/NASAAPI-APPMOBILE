import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({ url, title, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} >View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  imageContainer: {},
  image: {
    height: 250,
    width: "100%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    marginVertical: 12,
    fontSize: 25,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    marginVertical: 12,
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: "flex-end",
    borderRadius: 32,
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: "#4d70ff",
    fontWeight: "bold",
  },
});

export default TodaysImage;
