import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

const AuthNav = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Signup" component={Signup} />
		</Stack.Navigator>
	);
};

export default AuthNav;
