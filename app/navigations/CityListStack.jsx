import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CityList from "../pages/CityList";

const Stack = createStackNavigator();

function CityListStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
          name="CityList"
          component={CityList}
          options={{ title: "City List" }}
        />
        </Stack.Navigator>
    )
}
export default CityListStack;