import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola6 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>9. なかなか atau Naka-naka</Text>
      <Text style={styles.text}>
        "Naka naka" adalah sebuah frasa dalam bahasa Jepang yang memiliki arti "sangat" atau "tidak mudah". "Naka naka" berarti "sangat" atau "tidak mudah" dan digunakan untuk mengekspresikan sebuah hal yang sulit atau tidak mudah dilakukan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>                
        - なかなか + kata kerja negatif{'\n'}{'\n'}
    <Text style={styles.text2}>
        Contoh kalimat{'\n'}</Text>
        - 彼は、新しい言語を学ぶのがなかなかできなかった。{'\n'}
        - Kare wa, atarashii gengo o manabu no ga naka naka dekinakatta.{'\n'}
        - Dia kesulitan belajar bahasa baru.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.title}>
        10. あまり atau Amari{'\n'}
      </Text>
        "Amari" adalah kata dalam bahasa Jepang yang dapat digunakan sebagai kata sifat atau kata keterangan, dan secara umum berarti "tidak terlalu" atau "tidak banyak". Kata ini sering digunakan untuk menyatakan kuantitas, intensitas, atau kualitas yang rendah atau kurang dari yang diharapkan.
      </Text>
      <Text style={styles.text}>
       <Text style={{fontWeight: 'bold'}}>Pola kalimat{'\n'}</Text>
        - あまり + predikat negatif{'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Contoh kalimat{'\n'}</Text>
        - あのレストランの料理はあまり美味しくなかったです。{'\n'}
        - Ano resutoran no ryōri wa amari oishikunakatta desu.{'\n'}
        - Makanan di restoran itu tidak terlalu enak.
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

export default Pola6;
