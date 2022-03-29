import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './style';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();


const  Home=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>Home Screen</Text>
      <TouchableOpacity style={styles.Button}
      onPress={()=>navigation.openDrawer()}
      >
          <Text style={styles.buttontext}>Open The Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

function First(props) {
  return (
      <View>
          <Text>
              First Button Pressed
          </Text>
      </View>
  );
}

function Second(props) {
  return (
      <View>
          <Text>
              Second Button Pressed
          </Text>
      </View>
  );
}

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "MyDrawer" component={MyDrawer} options={{headerShown:false}}/>
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const MyDrawer=()=>{
  return (
    <Drawer.Navigator
    drawerContent={props =>{return(<CustomDrawer {...props} />)}}
    >
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Drawer.Screen name ="First" component={First} />
      <Drawer.Screen name ="Second" component={Second} />
    </Drawer.Navigator>
  );
}

export {MyDrawer}

export default function DrawerDemo() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
