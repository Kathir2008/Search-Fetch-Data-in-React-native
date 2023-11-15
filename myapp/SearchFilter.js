import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import notifee, { AndroidStyle } from "@notifee/react-native";
const SearchFilter = ({ input, setInput, data }) => {
  const [stateNames, setStateNames] = useState([]);
  const [selectData, setSelectData] = useState("");

  useEffect(() => {
    const fetchIndianStates = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const fetchedData = await response.json();

        const names = fetchedData.map((state) => state.name.common);
        names.sort();
        setStateNames(names);
      } catch (error) {
        console.error("Error fetching state names:", error);
      }
    };

    fetchIndianStates();
  }, []);

  const handleStateSelection = async (selectedState) => {
    setInput(selectedState);
    setSelectData(selectedState);
    // await notifee.requestPermission();

    // // Create a channel (required for Android)
    // const channelId = await notifee.createChannel({
    //   id: "default",
    //   name: "Default Channel",
    // });

    // // Display a notification
    // await notifee.displayNotification({
    //   title: "Hey! You From " + selectedState,
    //   body: "you pick the country : " + selectedState,
    //   android: {
    //     channelId,
    //     asForegroundService: true,
    //     pressAction: {
    //       id: "default",
    //     },
    //     style:{ type: AndroidStyle.BIGPICTURE, picture: 'https://cdn.pixabay.com/photo/2016/03/31/20/41/countries-1295969_1280.png' }
    //   },
    // });
    // console.log("Selected State : ", selectData);
  };

  return (
    <View style={{ marginTop: 10, marginRight: 10 }}>
      <FlatList
        data={stateNames}
        renderItem={({ item }) => {
          if (input) {
            if (item.toLowerCase().includes(input.toLowerCase())) {
              return (
                <TouchableOpacity onPress={() => handleStateSelection(item)}>
                  <View style={{ marginVertical: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      {item}
                    </Text>
                    <Text
                      style={{
                        borderColor: "#d2d2f9",
                        borderWidth: 1,
                        height: 1,
                        marginTop: 5,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
