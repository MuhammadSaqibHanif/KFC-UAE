import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";

import OrderPage from "./src/components/OrderPage";
// import Cart from "./src/components/Cart";
// import MainPage from "./src/components/MainPage";
// import ExploreMenu from "./src/components/ExploreMenu";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 22 }}>
      <OrderPage />

      {/* <Cart /> */}

      {/* <MainPage /> */}

      {/* <ExploreMenu /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
