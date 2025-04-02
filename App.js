import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
  screenOptions:{
    headerShown:false,
    tabBarShowLabel:false,
  },
  screens: {
    Home: { 
      screen:Home,      
      options:{
        title:'Anasayfa',
        tabBarOptions:{
          showIcon: false
        },
        tabBarIcon:() => <AntDesign name="home" size={24} color="blue" /> 
      }
    },
    WishList: { 
      screen:WishList,      
      options:{
        title:'',
        tabBarOptions:{
          showIcon: true
        },
        tabBarIcon:() => <AntDesign name="hearto" size={24} color="black" /> 
      }
    },
    My: { 
      screen:My,      
      options:{
        title:'',
        headerShown:true,
        tabBarOptions:{
          showIcon: true
        },
        tabBarIcon:() => <AntDesign name="user" size={24} color="black" />
      }
    },
    Cart: { 
      screen:Cart,      
      options:{
        title:'',
        tabBarOptions:{
          showIcon: true
        },
        tabBarIcon:() => <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
      }
    },
    MyOrder: { 
      screen:MyOrder,      
      options:{
        title:'',
        tabBarOptions:{
          showIcon: true
        },
        tabBarIcon:() => <AntDesign name="profile" size={24} color="black" />
      }
    },
  },
});

const MyDrawer = createDrawerNavigator({
  screenOptions:{
    headerTransparent:false, 
    drawerPosition: 'right',
    headerSearchBarOptions:{      
      placeholder:'Ara...'
    },    
    headerTitleStyle:{
      display:'none'
    },
    headerStyle:{
      backgroundColor:'white'
    },
    headerShadowVisible:false
  },
  screens: {
    HomeTab: HomeTabs,
    SignIn: SignIn,
    SignUp: SignUp
  },
});

const RootStack = createNativeStackNavigator({  
  screenOptions:{
    headerShown:false
  },
  screens: {
    Index: {
      screen:MyDrawer,
      options:{
        
      }
    } 
  },
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {
  return <Navigation />;
}

