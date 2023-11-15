import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 190 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 2,
            }}
          >
            <MaterialIcons name="stars" size={22} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 2,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 13 }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 2,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 2, fontSize: 13, fontWeight: "500" }}>
            Price for 1 Night and {adults} adults
          </Text>

          <View
            style={{
              marginTop: 2,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 14,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Rs {property.newPrice * adults}
            </Text>
          </View>

          <View style={{ marginTop: 2 }}>
            <Text style={{ fontSize: 12, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              Hotel Room : 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 5,
              width: 130,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
