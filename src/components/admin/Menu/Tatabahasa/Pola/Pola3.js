import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola3 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>3. Penggunaan だろう/でしょう atau Darou/Deshou</Text>
      <Text style={styles.text}>
        "Daro(u)" (だろう) adalah bentuk kontraksi dari kata "desu" (です) dan "arou" (あろう) dalam bahasa Jepang. Bentuk ini mengekspresikan kemungkinan atau dugaan terhadap sesuatu.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>                
        1. Kata Kerja Kasual + だろう / でしょう{'\n'}
        2. Kata Sifat -i & na + だろう / でしょう{'\n'}
        3. Kata Benda + だろう / でしょう{'\n'}{'\n'}
    <Text style={styles.text2}>
        Contoh kalimat{'\n'}</Text>
        - 彼はもう来たかもしれないだろう。{'\n'}
        - Kare wa mou kita kamoshirenai darou.{'\n'}
        - Mungkin dia sudah datang.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.title}>
        4. Penggunaan 会います atau Aimasu{'\n'}
      </Text>
        "Aimasu" (会います) adalah kata kerja dalam bahasa Jepang yang berarti "bertemu" dalam bahasa Indonesia. Partikel to (と) disini memiliki arti ‘menemui’, yakni digunakan untuk menunjukkan bahwa subjek dan lawan memiliki rencana untuk saling bertemu. Sedangkan partikel ni (に) disini dapat diartikan ‘menemui’, yakni Subjek berencana menemui lawan namun lawan subjek tidak berencana ingin menemui balik, bisa juga digunakan ketika kedua pihak betemu secara tidak sengaja.
      </Text>
      <Text style={styles.text}>
       <Text style={{fontWeight: 'bold'}}>Pola kalimat{'\n'}</Text>
        1. Subjek + と + 会います{'\n'}
        2. Subjek + に + 会います{'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Contoh kalimat{'\n'}</Text>
        - 誰とも会いません{'\n'}
        - Dare to mo aimasen{'\n'}
        - Saya tidak bertemu dengan siapapun.
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

export default Pola3;
