import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Pengertian</Text>
      <Text style={styles.text}>
        Pola kata dan pola kalimat sangat penting dalam belajar bahasa Jepang, karena pola-pola ini membantu Anda membangun keterampilan dasar untuk membaca, menulis, dan berbicara dalam bahasa Jepang.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kata (Kata no Kihon){'\n'}
      </Text>
        Pola kata atau "Kata no Kihon" dalam bahasa Jepang merujuk pada cara kata-kata dasar dibentuk dengan menggunakan huruf hiragana, katakana, dan kanji. Pola-pola kata ini meliputi cara menambahkan akhiran ke kata dasar, menggabungkan kata-kata untuk membentuk kata majemuk, dan mengubah kata-kata menjadi kata sifat atau kata kerja.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        Akhiran kata benda: (−さん), (−ちゃん), (−くん), (−先生), (−さん){'\n'}
        Akhiran kata sifat: (−い), (−な), (−かわいい), (−おいしい){'\n'}
        Akhiran kata kerja: (−ます), (−ました), (−ている), (−ない), (−たい)
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat (Bun no Kihon){'\n'}
      </Text>
        Pola kalimat atau "Bun no Kihon" dalam bahasa Jepang merujuk pada cara kalimat dibentuk dengan menggunakan subjek, predikat, objek, partikel, dan konjungsi. Pola-pola kalimat ini membantu Anda memahami tata bahasa dasar dalam bahasa Jepang dan memungkinkan Anda untuk membangun kalimat yang lebih kompleks.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}{'\n'}
      </Text>
        Kalimat sederhana: (Subjek) + (Predikat){'\n'}
        Contoh: 私は学生です (Watashi wa gakusei desu) = Saya adalah seorang mahasiswa.{'\n'}{'\n'}
        Kalimat tanya: (Subjek) + (Predikat) + か？{'\n'}
        Contoh: あなたは何をしていますか？ (Anata wa nani o shite imasu ka?) = Apa yang sedang Anda lakukan?{'\n'}{'\n'}
        Kalimat negatif: (Subjek) + (Predikat) + ない{'\n'}
        Contoh: 彼は勉強していない (Kare wa benkyou shite inai) = Dia tidak sedang belajar.{'\n'}{'\n'}
        Kalimat kompleks: (Subjek) + (Konjungsi) + (Subjek) + (Predikat){'\n'}
        Contoh: 彼女は病気だけど、明日来ます (Kanojo wa byouki dakedo, ashita kimasu) = Dia sakit tetapi akan datang besok.
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

export default Pola;
