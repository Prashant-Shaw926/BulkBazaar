import { Pressable, View, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'

const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset link will be sent to your email');
};

const handleSignUp = () => {
    Alert.alert('Sign Up', 'Navigate to sign up screen');
  };

const handleLogin = () => {
    Alert.alert('Logging in...', 'Signing in...');
}

export const handleGoogleLogin = () => {
  Alert.alert('Logging in...', 'Signing with Google...');
}
const Login = () => {
  return (
  <SafeAreaView>
    <View>
      <View> 

        <View >
          <Text style={styles.title}>Login or Signup</Text>
        </View>
        <View> 
          
          <TextInput style={styles.credentials}
            placeholder="Mobile Number or Email"
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TextInput style={styles.credentials}
            placeholder="Password"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </View>

        <View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginBox} >
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.login}>Login</Text>
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
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signup}>Don't have an account?  Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView> 
  )
};

export const styles = StyleSheet.create({
  credentials:{
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    marginTop:20,
    borderColor:'#dadce0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginHorizontal:5,
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  forgetPassword:{
    textAlign:"right",
    paddingRight:15,
    paddingBottom:20,
  },
  loginBox:{
    backgroundColor:'#F83758',
    borderRadius:4,
    marginHorizontal:5,
  },
  login:{
    margin: 20,
    textAlign:"center",
    fontSize:20,
    fontWeight:'bold',
  },
  or:{
    textAlign:"center",
    paddingTop:20,
    marginBottom:15,
  },
  signup:{
    marginTop:20,
    textAlign:"center",
  },
    socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
    color: '#fff',
  },
  googleText: {
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

export default Login