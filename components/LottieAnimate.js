import LottieView from "lottie-react-native";
import { memo, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

function LottieAnimate({ play = null, source, ...props }) {
  const animationProgress = useRef(new Animated.Value(0));
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

  useEffect(() => {
    if (play === false) {
      Animated.loop(
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).stop();
    } else if (play === true) {
      Animated.loop(
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    } else {
      Animated.loop(
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    }
  }, [play]);
  return (
    <AnimatedLottieView
      loop
      style={{ width: 500, height: 500, ...props }}
      source={source}
      progress={animationProgress.current}
    />
  );
}

export default memo(LottieAnimate);
