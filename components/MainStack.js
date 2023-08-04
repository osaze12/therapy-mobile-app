import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen, { BlackCircle } from "./MainScreen";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsScreen from "./SettingsScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import { Pressable } from "native-base";
import { SvgXml } from "react-native-svg";

function MainStack() {
  const Tab = createBottomTabNavigator();
  const _CHEVRON_LEFT_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg>
  `;

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Main") {
            return (
              <Ionicons
                name={focused ? "md-home-sharp" : "home-outline"}
                size={size}
                color={"#fff"}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "settings-sharp" : "settings-outline"}
                size={size}
                color={"#fff"}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                size={22}
                color={"#fff"}
              />
            );
          } else if (route.name === "Alarm") {
            return (
              <Ionicons
                name={focused ? "ios-alarm-sharp" : "ios-alarm-outline"}
                size={size}
                color={"#fff"}
              />
            );
          }

          return <Ionicons name={"null"} size={size} color={"#fff"} />;
        },

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000",

          elevation: 0,
          marginBottom: 20,
          padding: 10,
          borderRadius: 40,
          height: 80,
          width: "70%",
          left: 50,
          right: 50,
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={Profile}
        options={{
          tabBarLabel: "",
          // tabBarIcon: ({ tintColor }) => (
          //   <AntDesign name="rightcircleo" size={24} color="#fff" />
          // ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarLabel: "",
          headerTitle: () => null,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#ecd853",
          },

          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <BlackCircle noBorder>
                <SvgXml xml={_CHEVRON_LEFT_ICON} color="#e5e5e5" />
              </BlackCircle>
            </Pressable>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
