import HomeScreen from "./screeens/home";
import SpaceCraftScreen from "./screeens/spaceCraft";
import StarMapScreen from "./screeens/starMap";
import DailyPictureScreen from "./screeens/dailyPic";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="Daily" component={DailyPictureScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
}
