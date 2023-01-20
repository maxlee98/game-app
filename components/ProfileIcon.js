import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState } from "react";

export default function ProfileIcon() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuPress = () => {
    setOpenMenu(!openMenu);
  };

  const data = [
    {
      title: "Profile",
      onPress: () => {
        /* handle press */
      },
    },
    {
      title: "History",
      onPress: () => {
        /* handle press */
      },
    },
    {
      title: "Logout",
      onPress: () => {
        /* handle press */
      },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => handleMenuPress()}
        >
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          {openMenu && (
            <View style={styles.menuWrapper}>
              {data.map((item, index) => (
                <TouchableOpacity key={index} onPress={item.onPress}>
                  <Text style={styles.menuItem}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topRowContainer: {
    position: "absolute",
    top: 50,
    right: 25,
    flexDirection: "row",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#F5A623",
  },
  profileIcon: {
    height: 25,
    width: 25,
  },
  menuContainer: {
    position: "absolute",
    top: 50,
    right: 0,
  },
  menuWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1,
  },
  menuItem: {
    padding: 10,
    fontSize: 12,
    color: "#333333",
  },
});
