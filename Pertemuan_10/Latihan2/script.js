function daftarNasabahLolos(nasabah) {
  // console.log(nasabah)
  // console.log(nasabah.length)
  let daftarPlatinum = [];
  let daftarGold = [];
  let daftarSilver = [];
  point = 0;

  for (let i = 0; i < nasabah.length; i++) {
    if (nasabah[i].nilaiKredit < 75) {
      continue;
    }

    if (nasabah[i].kelasKredit == "Platinum") {
      daftarPlatinum.push({
        nama: nasabah[point].nama,
        nilaiKredit: nasabah[i].nilaiKredit,
      });
      // daftarPlatinum.push(nasabah[point].nama, nasabah[i].nilaiKredit)
    } else if (nasabah[i].kelasKredit == "Gold") {
      daftarGold.push({
        nama: nasabah[point].nama,
        nilaiKredit: nasabah[i].nilaiKredit,
      });
      // daftarGold.push(nasabah[point].nama, nasabah[i].nilaiKredit)
    } else if (nasabah[i].kelasKredit == "Silver") {
      daftarSilver.push({
        nama: nasabah[point].nama,
        nilaiKredit: nasabah[i].nilaiKredit,
      });
      // daftarSilver.push(nasabah[point].nama, nasabah[i].nilaiKredit)
    }
    point++;
  }

  const result = {
    daftarSilver,
    daftarGold,
    daftarPlatinum,
  };
  console.log(result);
  // console.log('Silver: ',daftarSilver)
  // console.log('Gold: ',daftarGold)
  // console.log('Platinum: ', daftarPlatinum)
}

console.log(
  daftarNasabahLolos([
    { nama: "john", nilaiKredit: 80, kelasKredit: "Platinum" },
    { nama: "jane", nilaiKredit: 60, kelasKredit: "Gold" },
    { nama: "doe", nilaiKredit: 85, kelasKredit: "Platinum" },
    { nama: "smith", nilaiKredit: 77, kelasKredit: "Silver" },
  ])
);
