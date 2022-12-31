import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        /><Image
        source={require('./assets/estrela3.png')}
        style={{width: 20, height: 20}}/>
      </View>
    );
  }
  
  const SettingsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <TouchableOpacity
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
        <Image
        source={require('./assets/estrela3.png')}
        style={{width: 20, height: 20}}/>
      </View>
    );
  }

  const ProfileScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <TouchableOpacity
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        <Image
        source={require('./assets/estrela3.png')}
        style={{width: 20, height: 20}}/>
      </View>
    );
  } 

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({}) => ({
        tabBarActiveTintColor: '#9A6B99',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profissionais" component={HomeScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator>
  );
}

export default MyTabs;