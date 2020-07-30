import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

import girl1 from "../../assets/profilePhotos/girl.jpg";
import boy1 from "../../assets/profilePhotos/boy1.jpg";
import boy2 from "../../assets/profilePhotos/boy2.jpg";

const payments = [
  {
    id: "1",
    fullName: "Ada Lovelace",
    paymentAmount: "1300",
    type: "debt",
    payWith: "Credit Account",
    paymentDetail: "24 May 20",
    picture: girl1,
  },
  {
    id: "2",
    fullName: "Mark Hopper",
    paymentAmount: "720",
    type: "classic",
    payWith: "Credit Account",
    paymentDetail: "24 June 20",
    picture: boy1,
  },
  {
    id: "3",
    fullName: "Margeret Hamilton",
    paymentAmount: "420",
    type: "debt",
    payWith: "Credit Account",
    paymentDetail: "01 July 20",
    picture: boy2,
  },
];

export const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Transactions</Text>
      </View>
      <TextInput style={styles.searchInput} placeholder="search" />
      <View style={styles.performanceContainer}>
        <Text style={styles.performanceText}>Performance</Text>
        <View style={styles.seperateLine}></View>
        <View style={styles.chartsContainer}>
          <Text style={styles.chartText}>Current Week</Text>
          <ProgressCircle
            style={{ height: 100 }}
            progress={0.7}
            progressColor={"#36c25b"}
            backgroundColor={"#ECECEC"}
          />
          <Text style={styles.chartText}>Last Week</Text>
          <ProgressCircle
            style={{ height: 100 }}
            progress={0.4}
            progressColor={"#f5251d"}
          />
          <Text style={styles.chartText}>Last Month</Text>
          <ProgressCircle
            style={{ height: 100 }}
            progress={0.9}
            progressColor={"#2a2abf"}
          />
        </View>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsText}>Transactions</Text>
        <View style={styles.seperateLine}></View>
        <View style={styles.list}>
          <FlatList
            data={payments}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.customerInfo}
                  onPress={() =>
                    navigation.navigate("SinglePage", {
                      name: item.fullName,
                      amount: item.paymentAmount,
                      payment: item.paymentDetail,
                      type: item.type,
                      payWith: item.payWith,
                    })
                  }
                >
                  <Image source={item.picture} style={styles.profilePhoto} />
                  <Text style={styles.fullName}>{item.fullName}</Text>
                  <Text style={styles.amount}>${item.paymentAmount}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 30,
  },
  seperateLine: {
    backgroundColor: "gray",
    width: Dimensions.get("screen").width - 30,
    height: 1,
    marginVertical: 10,
  },
  searchInput: {
    width: Dimensions.get("screen").width - 30,
    borderWidth: 6,
    borderColor: "#d6d3cb",
    paddingLeft: Dimensions.get("screen").width / 2 - 30,
  },
  performanceText: {
    fontSize: 20,
  },
  transactionsText: {
    fontSize: 20,
  },
  customerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },
  fullName: {
    marginRight: 30,
  },
  amount: {
    marginRight: 70,
  },
  chartText: {
    textAlign: "center",
    marginVertical: 10,
  },
});
