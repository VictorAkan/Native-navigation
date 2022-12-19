import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text,View } from "react-native";

const MainHome = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Home!</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Settings!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator()

export const TabTest = () => {
    return (
    // <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="MainHome" component={MainHome} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}