import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { DataTable, Searchbar } from 'react-native-paper';
import axios from 'axios';

const TabelKenshu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pesertamagang, setPesertaMagang] = useState([]);

  const onChangeSearch = query => setSearchQuery(query);

   useEffect(()=>{
        getPesertaMagang();
    },[]);

    const getPesertaMagang = async() => {
        const response = await axios.get('http://192.168.1.5:5000/pesertamagang');
        setPesertaMagang(response.data);
    }

  const filteredData = pesertamagang.filter(item =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.alamat.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tgllahir.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tempatlahir.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.notelp.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.jkel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
    <Text>Tabel Kenshusei</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView horizontal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{marginLeft: 5, width: 50}}>No.</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Nama</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 150}}>Alamat</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Tempat Lahir</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Tanggal Lahir</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>No. Telpon</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Jenis Kelamin</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 150}}>Email</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Status</DataTable.Title>
          <DataTable.Title style={{marginLeft: 5, width: 100}}>Opsi</DataTable.Title>
        </DataTable.Header>

        {pageData.map((item, index) => (
          <DataTable.Row key={item.id} >
            <DataTable.Cell style={{marginLeft: 5, width: 50}}>{index+1}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.nama}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 150}}>{item.alamat}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.tempatlahir}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.tgllahir}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.notelp}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.jkel}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 150}}>{item.email}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.role}</DataTable.Cell>
            <DataTable.Cell style={{marginLeft: 5, width: 100}}>{item.role}</DataTable.Cell>
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
    },
        searchBar: {
        marginBottom: 10,
        backgroundColor: '#59f'
    },
    pagination: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#59f'
  },
});

export default TabelKenshu;
