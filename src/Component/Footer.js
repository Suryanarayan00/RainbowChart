import React from "react";
import { StyleSheet, View,Text} from "react-native";

const styles = StyleSheet.create({
  actions: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Footer = () => {
  return (
    <View>
      <View style={styles.actions}>
        {/* <Button icon={imagePath.custom}label="Swap" />
        <Button icon={imagePath.custom} label="Send" /> */}
        <Text style={{textAlign: 'center', flex: 1, fontWeight: 'bold', }}>Welcome to my chart</Text>
      </View>
      <View style={{ height: 48 }} />
    </View>
  );
};

export default Footer;
