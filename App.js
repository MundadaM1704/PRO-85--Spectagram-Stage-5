import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import TabNavigator from './navigation/TabNavigator';
import StackNavigator from './navigation/StackNavigator';
import Feed from './screens/Feed';
import CreatePost from './screens/CreatePost';
import Profile from './screens/Profile';
import PostCard from './screens/PostCard';
import PostScreen from './screens/PostScreen';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
