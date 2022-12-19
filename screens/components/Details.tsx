import React from "react";
import { View,Text,Button } from "react-native";

export const DetailsScreen = ({navigation,route}:any) => {
    const {itemId, otherParam} = route.params
    // navigation.setParams({
    //     itemId: 77
    // })
    return (
        <View className="items-center justify-center mt-20">
            <Text className="mb-20">This is the details screen</Text>
            <Text className="mt-20">itemId: {JSON.stringify(itemId)}</Text>
            <Text className="mb-20">other params: {otherParam}</Text>
            <Button onPress={() => navigation.navigate('MoreDetails')} title="Go to the end" />
            <Button onPress={() => navigation.goBack()} title="Go back" />
            <Button title="Repeat details" onPress={() => navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
                otherParam: 'Random id'
            })} />
        </View>
    )
}