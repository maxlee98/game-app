import { createStackNavigator } from "@react-navigation/stack";
import AdditionalScreen1 from "./AdditionalScreen1";
import AdditionalScreen2 from "./AdditionalScreen2";
import GameDetail from "./GamesPage/GameDetail";

const Stack = createStackNavigator();

function AdditionalScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdditionalScreen1" component={GameDetail} />
      <Stack.Screen name="AdditionalScreen2" component={AdditionalScreen2} />
    </Stack.Navigator>
  );
}

export default AdditionalScreens;
