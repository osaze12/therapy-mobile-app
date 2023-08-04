import { StatusBar } from "expo-status-bar";
import { Flex, Heading, Text, Button, Box, View } from "native-base";
// import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import LottieAnimate from "./LottieAnimate";
import { Octicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  const arrowRight = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
  `;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#fff" />

      <LottieAnimate source={require("../assets/data.json")} />

      <Text
        fontSize={45}
        px={5}
        style={{
          alignSelf: "stretch",
          fontFamily: "brevia-semi-bold",
        }}
      >
        Keep Your {"\n"}Mind Fresh
      </Text>
      <Flex
        alignSelf={"stretch"}
        flexDirection={"row"}
        borderColor="red"
        justifyContent={"space-between"}
        alignItems={"center"}
        px={6}
      >
        <Flex flexDir={"row"} alignItems="center">
          <Box width={3} height={3} bg={"#0007"} borderRadius={50} />
          <Box ml={2} width={3} height={3} bg={"#0008"} borderRadius={50} />

          <Box ml={2} width={49} height={3} bg={"#000"} borderRadius={50} />
        </Flex>

        <Button
          onPress={() => navigation.navigate("MainStack", {})}
          background={"#000"}
          px={8}
          borderRadius={50}
        >
          <Octicons name="arrow-right" size={34} color="#fff" />
          {/* <SvgXml xml={arrowRight} color="#fff" width={50} height={50} /> */}
        </Button>
      </Flex>
    </View>
  );
}

export default HomeScreen;
