import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { DataTable, Searchbar } from 'react-native-paper';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';

const DataTableExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pembayaran, setPembayaran] = useState([]);

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(()=>{
        getPembayaran();
    },[]);

    const getPembayaran = async() => {
        const response = await axios.get('http://192.168.1.5:5000/pembayaran');
        setPembayaran(response.data)
    }

  const filteredData = pembayaran.filter(item =>
    item.keterangan.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.biaya.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.pesertamagang.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Detail Pembayaran</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView horizontal>
      <DataTable>
        <DataTable.Header style={{backgroundColor: '#FFFFE0', marginBottom: 2, borderRadius: 5}}>
          <DataTable.Title style={{width: 100}}>Nota</DataTable.Title>
          <DataTable.Title style={{width: 200}}>Keterangan</DataTable.Title>
          <DataTable.Title style={{width: 100}}>Biaya</DataTable.Title>
          <DataTable.Title style={{width: 100}}>Nama</DataTable.Title>
          <DataTable.Title style={{width: 100}}>Opsi</DataTable.Title>
        </DataTable.Header>

        {pageData.map(item => (
          <DataTable.Row key={item.uuid} style={{backgroundColor: '#FFFFE0', marginBottom: 1, borderRadius: 5}}>
            <DataTable.Cell style={{width: 100}}>{item.uuid}</DataTable.Cell>
            <DataTable.Cell style={{width: 200}}>{item.keterangan}</DataTable.Cell>
            <DataTable.Cell style={{width: 100}}>{item.biaya}</DataTable.Cell>
            <DataTable.Cell style={{width: 100}}>{item.pesertamagang.nama}</DataTable.Cell>
            <DataTable.Cell style={{width: 100}}><FontAwesome5 name="trash" size={18} color="#8B4513"/></DataTable.Cell>
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
        backgroundColor: '#8B4513'
    },
    pagination: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#8B4513'
},
});

export default DataTableExample;
