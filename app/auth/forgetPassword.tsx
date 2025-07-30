import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'

const handlesubmitButton = () => {
  Alert.alert('Forgeting Password...', 'Password Forgetted!');
}
const forgetPassword = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View>
          <View>

            <View >
                <Text style={styles.title}>Forgot</Text>
                <Text style={styles.title}>Password?</Text>
            </View>

            <View>
              <TextInput style={styles.credentials}
                          placeholder="📧 Mobile Number or Email"
                          autoCapitalize='none'
                          autoCorrect={false}
              />
            </View>

            <View>
              <Text> We will send you a message to set </Text>
              <Text>  or reset your new password.</Text>
            </View>

            <View style={styles.btnBox} >
                      <TouchableOpacity onPress={handlesubmitButton}>
                        <Text style={styles.login}>Submit</Text>
                      </TouchableOpacity>
            </View>

          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  credentials:{
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    marginTop:20,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal:5,
  },
  btnBox:{
    backgroundColor:'#F83758',
    borderRadius:4,
    marginHorizontal:5,
    marginTop:10,
  },
  login:{
    margin: 20,
    textAlign:"center",
    fontSize:20,
    fontWeight:'bold',
  },
})

export default forgetPassword