import React from "react";
import { View, Image } from "react-native";

export default function Picture() {
    return(
        <View>
            <Image
                source={require('@/components/pics/fnaf.jpg')}
                style={{
                    width: 300,
                    height: 300,
                    resizeMode:'cover',
                    borderRadius: 20,
                    borderColor: '#fff',
                    borderWidth: 3,
                    margin: 10,
                }}
                />
        </View>
    );
}