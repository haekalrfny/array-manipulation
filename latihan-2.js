let nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8]

// // Mencari Mean

// let jumlah = [
//     nilaiSantri[0] +
//     nilaiSantri[1] +
//     nilaiSantri[2] +
//     nilaiSantri[3] +
//     nilaiSantri[4] +
//     nilaiSantri[5] +
//     nilaiSantri[6] +
//     nilaiSantri[7] +
//     nilaiSantri[8] ]
    
// let mean = [jumlah / nilaiSantri.length]
// document.write('Nilai mean : ' + mean);

// Mencari median

// let median = nilaiSantri.sort(function (a, b) {
//     return a - b
// })

// document.write(median);

// let hasilMedian = median;
// if (hasilMedian.length % 2 === 0) {
//   document.write(
//     "<br>",
//     "Median :",
//     (hasilMedian[(1 / 2) * hasilMedian.length - 1] + hasilMedian[(1 / 2) * hasilMedian.length]) / 2
//   );
// } else {
//   document.write(
//     `<br> Median :  ${
//       hasilMedian[(1 / 2) * (hasilMedian.length + 1)]
//     }`
//   );
// }

// Mencari modus 

// let modus = nilaiSantri.sort(function (a, b) {
//     return a - b
// })

// document.write(modus)
// let hasil = modus.splice(2,6 )
// document.write('<br>'+ hasil)

// Simpangan Baku

// menghitung nilai rata-rata
const nilaiRataRata = nilaiSantri.reduce((sum, current) => sum + current, 0) / nilaiSantri.length;
console.log(nilaiRataRata);
//membulatkan hasil nilai
const hasilNilaiRata = nilaiRataRata.toFixed()

//mencari varian pada data
data = nilaiSantri.map( (k)=>{return ((k - hasilNilaiRata))**2})

const sum = data.reduce((acc, cur)=> acc + cur,0)

const varians = sum / nilaiSantri.length
const varian = varians.toFixed()
//mengkuadratkan dari hasil varian
const penghitunganSB = (varians) => {
    return Math.sqrt(varians);
};

const simpanganBaku = penghitunganSB(varians).toFixed(2);

document.write(`nilai rata-rata : ${hasilNilaiRata} </br> nilai varian : ${varian} </br> simpangan baku : ${simpanganBaku}`)























