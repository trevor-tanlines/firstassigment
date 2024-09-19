import React from "react";
import { View, Image } from "react-native";
import Picture from "../atoms/Image";
import Name from "../atoms/Name";
import Message from "../atoms/Message";

export default function Post() {
    return(
        <View>
            <View style={{ flexDirection:'row', alignItems: 'center'}}>
                <Name nameText={"Fedy Fabar"} />
                <Picture />
            </View>
            <Message messageText={ "Message: hor hor hor hor, horhorhorhorhor, hor hor horhor, hor hor horhor :3 *proceeds to jump scare you*"} />
        </View>
    );
}