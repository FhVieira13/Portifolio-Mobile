import { View, Image, Text, StyleSheet } from 'react-native';

export const Header = ({ name }) => (
  <View style={styles.container}>
   
    <Image 
      source={require('../../assets/perfil.png')} 
      style={styles.profileImage} 
    />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 30 },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#EAB308', 
  },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 15 },
});