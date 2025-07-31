import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
const privacyP = () => {
  return (
   <SafeAreaView>
    <View>
        <View style={styles.header}>
            <Text style={styles.headertxt}>Privacy Policy</Text>
        </View>

        <View>
            <Text style={styles.parahead}>
                1. Types data we collect
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Text>

            <Text style={styles.parahead}>
                2. Use of your personal data
            </Text>
            <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </Text>
            <Text style={styles.parahead}>
                3. Disclosure of your personal data
            </Text>
            <Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
            
                
            </Text>
        </View>
        
    </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header:{
        alignItems:"center",
        marginBottom:20,
    },
    headertxt:{
        fontSize:20,
        fontWeight:"bold",
    },
    parahead:{
        fontWeight:"bold",
        margin:10,
    }
})
export default privacyP