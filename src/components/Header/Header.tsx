import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container__header}>
      <View>
        <Text style={styles.text__explore}>EXPLORE</Text>
      </View>
      <View>
        <Image
          style={styles.image__header}
          source={require("../../../assets/nasa-logo-1.png")}>
        </Image>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container__header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    transform: [{ translateY: -20 }],
  },
  text__explore: {
    fontSize: 43,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  image__header: {
    height: 105,
    width: 105,
    tintColor: "#fff",
  },
});

export default Header