import { Text, View } from "react-native";

export default function Message({ messageText }) {
    return(
        <View>
            <Text
            style={{
                color:"red",
                fontSize: 50,
                margin: 15,
                fontWeight: 500,
            }}>
                {messageText}
            </Text>
        </View>
    )
}