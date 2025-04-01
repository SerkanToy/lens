import React from 'react'
import Home from './src/Screens/Home';
import WishList from './src/Screens/Profile/WishList';
import Cart from './src/Screens/Profile/Cart';
import My from './src/Screens/Profile/My';
import MyOrder from './src/Screens/Profile/MyOrder';
import SignIn from './src/Screens/Account/SignIn';
import SignUp from './src/Screens/Account/SignUp';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    WishList: WishList,
    My: My,
    Cart: Cart,
    MyOrder: MyOrder
  },
});

const MyDrawer = createDrawerNavigator({
  screens: {
    HomeTab:HomeTabs,
    SignIn: SignIn,
    SignUp: SignUp
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Index: MyDrawer
  },
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {
  return <Navigation />;
}

