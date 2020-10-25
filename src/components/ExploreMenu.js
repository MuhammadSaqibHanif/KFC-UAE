import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function ExploreMenu() {
  const loop = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <ScrollView>
        {loop.map((item, index) => (
          <View key={index} style={styles.card} elevation={5}>
            <View style={styles.cardFirstHalf}>
              <Image
                source={require("../../assets/images/2.jpg")}
                style={styles.cardImage}
                resizeMode="center"
              />
            </View>

            <View style={styles.cardSecondHalf}>
              <View style={styles.cardSecondHalfFirst}>
                <Text style={styles.itemName} numberOfLines={2}>
                  Double Supreme Box
                </Text>

                <Image
                  source={require("../../assets/icons/unlike.png")}
                  style={styles.cardLikeImage}
                />
              </View>

              <View style={styles.cardSecondHalfSecond}>
                <Text style={styles.itemDescription} numberOfLines={2}>
                  2 Supreme Sandwiches + 2 Pcs Chicken + 2 Regular Fries
                </Text>

                <Text style={styles.editText}>EDIT</Text>
              </View>

              <View style={styles.cardSecondHalfThird}>
                <Text style={styles.customizeText} numberOfLines={1}>
                  CUSTOMIZE
                </Text>

                <Image
                  source={require("../../assets/icons/right-arrow.png")}
                  style={styles.rightarrow}
                />
              </View>

              <View style={styles.cardSecondHalfFourth}>
                <Text style={styles.price}>49 AED</Text>

                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addText}>+ ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF0F2",
    flex: 1,
    marginTop: 120
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    height: 170,
    width: "98%",
    alignSelf: "center",
    borderRadius: 3,
    flexDirection: "row"
  },
  cardFirstHalf: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center"
  },
  cardSecondHalf: {
    width: "55%",
    marginVertical: 10,
    justifyContent: "space-between"
  },
  cardImage: {},
  cardLikeImage: {
    height: 20,
    width: 20,
    marginLeft: "auto",
    marginRight: "auto",
    alignSelf: "center"
  },
  cardSecondHalfFirst: {
    flexDirection: "row"
  },
  itemName: {
    fontWeight: "bold",
    width: "80%",
    fontSize: 15
  },
  cardSecondHalfSecond: {
    flexDirection: "row",
    marginTop: 3
  },
  itemDescription: {
    color: "#999AA3",
    fontWeight: "bold",
    width: "75%",
    fontSize: 14
  },
  editText: {
    color: "#0982FF",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    fontSize: 16
  },
  cardSecondHalfThird: {
    flexDirection: "row"
  },
  customizeText: {
    color: "#0982FF",
    marginRight: 5,
    fontWeight: "bold",
    fontSize: 14
  },
  rightarrow: {
    height: 14,
    width: 14,
    alignSelf: "center"
  },
  cardSecondHalfFourth: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {
    color: "#565768",
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  addButton: {
    backgroundColor: "#E5002B",
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginRight: 10,
    borderRadius: 3
  },
  addText: {
    color: "#fff"
  }
});
