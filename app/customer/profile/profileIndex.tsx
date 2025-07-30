import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'

const profileIndex = () => {
  return (
    <SafeAreaView>
      
      <View style = {styles.bottomContainer}> {/* Main Bottom DIV */}
        <View> {/*1st DIV */}
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>👤 Profile Info</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>🔔 Notifications</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>💬 Language</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View> {/*2nd DIV */} 

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>🔒 Security</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>🎨 Theme</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View> {/*3rd DIV */}
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>🙏 Help & Support</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>📞 Contact us</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>📄 Privacy Policy</Text>
            </TouchableOpacity>
          </View>

        </View>
 
          <View> {/*Logout DIV */}
            <TouchableOpacity style={[styles.btn,styles.logoutBtn]}>
              <Text style={[styles.txt]}>Logout</Text>
            </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomContainer:{
    display:"flex",
    paddingLeft:10,
    gap:20,
    marginTop:350,
  },
  btn: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth:.2,
    borderColor:"#A9A9A9",
    paddingTop:10,
    borderRadius:10,
  },
  txt:{
    fontSize:18,
    fontWeight:"bold",
  },
  
  logoutBtn:{
    justifyContent:"center",
    textAlign:"center",
    borderWidth:1,
  }
})

export default profileIndex