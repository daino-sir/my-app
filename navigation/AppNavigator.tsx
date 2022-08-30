import * as React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VerificationOTP from '../Screens/Auth/Verification/VerificationOTP';
import LoginScreen from '../Screens/Auth/Login';
import HomeScreen from '../Screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../assets/style/globalStyles';
import TransactionsScreen from '../Screens/Home/TransactionsScreen';
import GroupsScreen from '../Screens/Home/GroupsScreen';
import SettingsScreen from '../Screens/Home/SettingsScreen';
import { theme } from '../assets/style/colors';
import { Ionicons, Entypo , Feather} from '@expo/vector-icons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: true}}/>
        <Stack.Screen name='VerificationOTP' component={VerificationOTP} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function HomeStackNavigator(){
    return (
        <NavigationContainer>
        <StatusBar style="auto" />
            <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function BottomStackNavigator() {
  return (
    <>
    <View style={globalStyles.statusbar}/>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({ focused, color, size}) =>{
            let iconName;

            if (route.name === 'Home'){
                iconName = focused
                ?'home'
                : 'home-outline';
            } else if (route.name === 'Search'){
                iconName = focused ? 'search':'search-outline'
            } else if (route.name === 'Transactions'){
                iconName = focused ? 'bar-chart':'bar-chart-outline'
            } else if (route.name === 'More'){
                iconName = focused ? 'ellipsis-horizontal-sharp':'ellipsis-horizontal-outline'
            }

            try {
                return <Ionicons name={iconName} size={size} color={color} />
            }  catch(error){
                console.log(error)
            }
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.orange,
        tabBarInactiveTintColor: theme.colors.primary
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={TransactionsScreen} />
        <Tab.Screen name="Transactions" component={GroupsScreen} />
        <Tab.Screen name="More" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

