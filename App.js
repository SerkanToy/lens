import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Button, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from './src/Screens/Home';
import WishList from './src/Screens/Profile/WishList';
import Cart from './src/Screens/Profile/Cart';
import My from './src/Screens/Profile/My';
import Products from './src/Screens/Product/Products';
import ProductDetail from './src/Screens/Product/ProductDetail';
import MyOrder from './src/Screens/Profile/MyOrder';
import SignIn from './src/Screens/Account/SignIn';
import SignUp from './src/Screens/Account/SignUp';
import ForgotPassword from './src/Screens/Account/ForgotPassword';
import Welcome from './src/Screens/Welcome';
import toggleDrawerButton from './src/ToggleDrawerButton'
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer, createStaticNavigation, useNavigation } from '@react-navigation/native';
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

const ProductTab = createBottomTabNavigator({
  screenOptions:{
    headerShown:true,
    tabBarShowLabel:false,
    headerSearchBarOptions:false,
    headerLeft: ({navigation = useNavigation() }) => (
      <TouchableOpacity onPress={() => { navigation.navigate("Index") }}>
         <AntDesign name="home" size={24} color="blue" />
      </TouchableOpacity>
    )
  },
  screens: {    
    Products: { 
      screen:Products,            
      options:{
        showIcon:true,
        title:'',
        tabBarShowLabel:false,
        tabBarIcon:() => <AntDesign name="home" size={24} color="blue" /> 
      }
    },
    ProductDetail: { 
      screen:ProductDetail,      
      options:{
        title:'ProductDetail------',
        tabBarShowLabel:false,
        showIcon: true,
        tabBarIcon:() => <AntDesign name="hearto" size={24} color="black" /> 
      }
    },
    Back: { 
      screen:() => <Button title='Back' onPress={() => navigation.navigate('Home')}/>,      
      options:{
        tabBarShowLabel:false,
        showIcon: true,
        tabBarIcon:() => <AntDesign name="hearto" size={24} color="black" /> 
      }
    }
  }, 
});



const LeftDrawerScreen = createDrawerNavigator({
  id: 'LeftDrawer',
  screenOptions: {
    drawerPosition: 'left',
  },
  screens: {
    Home: HomeTabs,
    ProductTab: ProductTab
  },
});

const RightDrawerScreen = createDrawerNavigator({
  id : 'RightDrawer',
  screenOptions: {
    drawerPosition: 'right',
    
    headerTransparent:false,
    headerRight:({ navigation = useNavigation() }) => (<View style={{marginRight:10}}>
      <AntDesign name="bells" size={30} color="black" onPress={() => navigation.getParent('RightDrawer').toggleDrawer()}/>
    </View>),
    
    /*headerLeft:({ navigation = useNavigation() }) => (<View style={{marginLeft:10}}>
        <AntDesign name="appstore-o" size={30} color="black" onPress={  navigation.getParent('LeftDrawer').openDrawer() } />
      </View>),*/
  },
  screens: {
    Home: HomeTabs,
    ProductTab: ProductTab
  },
});


const MyDrawer = createDrawerNavigator({
  id : 'LeftDrawer',
  screenOptions:{    
    headerTransparent:false,  
    drawerPosition: 'left',     
    //headerRight:toggleDrawerButton,
    headerLeft:({ navigation = useNavigation() }) => (<TouchableOpacity  style={{marginLeft:10}} onPress={() => navigation.getParent('LeftDrawer').toggleDrawer()}>
        <AntDesign name="appstore-o" size={30} color="black"  />
      </TouchableOpacity>),
    /*headerSearchBarOptions:{      
      placeholder:'Ara...',
      headerLeft:() => <Octicons name="checklist" size={24} color="black" />,
    },*/
    headerTitleStyle:{
      display:'none'
    },
    headerStyle:{
      backgroundColor:'white'
    },
    headerShadowVisible:false
  },
  /*LeftDrawerScreen:()=> <LeftDrawerScreen/>,
  RightDrawerScreen:RightDrawerScreen,*/
  screens: {
    RightDrawerScreen: RightDrawerScreen,
    Home: HomeTabs,
    ProductTab: ProductTab
  },
});

const RootStack = createNativeStackNavigator({  
  screenOptions:{
    headerTransparent:true,    
    headerLeft: ({navigation = useNavigation()}) => (
      <TouchableOpacity onPress={() => { navigation.goBack() }} style={{backgroundColor:'rgba(0, 0, 0, 0.19)',padding:10,borderRadius:30}}>
         <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    )   
  },
  groups:{
    Login:{
      screens:{
        Welcome:{
          screen:Welcome,
          options:{
            headerShown:false,
            title:''
          }
        },
        SignIn:{
          screen:SignIn,
          options:{
            headerShown:true,
            title:''
          }
        }, 
        SignUp: {
          screen:SignUp,
          options:{
            headerShown:true,
            title:''
          }
        },
        ForgotPassword: {
          screen:ForgotPassword,
          options:{
            headerShown:true,
            title:''
          }
        },
      }
    },
    Index:{
      screens: {
        Index: {
          screen:MyDrawer,
          options:{
            headerShown:false,
          }
        }
      },
    },   
    Product:{
      screens: {
        ProductTab: {
          screen:ProductTab,
        } 
      },
    }, 
  }  
  
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {
  return <Navigation />;
}

