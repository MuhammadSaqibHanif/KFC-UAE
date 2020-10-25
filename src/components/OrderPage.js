import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Radio, CheckBox } from "native-base";

export default function Cart() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*  */}
        <Text
          style={{
            color: "#4C4B59",
            width: "94%",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 17,
            marginTop: 10
          }}
        >
          Select
        </Text>
        <View
          style={{
            alignSelf: "center",
            width: "94%",
            backgroundColor: "#fff",
            paddingVertical: 10,
            marginVertical: 10,
            justifyContent: "space-between"
          }}
          elevation={5}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../assets/images/2.jpg")}
                style={{ width: "100%", height: 50 }}
                resizeMode="center"
              />
            </View>

            <View
              style={{
                width: "60%"
              }}
            >
              <Text
                style={{
                  width: "95%",
                  fontSize: 17,
                  fontWeight: "bold"
                }}
                numberOfLines={2}
              >
                Zinger Sandwich
              </Text>
            </View>

            <View
              style={{
                width: "15%",
                alignItems: "center"
              }}
            >
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../assets/images/2.jpg")}
                style={{ width: "100%", height: 50 }}
                resizeMode="center"
              />
            </View>

            <View
              style={{
                width: "60%"
              }}
            >
              <Text
                style={{
                  width: "95%",
                  fontSize: 17,
                  fontWeight: "bold"
                }}
                numberOfLines={2}
              >
                Zinger Sandwich
              </Text>
            </View>

            <View
              style={{
                width: "15%",
                alignItems: "center"
              }}
            >
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../assets/images/2.jpg")}
                style={{ width: "100%", height: 50 }}
                resizeMode="center"
              />
            </View>

            <View
              style={{
                width: "60%"
              }}
            >
              <Text
                style={{
                  width: "95%",
                  fontSize: 17,
                  fontWeight: "bold"
                }}
                numberOfLines={2}
              >
                Zinger Sandwich
              </Text>
            </View>

            <View
              style={{
                width: "15%",
                alignItems: "center"
              }}
            >
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../assets/images/2.jpg")}
                style={{ width: "100%", height: 50 }}
                resizeMode="center"
              />
            </View>

            <View
              style={{
                width: "60%"
              }}
            >
              <Text
                style={{
                  width: "95%",
                  fontSize: 17,
                  fontWeight: "bold"
                }}
                numberOfLines={2}
              >
                Zinger Sandwich
              </Text>
            </View>

            <View
              style={{
                width: "15%",
                alignItems: "center"
              }}
            >
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </View>
          </View>
        </View>

        <Text
          style={{
            color: "#4C4B59",
            width: "94%",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 17,
            marginTop: 10
          }}
        >
          Select
        </Text>
        <View
          style={{
            alignSelf: "center",
            width: "94%",
            backgroundColor: "#fff",
            paddingVertical: 10,
            marginVertical: 10,
            justifyContent: "space-between"
          }}
          elevation={5}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              marginRight: 5
            }}
          >
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../assets/images/2.jpg")}
                style={{ width: "100%", height: 50 }}
                resizeMode="center"
              />
            </View>

            <View
              style={{
                width: "60%"
              }}
            >
              <Text
                style={{
                  width: "95%",
                  fontSize: 17,
                  fontWeight: "bold"
                }}
                numberOfLines={2}
              >
                Zinger Sandwich
              </Text>
            </View>

            <View
              style={{
                width: "15%",
                alignItems: "center"
              }}
            >
              <CheckBox checked={true} color="red" />
            </View>
          </View>

          {/*  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
              paddingHorizontal: 20
            }}
          >
            <Text
              style={{
                width: "95%",
                fontSize: 17,
                fontWeight: "bold"
              }}
              numberOfLines={2}
            >
              Regular
            </Text>

            <Radio
              color={"#f0ad4e"}
              selectedColor={"#5cb85c"}
              selected={false}
            />
          </View>

          {/*  */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              paddingHorizontal: 20
            }}
          >
            <Text
              style={{
                width: "95%",
                fontSize: 17,
                fontWeight: "bold"
              }}
              numberOfLines={2}
            >
              Extra
            </Text>

            <Radio
              color={"#f0ad4e"}
              selectedColor={"#5cb85c"}
              selected={false}
            />
          </View>
        </View>

        <View style={{ marginBottom: 75 }} />
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
            width: "25%",
            justifyContent: "space-around"
          }}
        >
          <Image
            source={require("../../assets/images/2.jpg")}
            style={{ width: 50, height: 40 }}
          />
        </View>

        <View
          style={{
            backgroundColor: "red",
            height: 50,
            width: "75%",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: "row"
          }}
        >
          <View style={{ width: "45%" }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>15 AED</Text>

            <Text style={{ color: "#fff", fontSize: 8 }}>
              *All prices are VAT inclusive
            </Text>
          </View>

          <View
            style={{ width: "55%", justifyContent: "center", marginLeft: 10 }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Add to Cart &gt;
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
