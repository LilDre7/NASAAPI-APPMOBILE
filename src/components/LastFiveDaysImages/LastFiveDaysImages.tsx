import React, { FC } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PostLastDay } from "../../types";
import PostImage from "../PostImage";

const LastFiveDaysImages: FC<{ postImages?: PostLastDay[] }> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <View style={styles.content}>
        <ScrollView style={{ height: 200 }}>
          {postImages?.map((postImage) => (
            <PostImage key={`post-image-${postImage.title}`} {...postImage} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;
