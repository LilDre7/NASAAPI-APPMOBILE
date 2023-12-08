import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View ,  } from "react-native";
import { PostImage as PostImageType } from "../../types";

const PostImage: FC<PostImageType> = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 13,
    padding: 17,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15
  },
  date: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  buttonText: {
    fontSize: 22,
    color: "#4d70ff",
    fontWeight: "bold",
  }
})

export default PostImage;
