/* Soal No 1

ALGORITMA
============================
1. Buat variable phi
2. Buat variable r
3. Buat variable volume
4. Proses volume dengan 1/2 dikali phi dikali r
5. Buat variable output1 dengan kalimat "1. Hasil Hitung Volume Setengah Bola yaitu : " 
ditambah variable volume untuk menggabungkan
6. Cetak output1
============================

PSEUDOCODE
============================
1. STORE phi WITH ANY NUMBER
2. STORE r WITH ANY NUMBER
3. SET volume WITH 1/2 or 0.5 MULTIPLY phi MULTIPLY r
4. SET variable output1 WITH WORDS "1. Hasil Hitung Volume Setengah Bola yaitu : " ADD variable volume to combine
5. Display output1
============================
*/
var phi = 3.14;
var r = 7;
var volume = 1/2*phi*r*r*r;
var output1 = "1. Hasil Hitung Volume Setengah Bola yaitu : " + volume;
console.log(output1);

/* Soal No 2

 ALGORITMA
============================
1. Buat variable kata
2. Buat variable output2 dengan kalimat "\n2. Menampilkan hasil kalimat : " 
ditambah variable kata untuk menggabungkan
3. Cetak output2
============================

PSEUDOCODE
============================
1. STORE kata WITH ANY WORDS
2. SET variable output2 WITH WORDS "\n2. Menampilkan hasil kalimat : " ADD variable kata to combine
3. Display output2
============================
*/
var kata = "Selamat belajar, Pradnya Anya!";
var output2 = "\n2. Menampilkan hasil kalimat : " + kata;
console.log(output2);

/* Soal No 3

 ALGORITMA
============================
1. Buat variable nama
2. Buat variable status dengan nilai true
3. Buat variable number
4. Proses number dengan MATH FLOOR(MATH RANDOM() dikali 10)
5. Buat variable output3 dengan kalimat "\n3. Menampilkan generate angka secara random : " 
ditambah variable kata ditambah variable number ditambah variable status untuk menggabungkan
6. Cetak output3
============================

PSEUDOCODE
============================
1. STORE nama WITH ADMIN WORDS
2. STORE status WITH TRUE value
3. SET number WITH MATH FLOOR(MATH RANDOM() MULTIPLY 10)
4. SET variable output3 WITH WORDS "\n3. Menampilkan generate angka secara random : " ADD kata ADD number ADD status to combine
5. Display output3
============================
*/
var nama = "admin";
var status = true;
Math.random();

var number = Math.floor(Math.random() * 10);

var output3 = "\n3. Menampilkan generate angka secara random : " + nama + number + status;
console.log(output3);