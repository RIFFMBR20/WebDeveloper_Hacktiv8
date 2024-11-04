function pengaturanTempatDuduk(karyawan, kolom) {
    let jumlahKaryawan = karyawan.length;
    let jumlahKolom = Math.ceil(jumlahKaryawan / kolom);
    // console.log(jumlahKolom);
    let result = [];
    let point = 0;
    for (let i = 0; i < jumlahKolom; i++) {
        let klmpk = [];
        for (let j = 0; j < kolom; j++) {
            // klmpk.push(karyawan[j+(i+1)]);
            klmpk.push(karyawan[point]);
            point++;
        }
        result.push(klmpk);
    }

    for ((value) of result) {
        for (let i = 0; i < kolom; i++) {
            if (value[i] === undefined) {
                value[i] = "Kursi Kosong";
            } 
        }
    }
    return result
}

namaKaryawan =['john','mary','sarah','jake','anna']

console.log(pengaturanTempatDuduk(namaKaryawan, 3))

