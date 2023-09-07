import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  ScrollView,
  Text,
  View,
} from "native-base";
import { Dimensions } from "react-native";
import { _LIST } from "./MainScreen";

function ProfileScreen() {
  const { width } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#ecd853" />
      <Box w={width} h={300} backgroundColor="#ecd853" borderBottomRadius={40}>
        <Flex justifyContent={"center"} alignItems="center">
          <Flex mb={10} alignItems="center">
            <Avatar
              mb={5}
              bg="green.500"
              size={"lg"}
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              Aj
            </Avatar>
            <Text
              fontSize={12}
              style={{ fontFamily: "brevia-extra-bold" }}
              color="#2b2a21"
            >
              Abiodun Oluwatobi
            </Text>
            <Text color="#a3932a">@Abi</Text>
          </Flex>

          <Flex
            flexDirection={"row"}
            justifyContent="space-between"
            px={20}
            alignSelf={"stretch"}
          >
            <Flex justifyContent={"center"} alignItems="center">
              <Text fontSize={30} style={{ fontFamily: "brevia-bold" }}>
                300
              </Text>
              <Text color="#a3932a" fontSize={15}>
                Completed
              </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems="center">
              <Text fontSize={30} style={{ fontFamily: "brevia-bold" }}>
                300
              </Text>
              <Text color="#a3932a" fontSize={15}>
                Completed
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box mb={5} mx={5} mt={5}>
        <Text fontSize={23}>History</Text>
        <Text style={{ fontFamily: "brevia-regular" }} fontSize={12}>
          Songs you've listened to
        </Text>
      </Box>

      <ScrollView
        horizontal={false}
        mx={5}
        showsVerticalScrollIndicator={false}
      >
        {_LIST?.map(HistoryListData)}
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

export const HistoryListData = ({ title, subTitle }, idx) => {
  return (
    <Box key={idx} mb={_LIST.length === idx + 1 ? 91 : 5}>
      <Text
        color={"#000"}
        fontSize={14}
        style={{ fontFamily: "brevia-normal-bold" }}
      >
        {idx + 1}. {title}
      </Text>
      <Text
        mb={1}
        style={{ fontFamily: "brevia-regular" }}
        fontSize={10}
        color={"grey"}
      >
        {subTitle}
      </Text>
      <Divider bg="#e4e4e4" />
    </Box>
  );
};
