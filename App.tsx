import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity,Button } from 'react-native';
// import { ApiTest } from './screens/Api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from './screens/components/Details';
import { MoreDetails } from './screens/components/MoreDetails';
import React,{ useState,useEffect } from 'react';
import { TabTest } from './screens/components/Tab';

function HomeScreen({navigation}:any) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Update count" onPress={() => setCount(c => c + 1)} />
      )
    })
  }, [navigation])
    return (
        <View className="mt-40 items-center justify-center">
            <Text>This is HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { 
                itemId: 86, otherParam:'anything i want here'
              })} activeOpacity={0.7} className="mt-20 p-3 rounded-md bg-gray-500">
              <Text className="text-white">Go to Details</Text>
            </TouchableOpacity>
            <Button title="update title" onPress={() => navigation.setOptions({title:'Updated'})} />
            <Text className="mt-10 text-3xl">Count: {count}</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Home" options={{title: 'Overview',
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: 'white', headerTitleStyle: {
        fontWeight: 'bold'
      }, headerRight: () => (
        <Button title="update count" onPress={() => alert('This is a button')} />
      )}} component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetails} />
        <Stack.Screen name="Tabs" component={TabTest} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
