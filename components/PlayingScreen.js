import {
  Flex,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "native-base";
import { SvgXml } from "react-native-svg";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import LottieAnimate from "./LottieAnimate";
import Ionicons from "@expo/vector-icons/Ionicons";

function PlayingScreen({ route }) {
  const [sound, setSound] = useState();
  const [startedPlaying, setStartedPlaying] = useState(false);
  const [duration, setDuration] = useState("0:0");

  const _PAUSE_ICON = `
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7H8V17H11V7Z" fill="currentColor" /><path d="M13 17H16V7H13V17Z" fill="currentColor" /></svg>
  `;
  const _PLAY_ICON = `
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" /></svg>
  `;
  //

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setStartedPlaying(false);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          setStartedPlaying(false);
        }
      : undefined;
  }, [sound]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: route.params.audio,
    });

    setSound(sound);
    sound.setOnPlaybackStatusUpdate(dd);

    await sound.playAsync();
  }

  const dd = (r) => {
    const {
      durationMillis,
      didJusFinish,
      isLoaded,
      isPlaying,
      positionMillis,
    } = r || {};

    if (isPlaying) {
      setStartedPlaying(true);
    } else {
      setStartedPlaying(false);
    }

    //for slider functionality
    let percentage = (positionMillis / durationMillis) * 100;

    let remainingTime = durationMillis - positionMillis;

    // Convert to mm:ss format
    // var milliseconds = remainingTime % 1000;
    let seconds = Math.floor((remainingTime / 1000) % 60) || 0;
    let minutes = Math.floor((remainingTime / (60 * 1000)) % 60) || 0;
    remainingTime = minutes + ":" + seconds;

    setDuration(remainingTime);
  };

  return (
    <View bg={"#fff"} flex={1} position="relative">
      <StatusBar backgroundColor="#fff" />
      <Flex position={"relative"} top={0} h="60%" justifyContent={"center"}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          color="#000"
          position={"absolute"}
          zIndex={22}
          top={200}
          left={170}
          style={{
            fontFamily: "brevia-normal-bold",
          }}
        >
          {duration}
        </Text>
        <LottieAnimate
          play={startedPlaying}
          width={400}
          height={400}
          source={require("../assets/rotate-circle.json")}
        />
      </Flex>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Flex
          flexDir={"column"}
          justifyContent="center"
          alignItems={"center"}
          px={5}
          mb={5}
        >
          <Text
            textAlign={"center"}
            fontSize={25}
            fontWeight="bold"
            style={{
              fontFamily: "brevia-normal-bold",
            }}
          >
            {route.params.title}
          </Text>
          <Text
            textAlign={"center"}
            fontWeight="bold"
            mb={5}
            style={{
              fontFamily: "brevia-normal-bold",
            }}
          >
            {route.params.subTitle}
          </Text>
          <Pressable
            onPress={() => (startedPlaying ? pauseSound() : playSound())}
          >
            {startedPlaying ? (
              <Flex bg="#000" borderRadius={25} p={5}>
                <SvgXml xml={_PAUSE_ICON} color="#fff" />
              </Flex>
            ) : (
              <Flex bg="#000" borderRadius={21} p={6}>
                <Ionicons
                  name="ios-caret-forward-outline"
                  size={28}
                  color="#fff"
                />
              </Flex>
            )}
          </Pressable>
        </Flex>
      </ScrollView>
    </View>
  );
}

export default PlayingScreen;
