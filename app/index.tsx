import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  'splash/index': undefined;
  // add other routes here if needed
};

export default function Index() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Thank you for using our app!</Text>
      {/* Create a button to navigate to the splash screen */}
      <Button onPress={() => {
        navigation.navigate('splash/index');
      }}>
        Go to Splash
      </Button>
    </View>
  );
}
