import { View, TouchableOpacity, Text, StyleSheet, Linking, Alert } from 'react-native';
import { Header } from '../components/Header';

export default function MainScreen({ navigation }) {
  
 
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir o link: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header name="Flávio Henrique" />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress('https://www.linkedin.com/in/flavio-henrique-984951223/')}
      >
        <Text style={styles.buttonText}>LINKEDIN</Text>
      </TouchableOpacity>

      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress('https://github.com/FhVieira13')}
      >
        <Text style={styles.buttonText}>GITHUB</Text>
      </TouchableOpacity>

      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress('https://www.instagram.com/fh.vieira/')}
      >
        <Text style={styles.buttonText}>INSTAGRAM</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.primaryButton]} 
        onPress={() => navigation.navigate('Skills')}
      >
        <Text style={styles.primaryButtonText}>Ver Minhas Skills</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 20, 
    justifyContent: 'center' 
  },
  button: {
    backgroundColor: '#1E1E1E',
    padding: 18,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: { 
    color: '#E0E0E0', 
    fontWeight: 'bold', 
    letterSpacing: 1.5 
  },
  primaryButton: { 
    backgroundColor: '#EAB308', 
    marginTop: 30, 
    borderColor: '#EAB308' 
  },
  primaryButtonText: { 
    color: '#000', 
    fontWeight: '900',
    fontSize: 16
  },
});