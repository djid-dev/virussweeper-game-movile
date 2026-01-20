import { View, StyleSheet } from "react-native";
import { bg_color } from "../constants/colors";
import CrtComponent from "../components/CrtComponent";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
    <CrtComponent/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bg_color,
    }  
})