import React from 'react';
import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Administrator from './src/components/Administrator';
import Administrasi from './src/components/admin/Menu/Admin/Administrasi';
import Index from './src/components/Index';
import Menu from './src/components/admin/Menu';
import { NativeWindStyleSheet } from "nativewind";
import Pembayaran from './src/components/admin/Menu/Pembayaran/Pembayaran';
import DetailPembayaran from './src/components/admin/Menu/Pembayaran/DetailPembayaran';
import Hirakata from './src/components/admin/Menu/Hirakata/Hirakata';
import TabelHirakata from './src/components/admin/Menu/Hirakata/TabelHiragana';
import Kanjin5 from './src/components/admin/Menu/Kanjin5/Kanjin5';
import TabelKanjin5 from './src/components/admin/Menu/Kanjin5/TabelKanjin5';
import KataBenda from './src/components/admin/Menu/KataBenda/KataBenda';
import KataKerja from './src/components/admin/Menu/KataKerja/KataKerja';
import TabelKataBenda from './src/components/admin/Menu/KataBenda/TabelKataBenda';
import TabelKataKerja from './src/components/admin/Menu/KataKerja/TabelKataKerja';
import TabelAdmin from './src/components/admin/Menu/Admin/TabelAdmin';
import KataSifat from './src/components/admin/Menu/KataSifat/KataSifat';
import TabelKataSifat from './src/components/admin/Menu/KataSifat/TabelKataSifat';
import TabelKenshu from './src/components/admin/Menu/Kenshu/TabelKenshu';
import Kenshusei from './src/components/admin/Menu/Kenshu/Kenshu';
import axios from 'axios';
import { store } from './src/sotre';
import { Provider } from 'react-redux';
import TBmenu from './src/components/admin/Menu/Tatabahasa/TBmenu';
import Pmenu from './src/components/admin/Menu/Tatabahasa/Partikel/pamenu';
import Partikel from './src/components/admin/Menu/Tatabahasa/Partikel/partikel';
import Partikel2 from './src/components/admin/Menu/Tatabahasa/Partikel/partikel2';
import Partikel3 from './src/components/admin/Menu/Tatabahasa/Partikel/partikel3';
import Partikel4 from './src/components/admin/Menu/Tatabahasa/Partikel/partikel4';
import Partikel5 from './src/components/admin/Menu/Tatabahasa/Partikel/partikel5';
import Pomenu from './src/components/admin/Menu/Tatabahasa/Pola/Pomenu';
import Pola from './src/components/admin/Menu/Tatabahasa/Pola/Pola1';
import Pola2 from './src/components/admin/Menu/Tatabahasa/Pola/Pola2';
import Pola3 from './src/components/admin/Menu/Tatabahasa/Pola/Pola3';
import Pola4 from './src/components/admin/Menu/Tatabahasa/Pola/Pola4';
import Pola5 from './src/components/admin/Menu/Tatabahasa/Pola/Pola5';
import Pola6 from './src/components/admin/Menu/Tatabahasa/Pola/Pola6';
import KamusMenu from './src/components/admin/Menu/Tatabahasa/Kamus/KamusMenu';
import Kamus1 from './src/components/admin/Menu/Tatabahasa/Kamus/Kamus1';
import Kamus2 from './src/components/admin/Menu/Tatabahasa/Kamus/Kamus2';
import Kamus3 from './src/components/admin/Menu/Tatabahasa/Kamus/Kamus3';
import Kamus4 from './src/components/admin/Menu/Tatabahasa/Kamus/Kamus4';
import SopanMenu from './src/components/admin/Menu/Tatabahasa/Sopan/SopanMenu';
import Sopan1 from './src/components/admin/Menu/Tatabahasa/Sopan/Sopan1';
import Sopan2 from './src/components/admin/Menu/Tatabahasa/Sopan/Sopan2';
import Sopan3 from './src/components/admin/Menu/Tatabahasa/Sopan/Sopan3';
import Sopan4 from './src/components/admin/Menu/Tatabahasa/Sopan/Sopan4';
import NegatifMenu from './src/components/admin/Menu/Tatabahasa/Negatif/NegatifMenu';
import Negatif1 from './src/components/admin/Menu/Tatabahasa/Negatif/Negatif1';
import Negatif2 from './src/components/admin/Menu/Tatabahasa/Negatif/Negatif2';
import Negatif3 from './src/components/admin/Menu/Tatabahasa/Negatif/Negatif3';
import Negatif4 from './src/components/admin/Menu/Tatabahasa/Negatif/Negatif4';
import HirakataEdit from './src/components/admin/Menu/Hirakata/HirakataEdit';
import Kanjin5Edit from './src/components/admin/Menu/Kanjin5/Kanjin5Edit';
import KataBendaEdit from './src/components/admin/Menu/KataBenda/KataBendaEdit';
import KataKerjaEdit from './src/components/admin/Menu/KataKerja/KataKErjaEdit';
import KataSifatEdit from './src/components/admin/Menu/KataSifat/KataSifatEdit';

NativeWindStyleSheet.setOutput({
  default: "native",
});

axios.defaults.withCredentials = true;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Index' screenOptions={{headerShown: false}}>
          <Stack.Screen name="LPK Yukimaga Surakarta" component={Index} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Administrator" component={Administrator} />
          <Stack.Screen name="Kenshusei" component={Kenshusei} />
          <Stack.Screen name="Pembayaran" component={Pembayaran} />
          <Stack.Screen name="Detail Pembayaran" component={DetailPembayaran} />
          {/* hirakata */}
          <Stack.Screen name="Hirakata" component={Hirakata} />
          <Stack.Screen name="Hirakata Edit" component={HirakataEdit} />
          <Stack.Screen name="Tabel Hirakata" component={TabelHirakata} />
          {/* kanji */}
          <Stack.Screen name="Kanjin5" component={Kanjin5} />
          <Stack.Screen name="Kanjin5 Edit" component={Kanjin5Edit} />
          <Stack.Screen name="Tabel Kanjin5" component={TabelKanjin5} />
          {/* katabenda */}
          <Stack.Screen name="KataBenda" component={KataBenda} />
          <Stack.Screen name="KataBenda Edit" component={KataBendaEdit} />
          <Stack.Screen name="Tabel KataBenda" component={TabelKataBenda} />
          {/* katakerja */}
          <Stack.Screen name="KataKerja" component={KataKerja} />
          <Stack.Screen name="KataKerja Edit" component={KataKerjaEdit} />
          <Stack.Screen name="Tabel KataKerja" component={TabelKataKerja} />
          {/* katasifat */}
          <Stack.Screen name="KataSifat" component={KataSifat} />
          <Stack.Screen name="KataSifat Edit" component={KataSifatEdit} />
          <Stack.Screen name="Tabel KataSifat" component={TabelKataSifat} />
          <Stack.Screen name="Admin" component={Administrasi} />
          <Stack.Screen name="Tabel Admin" component={TabelAdmin} />
          <Stack.Screen name="Tabel Kenshu" component={TabelKenshu} />
          <Stack.Screen name="TBmenu1" component={TBmenu} />
          <Stack.Screen name="Pamenu1" component={Pmenu} />
          <Stack.Screen name="Partikel" component={Partikel} />
          <Stack.Screen name="Partikel2" component={Partikel2} />
          <Stack.Screen name="Partikel3" component={Partikel3} />
          <Stack.Screen name="Partikel4" component={Partikel4} />
          <Stack.Screen name="Partikel5" component={Partikel5} />
          <Stack.Screen name="Pomenu" component={Pomenu} />
          <Stack.Screen name="Pola" component={Pola} />
          <Stack.Screen name="Pola2" component={Pola2} />
          <Stack.Screen name="Pola3" component={Pola3} />
          <Stack.Screen name="Pola4" component={Pola4} />
          <Stack.Screen name="Pola5" component={Pola5} />
          <Stack.Screen name="Pola6" component={Pola6} />
          <Stack.Screen name="KamusMenu" component={KamusMenu} />
          <Stack.Screen name="Kamus1" component={Kamus1} />
          <Stack.Screen name="Kamus2" component={Kamus2} />
          <Stack.Screen name="Kamus3" component={Kamus3} />
          <Stack.Screen name="Kamus4" component={Kamus4} />
          <Stack.Screen name="SopanMenu" component={SopanMenu} />
          <Stack.Screen name="Sopan1" component={Sopan1} />
          <Stack.Screen name="Sopan2" component={Sopan2} />
          <Stack.Screen name="Sopan3" component={Sopan3} />
          <Stack.Screen name="Sopan4" component={Sopan4} />
          <Stack.Screen name="NegatifMenu" component={NegatifMenu} />
          <Stack.Screen name="Negatif1" component={Negatif1} />
          <Stack.Screen name="Negatif2" component={Negatif2} />
          <Stack.Screen name="Negatif3" component={Negatif3} />
          <Stack.Screen name="Negatif4" component={Negatif4} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
