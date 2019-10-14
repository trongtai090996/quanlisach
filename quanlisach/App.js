/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoGin from './screen/LoGin';
import DanhSach from './screen/DanhSach';
import ChiTiet from './screen/ChiTiet';
import ThemSach from './screen/ThemSach';
import SuaSach from './screen/SuaSach';
 const MainNavigator = createStackNavigator({
  LoGin: {screen: LoGin},
  DanhSach: {screen: DanhSach},
  ChiTiet: {screen: ChiTiet},
  ThemSach: {screen: ThemSach},
  SuaSach: {screen: SuaSach}

});

const App = createAppContainer(MainNavigator);

export default App;
