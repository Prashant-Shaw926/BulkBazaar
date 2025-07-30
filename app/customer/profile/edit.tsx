import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,
  StyleSheet,SafeAreaView,StatusBar,} from 'react-native';
import { Picker } from '@react-native-picker/picker';


  const handleInputChange = () => {
      console.log('Working:','OK');
    };

  const handleSubmit = () => {
    console.log('Profile data:', 'Ok');
  };
  
  const edit = () => {
    return (
      <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit profile</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.formContainer}>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            autoCapitalize='words'
          />
        </View>

        {/* Nick Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nick name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        {/* Label */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneContainer}>
            <View style={styles.flagContainer}>
              <Text style={styles.flag}>🇮🇳</Text>
            </View>
            <TextInput
              style={[styles.input, styles.phoneInput]}
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Country and Genre Row */}
        <View style={styles.rowContainer}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>Country</Text>
            <View style={styles.pickerContainer}>
              <Picker>
                <Picker.Item label="India" value="India"/>
              </Picker>
            </View>
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>Genre</Text>
            <View style={styles.pickerContainer}>
              <Picker>
                <Picker.Item label="Female" value="Female"/>
                <Picker.Item label="Male" value="Male"/>
                <Picker.Item label="Other" value="Other"/>
                <Picker.Item label="Prefer not to say" value="Prefer not to say"/>
              </Picker>
            </View>
          </View>
        </View>

        {/* Address */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            multiline
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
  },
  placeholder: {
    width: 34,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: '#333',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  flag: {
    fontSize: 20,
  },
  phoneInput: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  pickerContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  submitButton: {
    backgroundColor: '#007bff',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

  export default edit