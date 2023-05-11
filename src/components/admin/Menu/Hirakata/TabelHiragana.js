import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { DataTable, Searchbar, Text, Button } from 'react-native-paper';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TabelHirakata = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [hirakata, setHirakata] = useState([]);
  const navigation = useNavigation();

  const editData = uuid => {
    console.log(navigation);
    navigation.navigate('Hirakata Edit', { uuid });
  };

  const onChangeSearch = query => setSearchQuery(query);

  const deleteHirakata = async (HirakataId) => {
  Alert.alert(
    'Peringatan !',
    'Apakah anda akan menghapus data ini?',
    [
      {
        text: 'Batal',
        onPress: () => console.log('Tombol Batal ditekan'),
        style: 'cancel'
      },
      { 
        text: 'OK', 
        onPress: () => {
          axios.delete(`http://192.168.1.5:5000/hirakata/${HirakataId}`)
            .then(response => {
              console.log(response.data);
              getHirakata();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    ],
    { cancelable: false }
  );
};
  const getHirakata = async() => {
        const response = await axios.get('http://192.168.1.5:5000/hirakata');
        setHirakata(response.data)
    }
  
  useEffect(()=>{
        getHirakata();
    },[]);

    
  const filteredData = hirakata.filter(item =>
    item.hiragana.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.katakana.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.romaji.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Tabel Hiragana dan Katakana</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView horizontal>
      <DataTable>
      <DataTable.Header style={{ backgroundColor: '#FFFFE0', marginBottom: 2, borderRadius: 5 }}>
        <DataTable.Title style={{ width: 30, justifyContent: 'center' }}>No.</DataTable.Title>
        <DataTable.Title style={{ width: 80, justifyContent: 'center' }}>Hiragana</DataTable.Title>
        <DataTable.Title style={{ width: 80, justifyContent: 'center' }}>Katakana</DataTable.Title>
        <DataTable.Title style={{ width: 80, justifyContent: 'center' }}>Romaji</DataTable.Title>
        <DataTable.Title style={{ width: 80, justifyContent: 'center' }}>Edit</DataTable.Title>
        <DataTable.Title style={{ width: 80 }}>Hapus</DataTable.Title>
      </DataTable.Header>

      {pageData.map((item, index) => (
        <DataTable.Row key={item.uuid} style={{ backgroundColor: index % 2 === 0 ? '#FFFFE0' : '#F0E68C', borderRadius: 5, marginBottom: 1 }}>
          <DataTable.Cell style={{ width: 30, justifyContent: 'center' }}>{index + 1}</DataTable.Cell>
          <DataTable.Cell style={{ width: 80, justifyContent: 'center' }}>{item.hiragana}</DataTable.Cell>
          <DataTable.Cell style={{ width: 80, justifyContent: 'center' }}>{item.katakana}</DataTable.Cell>
          <DataTable.Cell style={{ width: 80, justifyContent: 'center' }}>{item.romaji}</DataTable.Cell>
          <DataTable.Cell style={{ width: 80, justifyContent: 'center' }}>
            <Button onPress={() => editData(item.uuid)}>
              <FontAwesome5 name="edit" size={18} color="#8B4513" />
            </Button>
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 80}}>
            <Button onPress={() => deleteHirakata(item.uuid)}>
              <FontAwesome5 name="trash" size={18} color="#8B4513" />
            </Button>
          </DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(filteredData.length / rowsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${startIndex + 1}-${endIndex} of ${filteredData.length}`}
        showFastPaginationControls
        rowsPerPageOptions={[5, 10, 20]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={rowsPerPage => {
          setRowsPerPage(rowsPerPage);
          setPage(0);
        }}
        style={styles.pagination}
      />
    </DataTable>
  </ScrollView>
</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#B0E0E6',
        alignItems: 'center',
    },
    searchBar: {
        marginBottom: 10,
        backgroundColor: '#8B4513',
        width: 300,
    },
    pagination: {
        marginTop: 10,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#8B4513',
},
});

export default TabelHirakata;
