import { Flex, Switch, Text, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

function SettingsScreen() {
  return (
    <View flex={1} bg={"#fff"}>
      <StatusBar backgroundColor="#fff" />

      <Text
        style={{ fontFamily: "brevia-semi-bold" }}
        bg={"#f6f6f6"}
        color={"#9b9b9b"}
        p={2}
        my={2}
        fontSize={16}
        letterSpacing={2}
      >
        CONTENT
      </Text>
      {_CONTENT_LIST.map(SettingList)}

      <Flex>
        <Text
          style={{ fontFamily: "brevia-semi-bold" }}
          bg={"#f6f6f6"}
          color={"#9b9b9b"}
          p={2}
          my={2}
          fontSize={16}
          letterSpacing={2}
        >
          PREFERENCES
        </Text>
        {_PREFERENCE_LIST.map(SettingList)}
      </Flex>
    </View>
  );
}

export default SettingsScreen;

export const SettingList = ({ title, icon, link, type }) => {
  return (
    <Flex
      flexDir={"row"}
      alignItems="center"
      justifyContent={"space-between"}
      mx={3}
      key={title}
    >
      <Flex flexDir={"row"} alignItems="center" mb={3} py={2}>
        {icon}
        <Text
          color="#0d0d0d"
          style={{ fontFamily: "brevia-semi-bold" }}
          fontSize={19}
          ml={5}
        >
          {title}
        </Text>
      </Flex>

      <Flex>
        {type === "arrow" ? (
          <FontAwesome name="angle-right" size={30} color="black" />
        ) : type === "switch" ? (
          <Switch onToggle={() => alert("HI")} size="lg" />
        ) : type === "list-arrow" ? (
          <Flex flexDir={"row"} alignItems="center">
            <Text
              fontSize={19}
              mr={4}
              color="#606060"
              style={{ fontFamily: "brevia-semi-bold" }}
            >
              English
            </Text>
            <FontAwesome name="angle-right" size={30} color="#050505" />
          </Flex>
        ) : (
          <Text>non</Text>
        )}
      </Flex>
    </Flex>
  );
};

export const _CONTENT_LIST = [
  {
    title: "Favourites",
    icon: <AntDesign name="hearto" size={30} color="#606060" />,
    link: "",
    type: "arrow",
  },
  {
    title: "Downloads",
    icon: (
      <MaterialCommunityIcons
        name="download-circle-outline"
        size={30}
        color="#606060"
      />
    ),
    link: "",
    type: "arrow",
  },
];

export const _PREFERENCE_LIST = [
  {
    title: "Language",

    icon: <Fontisto name="world-o" size={30} color="#606060" />,
    link: "",
    type: "list-arrow",
    rightList: ["English", "Yoruba"],
  },
  {
    title: "Dark Mode",
    icon: <Feather name="moon" size={30} color="#606060" />,
    link: "",
    type: "switch",
  },
  {
    title: "Only Download via WI-FI",
    icon: (
      <MaterialCommunityIcons
        name="download-circle-outline"
        size={30}
        color="#606060"
      />
    ),
    link: "",
    type: "switch",
  },
  {
    title: "Play in Background",
    icon: <MaterialIcons name="wifi" size={30} color="#606060" />,
    link: "",
    type: "switch",
  },
];
