import { Pressable, View, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Container } from '~/components/Container'


export const handleGoogleLogin = () => {
  Alert.alert('Logging in...', 'Signing with Google...');
}

const handleCreating = () => {
  Alert.alert('Creating...', 'Creating ur account...');
}

const handleLogin = () => {
  Alert.alert('Logging in...', 'Signing in...');
}

const register = () => {
  return (
    <SafeAreaView>
       <View>
        <View>
          <Text style={styles.header}>Create an</Text>
          <Text style={styles.header}>account!</Text>
        </View>

        <View>
          <TextInput style={styles.credentials}
            placeholder='Mobile number or Email'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TextInput style={styles.credentials}
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TextInput style={styles.credentials}
            placeholder='ConfirmPassword'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>

        <View >
          <Text style={styles.register}>By clicking the Checkbox button, you agree</Text>
            <Text style={styles.register}>to the terms & condition.</Text>          
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={handleCreating}>
            <Text style={styles.button}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.or}>- OR continue with - </Text>
        </View>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity onPress={handleGoogleLogin}
            style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.login}>I Already Have an Account!  Login</Text>
          </TouchableOpacity>
           
        </View>

      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  header:{
    fontSize:25,
    fontWeight:'bold'
  },
  credentials:{
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    textAlign:"center",
    borderColor:'#dadce0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal:5,

  },
  register:{
    fontSize:15,
  },
  buttonBox:{
    backgroundColor:'#F83758',
    alignContent:"center",
    alignItems:"center",
    marginTop:20,
    borderRadius:12,
    marginHorizontal:5,
  },
  button:{
    borderRadius:4,
    textAlign:"center",
    alignItems:"center",
    padding:10,
    fontSize:20,
  },
  or:{
    textAlign:"center",
    marginTop:40,
    marginBottom:20
  },
  login:{
    textAlign:"center",
  },googleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4285f4',
  },
    socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 14,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#dadce0',
  },
    socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default register