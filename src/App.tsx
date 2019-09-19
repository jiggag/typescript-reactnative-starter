import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Settings from './containers/Settings';

const App = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
});
const AppStack = createStackNavigator({
  App,
  Page: {
    screen: Settings,
  },
});

export default AppStack;
