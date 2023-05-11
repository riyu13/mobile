import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Card, Title, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios'

const Administrasi = ({ navigation }) => {
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

    
    useEffect( ()=>{
        const getProvinces= async()=>{
            const resprovinces= await fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
            const respro= await resprovinces.json();
            setProvinces(await respro);
        }
        getProvinces();
    },[]);

    const handleprovinces=(event)=>{
        const getprovinceid= event.target.value;
        setProvinceid(getprovinceid);
    }

    useEffect( ()=>{
        const getRegencies= async()=>{
            const resregencies= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
            const resreg= await resregencies.json();
            setRegencies(await resreg);
        }
       getRegencies();
        },[provinceId]);
    
    const handleregencies=(event)=>{
        const getregenciesid= event.target.value;
        setRegenciesid(getregenciesid);
    }
    
    useEffect( ()=>{
        const getDistricts= async()=>{
            const resdistricts= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
            const resdis= await resdistricts.json();
            setDistricts(await resdis);
        }
       getDistricts();
        },[regencyId]);
    
    const handledistricts=(event)=>{
        const getdistrictsid= event.target.value;
        setDistrictsid(getdistrictsid);
    }

    useEffect( ()=>{
        const getVillages= async()=>{
            const resvillages= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`);
            const resvil= await resvillages.json();
            setVillages(await resvil);
        }
       getVillages();
        },[districtId]);
  
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

   const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.1.5:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

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
        <Title style={styles.title}>Administrasi</Title>
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
   <SelectList
      items={provinces}
      label={"Pilih Provinsi"}
      labelKey={"name"}
      valueKey={"id"}
      onChange={(value) => handleprovinces(value)}
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
      <Button mode="contained" style={styles.button} onPress={saveUser}>
        Simpan
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Tabel Admin')}>
        Daftar Administrasi
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

export default Administrasi;
