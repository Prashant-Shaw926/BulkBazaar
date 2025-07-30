import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet,
        SafeAreaView, TouchableOpacity, Switch,
 } from 'react-native'
 
 const Notification = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
  const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
  const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);
  const toggleSwitch8 = () => setIsEnabled8(previousState => !previousState);
  return (
      <SafeAreaView>
      <ScrollView>
        <View style = {styles.header}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style = {styles.headerTitle}>Notifications</Text>
        </View>

        <View style={styles.box}>
          <Text  style={styles.boxtitle}>Common</Text>
          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>General Notification</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled1 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch1}
            value={isEnabled1}
            />
          </View>

          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>Sound</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
            />
          </View>

          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>Vibrate</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled3 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
            />
          </View>
        </View>

        <View style={styles.box}>
          <Text  style={styles.boxtitle}>System & service update</Text>
          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>App udates</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled4 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch4}
            value={isEnabled4}
            />
          </View>

          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>Bill Reminder</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled5 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch5}
            value={isEnabled5}
            />
          </View>

          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>Promotion</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled6 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch6}
            value={isEnabled6}
            />
          </View>
        </View>

        <View style={styles.box}>
          <Text  style={styles.boxtitle}>Others</Text>
          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>App udates</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled4 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch7}
            value={isEnabled7}
            />
          </View>

          <View style = {styles.toggle}>
            <Text style = {styles.btnTxt}>Bill Reminder</Text>
            <Switch 
            trackColor={{false: '#767577', true: '#5bb450'}}
            thumbColor={isEnabled5 ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch8}
            value={isEnabled8}
            />
          </View>

        </View>
          
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f0f0f0',
  },
  
  backArrow: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight:125,
  },
  box:{
    padding:20,
    borderWidth:0.2,
    borderTopColor:"white",
    borderLeftColor:"white",
    borderRightColor:"white",
    borderColor:"#D3D3D3"
  },
  boxtitle:{
    fontSize:19,
    fontWeight:"bold",
    marginBottom:15,
  },
  toggle:{
    //borderWidth:1,
    display:"flex",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:5,
  },
  btn:{
    // paddingBottom:15,
  },
  btnTxt:{
    
    fontSize:18,
  }
});


export default Notification