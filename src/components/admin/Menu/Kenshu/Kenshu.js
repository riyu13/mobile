import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Card, Title, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list'

const Kenshusei = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [text, setText] = useState('');
  const [selected, setSelected] = React.useState("");
  const [provinces, setProvinces]= useState([]);
    const [provinceId, setProvinceid]=useState('');
    const [regencies, setRegencies]= useState([]);
    const [regencyId, setRegenciesid]= useState('');
    const [districts, setDistricts]= useState([]);
    const [districtId, setDistrictsid]= useState('');
    const [villages, setVillages]= useState([]);
    //data yang diinputkan masuk kedalam sini
    const [nama, setNama] = useState("");
    const [tempatlahir, setTempatLahir] = useState("");
    const [tgllahir, setTglLahir] = useState("");
    const [provinsi, setProvinsi] = useState("");
    const [kota, setKota] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [kelurahan, setKelurahan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [notelp, setNotelp] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
  
  const jkel = [
      {key:'1', value:'Pria'},
      {key:'2', value:'Wanita'},
  ]

  const role2 = [
    {key:'1', value:'Admin' },
    {key:'2', value:'Sensei' }
  ]

   const data2 = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
  ]

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <ScrollView>
        <Card.Content>
        <Title style={styles.title}>Kenshusei</Title>
      <TextInput
        label="Nama"
        value={nama}
        onChangeText={(inputText) => setNama(inputText)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Tempat Lahir"
        value={tempatlahir}
        onChangeText={(inputText) => setTempatLahir(inputText)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Tanggal Lahir"
        value={date.toLocaleDateString()}
        onFocus={() => setShowDatePicker(true)}
        style={styles.input}
        mode="outlined"
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <Text>Jenis Kelamin</Text>
      <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={jkel} 
        save="value"
    />
    <Text>Provinsi</Text>
    <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={data2} 
        save="value"
    />
    <Text>Kota/Kabupaten</Text>
    <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={data2} 
        save="value"
    />
    <Text>Kecamatan</Text>
    <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={data2} 
        save="value"
    />
    <Text>Kelurahan</Text>
    <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={data2} 
        save="value"
    />
    <TextInput
        label="Alamat"
        value={alamat}
        onChangeText={(inputText) => setAlamat(inputText)}
        style={styles.input}
        multiline={true}
        mode="outlined"
      />
      <TextInput
        label="No. Telpon"
        value={notelp}
        onChangeText={(inputText) => setNotelp(inputText)}
        style={styles.input}
        mode="outlined"
      />
    <Text>Status</Text>
    <SelectList dropdownStyles={{width: 300, backgroundColor: 'white', marginBottom: 16}}
        setSelected={(val) => setSelected(val)} 
        data={role2} 
        save="value"
    />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(inputText) => setEmail(inputText)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(inputText) => setPassword(inputText)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Konfirmasi Password"
        value={confpassword}
        onChangeText={(inputText) => setConfPassword(inputText)}
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Menu')}>
        Simpan
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Tabel Kenshu')}>
        Daftar Kenshusei
      </Button>
    </Card.Content>
    </ScrollView>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 20,

    color: 'white'
  },
  card: {
    height: '100%',
    width: '100%',
    padding: 16,
    backgroundColor: '#59f'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#fff'
  },
  button: {
    marginTop: 16,
    backgroundColor: '#32f'
  },
});

export default Kenshusei;
