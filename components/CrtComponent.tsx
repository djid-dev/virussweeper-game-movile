import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CrtComponent = () => {
  return (
    <View id="crt-container" pointerEvents="none" style={styles.crtContainer}>
      <LinearGradient
        colors={["rgba(18, 16, 16, 0) 50%", "rgba(0, 0, 0, 0.25) 50%"]}
        style={styles.crtGradient}
      >
        <Text>hola</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  crtContainer: {
    position: "sticky",
    minHeight: "100%",
    minWidth: "100%",
  },
  crtGradient: {
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000,
  },
});

export default CrtComponent;
