import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Negatif3 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>4. Kata kerja + ~なくてもいい</Text>
      <Text style={styles.text}>
       Frasa dalam bahasa Jepang yang berarti "tidak apa-apa jika aku mati" atau "aku tidak peduli jika aku mati". Frasa ini sering digunakan untuk menunjukkan tekad yang kuat atau semangat yang berani di mana seseorang siap mengambil risiko atau pengorbanan untuk tujuan yang lebih besar.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
       ~ Kata kerja + ~なくてもいい
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        ~ あなたはこの物を見なくてもいい。{'\n'}
        ~ Anata wa kono mono wo minakutemoii.{'\n'}
        ~ Kamu tidak perlu melihat benda ini.
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

export default Negatif3;
