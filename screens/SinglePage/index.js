import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import backButton from "../../assets/left-arrow.png";
import dollar from "../../assets/singlePageButtons/dollar.png";
import card from "../../assets/singlePageButtons/credit-card.png";
import exportPng from "../../assets/export.png";

export const SinglePage = ({ route, navigation }) => {
  const info = route?.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backButton} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.name}>{info.name}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${info.amount}</Text>
      </View>
      <View style={styles.processButtons}>
        <TouchableOpacity style={styles.button}>
          <Image source={card} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={dollar} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Debt</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionsDetailContainer}>
        <Text style={styles.transactionsDetailHeader}>Transaction Detail</Text>
        <View style={styles.seperateLine}></View>
        <View style={styles.detailLineContainer}>
          <View style={styles.detailLine}>
            <Text style={styles.detailLineName}>Payment Detail</Text>
            <View style={[styles.paymentInfoContainer, { marginLeft: "10%" }]}>
              <Text style={styles.detailLineValue}>{info.payment}</Text>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>i</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.seperateLineDetail}></View>
          <View style={styles.detailLine}>
            <Text style={styles.detailLineName}>Type</Text>
            <View style={[styles.paymentInfoContainer, { marginLeft: "50%" }]}>
              <Text style={styles.detailLineValue}>{info.type}</Text>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>i</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.seperateLineDetail}></View>
          <View style={styles.detailLine}>
            <Text style={styles.detailLineName}>Pay With</Text>
            <View
              style={[styles.paymentInfoContainer, { marginLeft: "17.5%" }]}
            >
              <Text style={styles.detailLineValue}>{info.payWith}</Text>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>i</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.seperateLineDetail}></View>
          <View style={styles.exportButton}>
            <TouchableOpacity style={styles.exportButtonContainer}>
              <Image style={styles.exportButtonPng} source={exportPng} />
              <Text>Export</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: Dimensions.get("screen").width / 2 - 110,
  },
  backButton: {
    width: 40,
    height: 40,
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  amount: {
    fontSize: 50,
  },
  processButtons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  button: {
    width: "40%",
    height: 50,
    backgroundColor: "#e1e3ed",
    marginHorizontal: "2%",
    borderRadius: (Dimensions.get("screen").width * 0.4) / 2,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: "5%",
  },
  buttonText: {
    marginRight: "30%",
  },
  detailLineContainer: {
    paddingHorizontal: 20,
  },
  transactionsDetailHeader: {
    fontSize: 18,
  },
  seperateLine: {
    backgroundColor: "gray",
    width: Dimensions.get("screen").width - 30,
    height: 1,
    marginVertical: 10,
  },
  seperateLineDetail: {
    backgroundColor: "gray",
    width: Dimensions.get("screen").width - 70,
    height: 1,
    marginVertical: 10,
  },
  detailLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailLineName: {
    marginRight: "10%",
    fontSize: 20,
  },
  detailLineValue: {
    fontSize: 20,
    color: "#c5c9c9",
    marginRight: 10,
  },
  infoButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#4688f2",
    borderWidth: 1,
    alignItems: "center",
  },
  infoButtonText: {
    color: "#4688f2",
    fontSize: 18,
  },
  paymentInfoContainer: {
    flexDirection: "row",
  },
  exportButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  exportButton: {
    alignItems: "flex-end",
    marginTop: "5%",
  },
  exportButtonPng: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
