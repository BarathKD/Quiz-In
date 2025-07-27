import { Text, View } from "react-native";
import { Appbar } from 'react-native-paper';

export default function Index() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Splash Screen" />
      </Appbar.Header>

     <Text>Welcome to the Splash Screen!</Text>

    </View>
  );
}
