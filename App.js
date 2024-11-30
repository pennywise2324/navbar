import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/images/home.png')}
          style={styles.image}
        />
        
      </View>
      <View style={styles.navbar}>
        <Text style={styles.navText}>Beranda</Text>
        <Text style={styles.navText}>Peringkat</Text>
        <Text style={styles.navText}>Geotag</Text>
        <Text style={styles.navText}>Kebugaran</Text>
        <Text style={styles.navText}>Permainan</Text>
        <Text style={styles.navText}>Profil</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end', 
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    paddingVertical: 10, 
    
  },
  navText: {
    fontSize: 10, 
    fontWeight: '500', 
    color: '#333', 
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  image : {
    width: 18,
    height: 18,
    resizeMode:'contain'
  }
});
