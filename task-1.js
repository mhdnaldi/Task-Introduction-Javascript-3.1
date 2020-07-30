const cekHariKerja = (day) => {
  return new Promise((response, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        response(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Menggunakan then & catch
let data = cekHariKerja('senin')
data.then((response) => console.log(response))
.catch((error) => console.log(error))
/* Penggunaan then dijalankan pada saat state/keadaan fulfilled atau resolve
   Penggunaan catch dijalankan pada saat state/keadaan rejected atau ditolak
*/

// Menggunakan try & catch
// async function test(day) {
//   try {
//     let data = await cekHariKerja(day)
//     console.log(data);
//   } catch(err) {
//     console.error(err)
//   }
// }
// test('sabtu')
/* Penggunaan try dijalankan pada saat state/keadaan fulfilled atau resolve
   Penggunaan catch dijalankan pada saat state/keadaan rejected atau ditolak
*/
