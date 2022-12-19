import React from "react";
import { View,Text,TouchableOpacity,Button } from "react-native";

export const MoreDetails = ({navigation}:any) => {
    return (
        <View className="items-center justify-center mt-20">
            <Text>MoreDetails Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-slate-500 mt-20 p-3">
                <Text className="text-white">Go back to home</Text>
            </TouchableOpacity>
            <Button onPress={() => navigation.popToTop()} title="Go back to first screen" />
            <TouchableOpacity className="mt-20 bg-slate-600 p-3 rounded-md" onPress={() => navigation.navigate('Tabs')}>
                <Text className="text-white">Go to Tabs</Text>
            </TouchableOpacity>
        </View>
    )
}