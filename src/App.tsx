import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Live from './containers/Live';
import Login from './containers/Login';
import Settings from './containers/Settings';

const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Live: {
    screen: Live,
  },
  Settings: {
    screen: Settings,
  },
});
const App = createStackNavigator({
  Tab,
  Page: {
    screen: Settings,
  },
  Page2: {
    screen: Login,
  },
});

export default App;
