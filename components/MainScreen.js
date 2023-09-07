import dayjs from "dayjs";
import {
  FlatList,
  Flex,
  Heading,
  Pressable,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgFromXml } from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export const _LIST = [
  {
    title: "Start Your First Session. \nReady ?",
    subTitle: "Relax your body",
    min: "15min",
    color: "#fde0cd",
    audio: "https://audio.jukehost.co.uk/L3l0V5V6EBWYWMUNsg4wnrx0h0CsOGpO",
  },
  {
    title: "Mind Calm",
    subTitle: "Calm your mind",
    min: "15min",
    color: "#d2dce4",
    audio: "https://audio.jukehost.co.uk/L3l0V5V6EBWYWMUNsg4wnrx0h0CsOGpO",
  },
  {
    title: "Deep Meditation",
    subTitle: "Deep Sleep",
    min: "15min",
    color: "#bde6f3",
  },
  {
    title: "Introduction",
    subTitle: "Fresh mind",
    min: "15min",
    color: "#f8f0a5",
  },

  {
    title: "Mind Calm",
    subTitle: "Calm your mind",
    min: "15min",
    color: "#d2dce4",
    audio: "https://audio.jukehost.co.uk/L3l0V5V6EBWYWMUNsg4wnrx0h0CsOGpO",
  },
  {
    title: "Deep Meditation",
    subTitle: "Deep Sleep",
    min: "15min",
    color: "#bde6f3",
  },
  {
    title: "Introduction",
    subTitle: "Fresh mind",
    min: "15min",
    color: "#f8f0a5",
  },
];
function MainScreen() {
  const insets = useSafeAreaInsets();
  const _TIME_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" /></svg>
  `;

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar backgroundColor="#f2f4f6" />

      <TopCalendar />
      <ScrollView mx={2} showsVerticalScrollIndicator={false} mb={10}>
        {_LIST.map(({ title, subTitle, min, color, audio }, index) =>
          index === 0 ? (
            <Flex
              key={index}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={4}
              bg={color}
              borderRadius={35}
              px={5}
              py={6}
              // pb={3}
              shadow={0.3}
              mb={5}
            >
              <Flex w="100%" position={"relative"} zIndex={2}>
                <Text
                  fontWeight={"bold"}
                  fontSize={19}
                  style={{
                    fontFamily: "brevia-bold",
                  }}
                >
                  {title}
                </Text>
                <Text
                  mt={1}
                  color="#8f9396"
                  fontSize={12}
                  style={{
                    fontFamily: "brevia-regular",
                  }}
                >
                  {subTitle}
                </Text>
                <Flex
                  flexDir={"row"}
                  alignItems="center"
                  justifyContent={"flex-end"}
                  mt={2}
                >
                  <BlackCircle size={"xs"}>
                    <SvgFromXml xml={_TIME_ICON} color="#fff" />
                  </BlackCircle>
                  <Text
                    fontWeight={"bold"}
                    ml={2}
                    style={{
                      fontFamily: "brevia-regular",
                    }}
                  >
                    {min}
                  </Text>
                </Flex>
              </Flex>

              <Flex position={"absolute"} bottom="-20" left={1} zIndex={200}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Playing", {
                      title,
                      subTitle,
                      min,
                      color,
                      audio,
                    })
                  }
                >
                  <BlackCircle size="xl">
                    <Ionicons
                      name="ios-caret-forward-outline"
                      size={28}
                      color="#fff"
                    />
                  </BlackCircle>
                </Pressable>
              </Flex>
            </Flex>
          ) : (
            <Flex
              key={index}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={2.5}
              bg={color}
              borderRadius={35}
              px={5}
              pt={5}
              pb={5}
              shadow={0.3}
            >
              <Flex>
                <Text
                  fontWeight={"bold"}
                  fontSize={17}
                  style={{
                    fontFamily: "brevia-bold",
                  }}
                >
                  {title}
                </Text>
                <Text
                  mt={1}
                  color="#8f9396"
                  fontSize={12}
                  style={{
                    fontFamily: "brevia-regular",
                  }}
                >
                  {subTitle}
                </Text>
                <Flex flexDir={"row"} alignItems="center" mt={2}>
                  <BlackCircle size={"xs"}>
                    <SvgFromXml xml={_TIME_ICON} color="#fff" />
                  </BlackCircle>
                  <Text
                    ml={2}
                    fontSize={11}
                    style={{
                      fontFamily: "brevia-regular",
                    }}
                  >
                    {min}
                  </Text>
                </Flex>
              </Flex>

              <Flex>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Playing", {
                      title,
                      subTitle,
                      min,
                      color,
                      audio,
                    })
                  }
                >
                  <BlackCircle>
                    <Ionicons
                      name="ios-caret-forward-outline"
                      size={28}
                      color="#fff"
                    />
                  </BlackCircle>
                </Pressable>
              </Flex>
            </Flex>
          )
        )}
      </ScrollView>
    </View>
  );
}

export default MainScreen;

export const BlackCircle = ({ noBorder = false, size = "null", children }) => {
  return (
    <Stack
      backgroundColor={noBorder ? "transparent" : "#fff"}
      p={0.5}
      borderRadius={30}
      shadow={0.5}
    >
      <Stack
        display={"flex"}
        borderRadius={50}
        background="#000"
        justifyContent={"center"}
        alignItems="center"
        width={size === "xs" ? 4 : size === "xl" ? 55 : 45}
        height={size === "xs" ? 4 : size === "xl" ? 55 : 45}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export const ScreenWrapper = ({ children }) => {
  // we obtain the object that contains info about the current route
  const route = useRoute();

  useEffect(() => {
    switch (route.name) {
      case "Home":
        StatusBar.pushStackEntry({ barStyle: "light-content", hidden: false });
        break;
      case "MainStack":
        StatusBar.pushStackEntry({
          // backgroundColor: "red",
          barStyle: "dark-content",
          hidden: false,
        });
        break;
      default:
        StatusBar.pushStackEntry({
          backgroundColor: "red",
          barStyle: "light-content",
          hidden: true,
        });
    }
  }, [route]);
  // for simplicity we will only modify the background color
  const getBackgroundColorBasedOnRoute = () => {
    return route.name === "Products" ? "darkolivegreen" : "orange";
  };

  // we are applying the background color to the component itself
  return (
    <View
      style={{
        paddingTop: StatusBarManager.HEIGHT,
        backgroundColor: getBackgroundColorBasedOnRoute(),
        flex: 1,
      }}
    >
      <StatusBar

      // barStyle={route.name === "Products" ? "light-content" : "dark-content"}
      />
      {children}
    </View>
  );
};

export const TopCalendar = () => {
  const _BOLT_ICON = `
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" /></svg>

  `;

  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  const date = new Date("2023-07-31");

  const r = getAllDaysInMonth(date.getFullYear(), date.getMonth()).map(
    (data, idx) => ({
      dayOfWeek: dayjs(data).format("dd")?.slice(0, 1),
      date: dayjs(data).format("DD"),
      key: idx,
    })
  );

  return (
    <Flex backgroundColor="#f2f4f6" borderBottomRadius={35} p={5}>
      <Heading
        mb={7}
        fontSize={25}
        style={{
          fontFamily: "brevia-normal-bold",
        }}
      >
        Start Your Day
      </Heading>

      <FlatList
        initialScrollIndex={parseInt(dayjs().format("DD")) - 1 || 0}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={r}
        renderItem={({ item, index, separators }) => (
          <Flex
            key={item?.key}
            flexDir={"column"}
            alignItems="center"
            justifyContent={"flex-start"}
            mx={4}
          >
            <Text
              fontSize={16}
              color="#b5b6b7"
              fontWeight={"bold"}
              style={{
                fontFamily: "brevia-semi-bold",
              }}
            >
              {item?.dayOfWeek}
            </Text>
            <Flex
              mt={2}
              color="#000"
              position="relative"
              alignSelf={"center"}
              justifyContent="center"
              style={{
                ...(dayjs().format("DD") === item?.date
                  ? {
                      backgroundColor: "#000",
                      color: "#fff",
                      padding: 10,
                      paddingTop: 6,
                      paddingBottom: 6,
                      borderRadius: 20,
                    }
                  : {}),
              }}
            >
              <Text
                fontSize={16}
                color={dayjs().format("DD") === item?.date ? "#fff" : "#000"}
                style={{
                  fontFamily: "brevia-normal-bold",
                }}
              >
                {item?.date}
              </Text>
              {dayjs().format("DD") === item?.date && (
                <Flex alignSelf={"center"}>
                  <SvgFromXml
                    color={"#fff"}
                    // fontSize={14}
                    xml={_BOLT_ICON}
                    alt="BOLT"
                  />
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
      ></FlatList>
    </Flex>
  );
};
