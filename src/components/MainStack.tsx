import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { HistoryScreen } from "./screens/HistoryScreen";
import { AboutScreen } from "./screens/AboutScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2D3748",
                },
                headerTintColor: "#fff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "AirDropper" }}
            />
            <StackNavigator.Screen
                name="History"
                component={HistoryScreen}
            />
            <StackNavigator.Screen
                name="About"
                component={AboutScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);