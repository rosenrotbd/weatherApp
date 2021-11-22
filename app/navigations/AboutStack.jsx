import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../pages/About";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "Acerca de" }}
        />
        </Stack.Navigator>
    )
}
export default AboutStack;