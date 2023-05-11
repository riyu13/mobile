import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola5 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>7. にする atau Ni suru</Text>
      <Text style={styles.text}>
        Kata "ni suru" dalam bahasa Jepang adalah sebuah frasa yang berarti "melakukan" atau "menjalankan". Frasa ini terdiri dari dua bagian, yaitu "ni" yang berarti "kepada" atau "untuk" dan "suru" yang berarti "melakukan".
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>                
        - Kata benda + にする{'\n'}{'\n'}
    <Text style={styles.text2}>
        Contoh kalimat{'\n'}</Text>
        - 紅茶にする{'\n'}
        - Koucha ni suru{'\n'}
        - Pilih teh
      </Text>
      <Text style={styles.text}>
      <Text style={styles.title}>
        8.Penggunaan と言います atau Toiimasu{'\n'}
      </Text>
        "Toiimasu" (と言います) dalam bahasa Jepang berarti "mengatakan" atau "mengucapkan". Frasa ini berasal dari kata kerja "iu" (言う) yang artinya juga "mengatakan" atau "berbicara".
      </Text>
      <Text style={styles.text}>
       <Text style={{fontWeight: 'bold'}}>Pola kalimat{'\n'}</Text>
        - Subject(Nama orang) + と言います{'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Contoh kalimat{'\n'}</Text>
        - あの人は明日休みと言いました。{'\n'}
        - ano hito wa ashita yasumi toiimashita.{'\n'}
        - Orang itu mengatakan besok libur.
      </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffe0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8B4513',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#8B4513',
  },
  text2: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#8B4513',
    fontWeight: 'bold',
  },
});

export default Pola5;
