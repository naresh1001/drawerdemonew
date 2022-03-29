import React,{useState} from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import style from './style';
const CustomDrawer = (props) => {
    const { navigation } = props
    const [visible,setvisible]=useState(false)
        return (
        <View style={{flex:1,padding:20,backgroundColor:"skyblue"}}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} >
            <Feather name="x" size={34} color="black" />
            </TouchableOpacity>
            <DrawerContentScrollView {...props}>
                <View style={{flex:1}}>
                            <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                onPress={() =>setvisible(!visible)}
                               
                               >
                                <View style={{flexDirection:"row"}}>
                                <Feather name="home" size={24} color="black" />
                                <Text style={style.buttontext}>Academic</Text>
                                </View>

                               {!visible?

                                <Entypo name="chevron-down" size={24} color="blue" /> 
                                :
                                <Entypo name="chevron-up" size={24} color="blue" />
                                }
                             </TouchableOpacity>

          {visible?   
          <View style={{paddingLeft:22}}>
          <TouchableOpacity style={style.nestedbutton} onPress={()=>navigation.navigate("First")} >
                                <Feather name="user" size={24} color="black" />
                                <Text style={style.nestedbuttontext}>First Button</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.nestedbutton} onPress={()=>navigation.navigate("Second")} >
                                <Feather name="settings" size={24} color="black" />
                                <Text style={style.nestedbuttontext}>Sec Button</Text>
          </TouchableOpacity>
          </View>
          :

          null

          }
          
                </View>

            </DrawerContentScrollView>
           
        </View>
    );
};

export default CustomDrawer;