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
        <View style={styles.firstView}>
          <View style={styles.firstViewFirst}>
            <Text style={styles.firstViewFirstText}>EXPLORE MENU</Text>

            <Text style={styles.firstViewSecondText}>VIEW ALL</Text>
          </View>

          <View style={styles.firstViewSecond}>
            <View style={styles.firstViewSecondFirst} elevation={5}>
              <Text style={styles.firstViewCardText}>DEALS</Text>

              <Image
                source={require("../../assets/images/1.jpg")}
                style={styles.firstViewSecondFirstImage}
              />
            </View>

            <View style={styles.firstViewSecondSecond}>
              <View style={styles.firstViewSmall} elevation={5}>
                <Text style={styles.firstViewCardText}>FOR ONE</Text>

                <Image
                  source={require("../../assets/images/1.jpg")}
                  style={styles.firstViewSmallImage}
                />
              </View>

              <View style={styles.firstViewSmall} elevation={5}>
                <Text style={styles.firstViewCardText}>SIDES & DESERTS</Text>

                <Image
                  source={require("../../assets/images/1.jpg")}
                  style={styles.firstViewSmallImage}
                />
              </View>
            </View>

            <View style={styles.firstViewSecondThird}>
              <View style={styles.firstViewSmall} elevation={5}>
                <Text style={styles.firstViewCardText}>FOR SHARING</Text>

                <Image
                  source={require("../../assets/images/1.jpg")}
                  style={styles.firstViewSmallImage}
                />
              </View>

              <View style={styles.firstViewSmall} elevation={5}>
                <Text style={styles.firstViewCardText}>BEVERAGES</Text>

                <Image
                  source={require("../../assets/images/1.jpg")}
                  style={styles.firstViewSmallImage}
                />
              </View>
            </View>
          </View>
        </View>

        {/*  */}

        <View style={styles.firstView}>
          <View style={styles.firstViewFirst}>
            <Text style={styles.firstViewFirstText}>BESTSELLERS</Text>
          </View>

          <ScrollView horizontal>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              {loop.map((item, index) => (
                <View
                  style={{
                    width: 120,
                    height: 200,
                    marginRight: 12
                  }}
                  key={index}
                  elevation={5}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      position: "absolute",
                      bottom: 10,
                      zIndex: 1,
                      width: "100%",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        width: "75%",
                        paddingHorizontal: 10,
                        fontSize: 16
                      }}
                    >
                      Super Dinner Meal
                    </Text>

                    <Image
                      source={require("../../assets/icons/next.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>

                  <Image
                    source={require("../../assets/images/3.webp")}
                    style={{ width: 120, height: 200 }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/*  */}
        <View
          style={{
            alignSelf: "center",
            width: "94%",
            marginVertical: 10,
            backgroundColor: "#fff",
            height: 120,
            flexDirection: "row",
            padding: 10
          }}
          elevation={5}
        >
          <View
            style={{
              width: "45%",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#F59E3D",
                fontWeight: "bold"
              }}
            >
              PICK-UP FROM STORE
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: "#959AA1"
              }}
            >
              Beat the queue & place the order on App now!
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#959AA1",
                borderRadius: 3,
                width: "80%"
              }}
            >
              <Text
                style={{
                  color: "#DE5975",
                  fontWeight: "bold",
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  fontSize: 14
                }}
              >
                ORDER NOW
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "55%", backgroundColor: "#EFF0F2" }}></View>
        </View>

        {/*  */}
        <View style={styles.firstView}>
          <View style={styles.firstViewFirst}>
            <Text style={styles.firstViewFirstText}>TOP DEALS</Text>

            <Text style={styles.firstViewSecondText}>VIEW ALL</Text>
          </View>

          <ScrollView horizontal>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              {loop.map((item, index) => (
                <View key={index} style={styles.card} elevation={5}>
                  <View style={styles.cardFirstHalf}>
                    <Image
                      source={require("../../assets/images/2.jpg")}
                      style={{ width: "100%", height: 200 }}
                      resizeMode="center"
                    />
                  </View>

                  <View style={styles.cardSecondHalf}>
                    <View>
                      <Text style={styles.itemName} numberOfLines={2}>
                        Double Supreme Box
                      </Text>

                      <Text style={styles.itemDescription} numberOfLines={2}>
                        2 Supreme Sandwiches + 2 Pcs Chicken + 2 Regular Fries
                      </Text>
                    </View>

                    <View style={styles.cardSecondHalfSecond}>
                      <Text style={styles.price}>49 AED</Text>

                      <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addText}>VIEW</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/*  */}
        <View
          style={{
            alignSelf: "center",
            width: "94%",
            marginVertical: 10,
            backgroundColor: "red",
            height: 120,
            flexDirection: "row",
            padding: 10
          }}
          elevation={5}
        >
          <View
            style={{
              width: "55%",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              FAVORITES
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: "#fff"
              }}
            >
              Order from your favorite list of items
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#959AA1",
                borderRadius: 3,
                width: "70%",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  fontSize: 12
                }}
              >
                ORDER NOW
              </Text>

              <Image
                source={require("../../assets/icons/next.png")}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "45%"
            }}
          >
            <Image
              source={require("../../assets/images/2.jpg")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/*  */}
        <View style={styles.firstView}>
          <View style={styles.firstViewFirst}>
            <Text style={styles.firstViewFirstText}>CONTACTLESS DELIVERY</Text>
          </View>

          <ScrollView horizontal>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              {loop.map((item, index) => (
                <View
                  style={{
                    width: 120,
                    height: 170,
                    marginRight: 12,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  key={index}
                  elevation={5}
                >
                  <Image
                    source={require("../../assets/images/1.jpg")}
                    style={{ width: 50, height: "50%" }}
                  />

                  <Text
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      height: "45%"
                    }}
                  >
                    Super Dinner Meal Super Dinner Meal Super Dinner Meal Super
                    Dinner Meal Super Dinner Meal Super Dinner Meal Super Dinner
                    Meal
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/*  */}
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "#fff",
            paddingVertical: 10
          }}
        >
          <View
            style={{
              height: "40%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../assets/images/1.jpg")}
              style={{
                width: 50,
                height: 50,
                marginBottom: 5
              }}
            />

            <Text>Kentucky fried chicken</Text>
          </View>
          <View
            style={{
              height: "60%",
              width: "90%",
              backgroundColor: "black",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                paddingVertical: 15,
                paddingHorizontal: 40,
                alignSelf: "center"
              }}
            >
              <Image
                source={require("../../assets/icons/play.png")}
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF0F2",
    flex: 1,
    marginTop: 80
  },
  firstView: {
    alignSelf: "center",
    width: "94%",
    marginVertical: 10
  },
  firstViewFirst: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  firstViewFirstText: {
    color: "#4C5763",
    fontSize: 16,
    fontWeight: "bold"
  },
  firstViewSecondText: {
    color: "#8D9BAD",
    fontSize: 12,
    fontWeight: "bold"
  },
  firstViewSecond: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
    marginTop: 8
  },
  firstViewSecondFirst: {
    width: "32%",
    height: 200,
    backgroundColor: "#fff"
  },
  firstViewSecondFirstText: {
    fontWeight: "bold",
    color: "#1D222E",
    textAlign: "right",
    fontSize: 14
  },
  firstViewSecondFirstImage: {
    width: "100%",
    height: 200
  },
  firstViewSecondSecond: {
    width: "32%",
    height: 200,
    justifyContent: "space-between"
  },
  firstViewSmall: {
    backgroundColor: "#fff",
    height: "47%",
    justifyContent: "flex-end"
  },
  firstViewSmallImage: {
    width: "100%",
    height: 70
  },
  firstViewSecondSecondBottom: {
    backgroundColor: "#fff",
    height: "47%"
  },
  firstViewSecondThird: {
    width: "32%",
    justifyContent: "space-between"
  },
  firstViewCardText: {
    fontWeight: "bold",
    color: "#1D222E",
    textAlign: "right",
    fontSize: 14,
    position: "absolute",
    zIndex: 1,
    top: 4,
    right: 8
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    height: 170,
    width: 280,
    alignSelf: "center",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 12
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
  itemName: {
    fontWeight: "bold",
    width: "95%",
    fontSize: 16
  },
  itemDescription: {
    color: "#999AA3",
    fontWeight: "bold",
    width: "95%",
    fontSize: 14,
    marginTop: 5
  },
  cardSecondHalfSecond: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {
    color: "#565768",
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  addButton: {
    borderColor: "#E5002B",
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 3
  },
  addText: {
    color: "#E5002B",
    fontWeight: "bold",
    fontSize: 12
  }
});
