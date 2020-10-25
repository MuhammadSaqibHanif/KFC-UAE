import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function Cart() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {/*  */}
          <View
            style={{
              alignSelf: "center",
              width: "94%",
              backgroundColor: "#fff",
              height: 150,
              marginVertical: 10,
              justifyContent: "space-between"
            }}
            elevation={5}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/images/2.jpg")}
                  style={{ width: "100%", height: 75 }}
                  resizeMode="center"
                />
              </View>

              <View
                style={{
                  width: "70%",
                  height: 75
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    width: "90%",
                    fontSize: 17,
                    paddingTop: 10
                  }}
                  numberOfLines={2}
                >
                  Zinger Sandwich
                </Text>

                <View
                  style={{
                    width: "95%",
                    marginTop: 5,
                    padding: 5,
                    backgroundColor: "#EFF0F2",
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      color: "#0982FF",
                      marginRight: 5,
                      fontWeight: "bold",
                      fontSize: 14
                    }}
                    numberOfLines={1}
                  >
                    CUSTOMIZED
                  </Text>

                  <Text
                    style={{
                      color: "#999AA3",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                    numberOfLines={2}
                  >
                    American Cheese
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                width: "90%",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlignVertical: "center",
                  fontSize: 16
                }}
              >
                49 AED
              </Text>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    borderColor: "silver",
                    borderWidth: 1,
                    paddingVertical: 5,
                    paddingHorizontal: 10
                  }}
                >
                  <Image
                    source={require("../../assets/icons/discount-voucher.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlignVertical: "center",
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "black"
                  }}
                >
                  1
                </Text>

                <TouchableOpacity
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: "red"
                  }}
                >
                  <Image
                    source={require("../../assets/icons/discount-voucher.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*  */}
          <View
            style={{
              alignSelf: "center",
              width: "94%",
              backgroundColor: "#fff",
              height: 40,
              marginVertical: 5,
              alignItems: "center",
              paddingHorizontal: 10,
              flexDirection: "row"
            }}
            elevation={5}
          >
            <Image
              source={require("../../assets/icons/discount-voucher.png")}
              style={{ width: 20, height: 20 }}
            />

            <Text
              style={{
                color: "#999AA3",
                fontSize: 13,
                marginLeft: 15
              }}
              numberOfLines={2}
            >
              Add special cooking instructions
            </Text>
          </View>

          {/*  */}
          <View
            style={{
              alignSelf: "center",
              width: "94%",
              backgroundColor: "#fff",
              height: 80,
              marginVertical: 5,
              alignItems: "center",
              paddingHorizontal: 10,
              flexDirection: "row"
            }}
            elevation={5}
          >
            <View style={{ width: "85%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  width: "90%",
                  fontSize: 18,
                  marginBottom: 5
                }}
                numberOfLines={2}
              >
                Explore Menu
              </Text>

              <Text
                style={{
                  color: "#999AA3",
                  fontSize: 16
                }}
                numberOfLines={2}
              >
                Add more items in your cart
              </Text>
            </View>

            <View style={{ width: "15%" }}>
              <Image
                source={require("../../assets/icons/nextBlack.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              alignSelf: "center",
              width: "94%",
              backgroundColor: "#fff",
              height: 70,
              marginVertical: 5,
              alignItems: "center",
              paddingHorizontal: 10,
              flexDirection: "row"
            }}
            elevation={5}
          >
            <View style={{ width: "85%", flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/discount-voucher.png")}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />

              <Text
                style={{
                  fontWeight: "bold",
                  width: "90%",
                  fontSize: 16,
                  marginBottom: 5,
                  textAlignVertical: "center"
                }}
                numberOfLines={2}
              >
                Apply Coupon
              </Text>
            </View>

            <View style={{ width: "15%" }}>
              <Image
                source={require("../../assets/icons/nextBlack.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              alignSelf: "center",
              width: "94%",
              backgroundColor: "#fff",
              marginVertical: 5,
              alignItems: "center",
              paddingHorizontal: 20,
              marginBottom: 75
            }}
            elevation={5}
          >
            <View
              style={{
                paddingTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Text style={{ color: "#999AA3", fontSize: 16 }}>Sub Total</Text>

              <Text style={{ fontSize: 17 }}>17 AED</Text>
            </View>

            <View
              style={{
                paddingTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Text style={{ color: "#999AA3", fontSize: 16 }}>Delivery</Text>

              <Text style={{ fontSize: 17 }}>6.50 AED</Text>
            </View>

            <View
              style={{
                paddingTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Total
              </Text>

              <Text style={{ fontSize: 17 }}>23.50 AED</Text>
            </View>

            <Text
              style={{
                color: "orange",
                marginBottom: 10,
                fontSize: 11,
                textAlign: "left",
                width: "100%"
              }}
            >
              Inclusive of VAT
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          height: 65,
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 5
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "35%",
            justifyContent: "space-around"
          }}
        >
          <Image
            source={require("../../assets/images/2.jpg")}
            style={{ width: 50, height: 40 }}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>1</Text>
            <Text style={{ fontWeight: "bold" }}>ITEM</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "red",
            height: 50,
            width: "65%",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: "row"
          }}
        >
          <View style={{ width: "45%" }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>23.50 AED</Text>

            <Text style={{ color: "#fff", fontSize: 8 }}>
              *All prices are VAT inclusive
            </Text>
          </View>

          <View style={{ width: "55%", justifyContent: "center" }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Place Order &gt;
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF0F2",
    flex: 1,
    marginTop: 80
  }
});
