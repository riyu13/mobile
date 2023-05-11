import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { DataTable, Searchbar, Text, Button } from 'react-native-paper';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TabelKataSifat = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [katasifat, setKataSifat] = useState([]);
  const [limit] = useState(0);
  const [rows, setRows] = useState(0);
  const [pages, setPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const navigation = useNavigation();

  const editData = uuid => {
    console.log(navigation);
    navigation.navigate('KataSifat Edit', { uuid });
  };

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(()=>{
        getKataSifat();
    },[]);

  const deleteKataSifat = async (KataSifatId) => {
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
          axios.delete(`http://192.168.1.5:5000/katasifat/${KataSifatId}`)
            .then(response => {
              console.log(response.data);
              getKataSifat();
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

  const getKataSifat = async() => {
        const response = await axios.get(`http://192.168.1.5:5000/katasifat?search_query=${keyword}&page=${page}&limit=${limit}`);
        setKataSifat(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    }

  const filteredData = katasifat.filter(item =>
    item.kanji.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.arti.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.romaji.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Daftar Kata Sifat N5</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView horizontal>
      <DataTable>
        <DataTable.Header style={{backgroundColor: '#FFFFE0', marginBottom: 2, borderRadius: 5}}>
          <DataTable.Title style={{width: 30}}>No.</DataTable.Title>
          <DataTable.Title style={{width: 80}}>Kanji</DataTable.Title>
          <DataTable.Title style={{width: 100}}>Romaji</DataTable.Title>
          <DataTable.Title style={{width: 100}}>Arti</DataTable.Title>
          <DataTable.Title style={{ width: 80, justifyContent: 'center' }}>Edit</DataTable.Title>
          <DataTable.Title style={{ width: 80 }}>Hapus</DataTable.Title>
        </DataTable.Header>

        {pageData.map((item, index) => (
          <DataTable.Row key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#FFFFE0' : '#F0E68C', borderRadius: 5, marginBottom: 1 }}>
            <DataTable.Cell style={{width: 30}}>{index+1}</DataTable.Cell>
            <DataTable.Cell style={{width: 80}}>{item.kanji}</DataTable.Cell>
            <DataTable.Cell style={{width: 100}}>{item.romaji}</DataTable.Cell>
            <DataTable.Cell style={{width: 100}}>{item.arti}</DataTable.Cell>
            <DataTable.Cell style={{ width: 80, justifyContent: 'center' }}>
            <Button onPress={() => editData(item.uuid)}>
              <FontAwesome5 name="edit" size={18} color="#8B4513" />
            </Button>
            </DataTable.Cell>
            <DataTable.Cell style={{width: 80}}><Button onPress={()=>deleteKataSifat(item.uuid)}><FontAwesome5 name="trash" size={18} color="#8B4513"/></Button></DataTable.Cell>
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
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
        searchBar: {
        marginBottom: 10,
        backgroundColor: '#8B4513',
    },
    pagination: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#8B4513',
        borderRadius: 5
},
});

export default TabelKataSifat;
