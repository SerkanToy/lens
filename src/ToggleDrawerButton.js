import { TouchableOpacity, View, StyleSheet  } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const ToggleDrawerButton = () => {
  const nav = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{marginRight:10}} onPress={() => { (nav?.getParent('RightDrawer').openDrawer()) } }>
        <AntDesign name="bells" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity  style={{marginLeft:10}} onPress={() => { (nav?.getParent('LeftDrawer').openDrawer()) }}>
        <AntDesign name="appstore-o" size={30} color="black"  />
      </TouchableOpacity>
    </View>
  )
}

export default ToggleDrawerButton;
/*
export default class toggleDrawerButton extends Component {
  render() {
    //const nav = useNavigation();
    return (
      <View>
        <TouchableOpacity style={{marginRight:10}} onPress={() => (nav?.getParent('RightDrawer').openDrawer()) }>
          <AntDesign name="bells" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  style={{marginLeft:10}} onPress={() => nav?.getParent('LeftDrawer').toggleDrawer()}>
          <AntDesign name="appstore-o" size={30} color="black"  />
        </TouchableOpacity>
      </View>
    )
  }
}*/


