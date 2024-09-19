import { Text, View } from "react-native";

export default function Name({ nameText }) {
    return(
        <View>
            <Text
                style={{
                    color: "black",
                    fontSize: 100,
                    fontWeight:"700",
                    margin: 10,
                }}>
                {nameText}
            </Text>
        </View>
    )
}

