import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import MainStack from "./components/MainStack";
import { extendTheme, Flex, NativeBaseProvider, Pressable } from "native-base";
import PlayingScreen from "./components/PlayingScreen";
import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const _CHEVRON_LEFT_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg>
  `;

  const [fontsLoaded] = useFonts({
    "brevia-bold": require("./assets/font/BreviaBold.otf"),
    "brevia-semi-bold": require("./assets/font/BreviaSemiBold.otf"),
    "brevia-extra-bold": require("./assets/font/BreviaExtraBold.otf"),
    "brevia-normal-bold": require("./assets/font/BreviaNormalBold.otf"),
    "brevia-regular": require("./assets/font/BreviaRegular.otf"),
  });

  if (!fontsLoaded) {
    console.log("unloaded");

    return null;
  }

  const theme = extendTheme({
    fontConfig: {
      "brevia-bold": {
        100: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
        200: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
        300: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
        400: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
        500: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
        600: {
          normal: "brevia-bold",
          bold: "brevia-bold",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "brevia-bold",
      body: "brevia-bold",
      mono: "brevia-bold",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainStack"
            options={{ headerShown: false }}
            component={MainStack}
          />

          <Stack.Screen
            name="Playing"
            component={PlayingScreen}
            options={({ navigation }) => ({
              headerTitle: (props) => null,
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Flex
                    w={39}
                    h={39}
                    bg={"#000"}
                    alignItems="center"
                    justifyContent={"center"}
                    borderRadius={50}
                  >
                    <SvgXml xml={_CHEVRON_LEFT_ICON} color="#e4e4e4" />
                  </Flex>
                </Pressable>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
