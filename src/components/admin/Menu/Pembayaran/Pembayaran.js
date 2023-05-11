import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, RadioButton, Text } from 'react-native-paper';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker'

const Pembayaran = ({ navigation }) => {
  const [nama, setNama] = useState([]);
  const [keterangan, setKeterangan] = useState('');
  const [biaya, setBiaya] = useState('');
  const [pesertamagangid, setPesertaMagangId] = useState('');
  const [msg, setMsg] = useState('');

 const savePembayaran = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.1.5:5000/pembayaran", {
        keterangan: keterangan,
        biaya: biaya,
        pesertamagangId: pesertamagangid
      });
      navigation.navigate('Detail Pembayaran')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(()=>{
        getNama();
    },[]);

    const getNama = async()=>{
        const resnama = await axios.get(`http://192.168.1.5:5000/pesertamagang/${pesertamagangid}`);
        setNama(resnama.data);
    }
    
    const handlenama=(value)=>{
        setPesertaMagangId(value);
    }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Pembayaran</Title>
          <Picker
            selectedValue={pesertamagangid}
            onValueChange={handlenama}
            mode="dropdown"
            style={styles.input}
            >
            {nama.map((getnam, index) => (
            <Picker.Item key={index} label={getnam.nama} value={getnam.id} />
            ))}
            </Picker>
          <TextInput
            label="Keterangan"
            value={keterangan}
            onChangeText={(text) => setKeterangan(text)}
            mode="outlined"
            style={styles.input}
          />
          <RadioButton.Group onValueChange={value => setBiaya(value)} value={biaya}>
            <RadioButton.Item label="Kelas 1 | Rp. 2.800.000" value="2800000" />
            <RadioButton.Item label="Kelas 2 | Rp. 3.200.000" value="3200000" />
            <RadioButton.Item label="Kelas 3 | Rp. 5.200.000" value="5200000" />
          </RadioButton.Group>
          <Button mode="contained" style={styles.button} onPress={savePembayaran}>
            Simpan
          </Button>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Detail Pembayaran')}>
            Detail Pembayaran
          </Button>
        </Card.Content>
        <Text>{msg}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    backgroundColor: '#FFFFE0'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#000'
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor:  '#8B4513'
  },
});

export default Pembayaran;
